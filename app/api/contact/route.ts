import { NextRequest, NextResponse } from 'next/server';
import { sendLeadFallbackToMattermost } from '../../lib/lead-fallback-mattermost';

const MAX_BODY_BYTES = 64_000;
const MAX_FIELD_LENGTH = 4_000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const WINDOW_MS = 15 * 60_000;
const attempts = new Map<string, number[]>();

function text(form: FormData, key: string, max = MAX_FIELD_LENGTH) {
  const value = form.get(key);
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

function errorPage(status: number) {
  return new Response(
    '<!doctype html><html lang="en"><meta charset="utf-8"><title>Submission problem</title><main><h1>We could not send your request.</h1><p>Please go back and try again.</p><a href="/contact-us">Return to the contact form</a></main>',
    {
      status,
      headers: {
        'content-type': 'text/html; charset=utf-8',
        'cache-control': 'no-store',
      },
    },
  );
}

function ip(request: NextRequest) {
  return request.headers.get('cf-connecting-ip')
    || request.headers.get('x-real-ip')
    || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    || 'unknown';
}

function limited(key: string, max: number) {
  const now = Date.now();
  const recent = (attempts.get(key) || []).filter((time) => now - time < WINDOW_MS);
  recent.push(now);
  attempts.set(key, recent);
  if (attempts.size > 5_000) {
    for (const [attemptKey, times] of attempts) {
      if (!times.some((time) => now - time < WINDOW_MS)) attempts.delete(attemptKey);
    }
  }
  return recent.length > max;
}

async function readFormDataWithinLimit(request: NextRequest, contentType: string) {
  const reader = request.body?.getReader();
  if (!reader) return null;

  const chunks: Uint8Array[] = [];
  let totalBytes = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      totalBytes += value.byteLength;
      if (totalBytes > MAX_BODY_BYTES) {
        await reader.cancel().catch(() => undefined);
        return null;
      }
      chunks.push(value);
    }
  } catch {
    return null;
  }

  const body = new Uint8Array(totalBytes);
  let offset = 0;
  for (const chunk of chunks) {
    body.set(chunk, offset);
    offset += chunk.byteLength;
  }

  try {
    return await new Response(body, {
      headers: { 'content-type': contentType },
    }).formData();
  } catch {
    return null;
  }
}

export async function POST(request: NextRequest) {
  const contentType = request.headers.get('content-type') || '';
  const contentLengthHeader = request.headers.get('content-length');
  const declaredLength = contentLengthHeader === null ? null : Number(contentLengthHeader);
  const origin = request.headers.get('origin');
  if (
    (origin && origin !== request.nextUrl.origin)
    || (declaredLength !== null && (
      !Number.isFinite(declaredLength)
      || declaredLength < 0
      || declaredLength > MAX_BODY_BYTES
    ))
    || (!contentType.includes('application/x-www-form-urlencoded')
      && !contentType.includes('multipart/form-data'))
  ) return errorPage(400);

  if (limited(`ip:${ip(request)}`, 10)) return errorPage(429);

  const form = await readFormDataWithinLimit(request, contentType);
  if (!form) return errorPage(400);

  if (
    text(form, 'websiteConfirm')
    || text(form, 'website_confirm')
    || text(form, 'website_url')
    || text(form, 'company_homepage')
  ) return errorPage(400);

  const first = text(form, 'firstName', 100);
  const last = text(form, 'lastName', 100);
  const name = `${first} ${last}`.trim() || text(form, 'name', 200);
  const email = text(form, 'email', 320).toLowerCase();
  if (!name || !email || !EMAIL_RE.test(email)) return errorPage(422);
  if (limited(`email:${email}`, 3)) return errorPage(429);

  const pageUrl = request.headers.get('referer')
    || new URL('/contact-us', request.url).toString();
  const phone = text(form, 'phone', 100);
  const business = text(form, 'company', 300);
  const companySize = text(form, 'companySize', 100);
  const positions = text(form, 'positions') || text(form, 'role');
  const referral = text(form,'referral',300);
  const howTheyHeard = text(form,'howTheyHeard',300);
  const source = text(form, 'source', 300);
  const referralSpecify = text(form,'referralSpecify',300);
  const referralDetail = referral==='Other'&&referralSpecify
    ? `Other: ${referralSpecify}`
    : referral||howTheyHeard||source;
  const message = [
    text(form, 'message'),
    text(form, 'needs'),
    text(form, 'details'),
    positions,
    text(form, 'tier'),
    companySize,
    text(form, 'website'),
  ].filter(Boolean).join('\n');
  const payload = {
    full_name: name,
    email,
    phone,
    company_name: business,
    message,
    how_they_heard: referralDetail || 'Website contact form',
    client_event_id: crypto.randomUUID(),
    attribution: {
      source_page: pageUrl,
      landing_page: pageUrl,
      referrer: request.headers.get('referer') || '',
      page_journey: ['Contact form'],
    },
  };
  const token = process.env.LEAD_AUTH_TOKEN;
  const endpoint = process.env.LEAD_INGEST_URL || 'https://leads.stealthagents.com/api/leads';
  if (!token) return errorPage(503);
  try {
    const upstream = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-lead-token': token,
      },
      body: JSON.stringify(payload),
      cache: 'no-store',
      signal: AbortSignal.timeout(12_000),
    });
    const result = await upstream.json().catch(() => null) as { ok?: boolean } | null;
    if (!upstream.ok || result?.ok !== true) return errorPage(502);
  } catch {
    return errorPage(502);
  }
  void sendLeadFallbackToMattermost({
    name,
    email,
    phone,
    business,
    message,
    companySize,
    positions,
    referral: referralDetail,
    pageUrl,
    userAgent: request.headers.get('user-agent') || '',
  });
  return NextResponse.redirect(new URL('/thank-you?lead=accepted', request.url), 303);
}

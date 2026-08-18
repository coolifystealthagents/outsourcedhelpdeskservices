import assert from 'node:assert/strict';
import net from 'node:net';
import { spawn } from 'node:child_process';

const cwd = new URL('..', import.meta.url).pathname;
const host = '127.0.0.1';

async function availablePort() {
  return await new Promise((resolve, reject) => {
    const server = net.createServer();
    server.once('error', reject);
    server.listen(0, host, () => {
      const { port } = server.address();
      server.close((error) => error ? reject(error) : resolve(port));
    });
  });
}

function findTypedObject(value, type) {
  if (!value || typeof value !== 'object') return undefined;
  if (value['@type'] === type) return value;
  for (const child of Array.isArray(value) ? value : Object.values(value)) {
    const found = findTypedObject(child, type);
    if (found) return found;
  }
  return undefined;
}

async function waitUntilReady(baseUrl, processState) {
  const deadline = Date.now() + 90_000;
  while (Date.now() < deadline) {
    if (processState.exitCode !== null) {
      throw new Error(`Next development server exited before readiness with ${processState.exitCode}`);
    }
    try {
      const response = await fetch(baseUrl, { redirect: 'manual' });
      if (response.status < 500) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 300));
  }
  throw new Error('Next development server did not become ready');
}

const port = await availablePort();
const baseUrl = `http://${host}:${port}`;
const server = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'dev', '-H', host, '-p', String(port)], {
  cwd,
  env: { ...process.env, NEXT_TELEMETRY_DISABLED: '1' },
  stdio: ['ignore', 'pipe', 'pipe'],
});
let logs = '';
server.stdout.on('data', (chunk) => { logs += chunk; });
server.stderr.on('data', (chunk) => { logs += chunk; });

const failures = [];
try {
  await waitUntilReady(baseUrl, server);

  const route = '/blog/help-desk-queue-transfer-reason';
  const blogResponse = await fetch(`${baseUrl}${route}`, { redirect: 'manual' });
  assert.equal(blogResponse.status, 200, `${route} must render successfully`);
  const blogHtml = await blogResponse.text();
  const schemas = [...blogHtml.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)]
    .map((match) => JSON.parse(match[1]));
  const posting = schemas.map((schema) => findTypedObject(schema, 'BlogPosting')).find(Boolean);
  if (!posting) failures.push(`${route} must render BlogPosting JSON-LD`);
  else {
    if (posting.datePublished !== '2026-08-17') failures.push(`${route} datePublished must equal 2026-08-17, got ${posting.datePublished}`);
    if (posting.dateModified !== '2026-08-18') failures.push(`${route} dateModified must equal 2026-08-18, got ${posting.dateModified}`);
  }

  const pricingResponse = await fetch(`${baseUrl}/pricing`, { redirect: 'manual' });
  if (pricingResponse.status !== 308) failures.push(`/pricing must return permanent redirect status 308, got ${pricingResponse.status}`);
  const location = pricingResponse.headers.get('location');
  if (location !== '/contact') failures.push(`/pricing must redirect to /contact, got ${location}`);

  const homeResponse = await fetch(baseUrl, { redirect: 'manual' });
  assert.equal(homeResponse.status, 200, 'home page must render successfully');
  const homeHtml = await homeResponse.text();
  if (/href=["']\/pricing["']/.test(homeHtml)) failures.push('public home page must not expose a Pricing link or CTA');

  const contactResponse = await fetch(`${baseUrl}/contact`, { redirect: 'manual' });
  assert.equal(contactResponse.status, 200, 'contact page must render successfully');
  const contactHtml = await contactResponse.text();
  if (/\$(?:10|15|18)\s*\/\s*hour/i.test(contactHtml)) failures.push('public contact page must not expose hourly rates');
  if (/href=["']\/pricing["']/.test(contactHtml)) failures.push('public contact page must not expose a Pricing link or CTA');

  if (failures.length) throw new Error(`Editorial contract failures:\n- ${failures.join('\n- ')}`);
  console.log('August 17 structured-date and call-first redirect contract passed.');
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  if (logs) console.error(logs.slice(-4_000));
  process.exitCode = 1;
} finally {
  if (server.exitCode === null) {
    server.kill('SIGTERM');
    await new Promise((resolve) => {
      const timer = setTimeout(() => {
        if (server.exitCode === null) server.kill('SIGKILL');
        resolve();
      }, 5_000);
      server.once('exit', () => { clearTimeout(timer); resolve(); });
    });
  }
}

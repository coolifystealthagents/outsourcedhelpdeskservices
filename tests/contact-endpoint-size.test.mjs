import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { once } from 'node:events';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const repository = fileURLToPath(new URL('..', import.meta.url));

async function listen(server) {
  server.listen(0, '127.0.0.1');
  await once(server, 'listening');
  return server.address().port;
}

async function unusedPort() {
  const reservation = createServer();
  const port = await listen(reservation);
  await new Promise((resolve, reject) => reservation.close((error) => error ? reject(error) : resolve()));
  return port;
}

async function waitForNext(baseUrl, child, logs) {
  for (let attempt = 0; attempt < 120; attempt += 1) {
    if (child.exitCode !== null) throw new Error(`Next exited early (${child.exitCode})\n${logs.join('')}`);
    try {
      const response = await fetch(`${baseUrl}/api/contact`, { redirect: 'manual' });
      if (response.status > 0) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error(`Next did not become ready\n${logs.join('')}`);
}

function chunkedUrlEncoded(value) {
  const bytes = new TextEncoder().encode(value);
  return new ReadableStream({
    start(controller) {
      for (let offset = 0; offset < bytes.length; offset += 1_024) {
        controller.enqueue(bytes.slice(offset, offset + 1_024));
      }
      controller.close();
    },
  });
}

test('contact endpoint measures chunked bodies when Content-Length is missing', { timeout: 60_000 }, async (t) => {
  const deliveries = [];
  const ingest = createServer((request, response) => {
    const chunks = [];
    request.on('data', (chunk) => chunks.push(chunk));
    request.on('end', () => {
      deliveries.push(JSON.parse(Buffer.concat(chunks).toString('utf8')));
      response.writeHead(200, { 'content-type': 'application/json' });
      response.end('{"ok":true}');
    });
  });
  const ingestPort = await listen(ingest);
  t.after(() => new Promise((resolve) => ingest.close(resolve)));

  const appPort = await unusedPort();
  const logs = [];
  const next = spawn(
    process.execPath,
    ['node_modules/next/dist/bin/next', 'dev', '-H', '127.0.0.1', '-p', String(appPort)],
    {
      cwd: repository,
      env: {
        ...process.env,
        LEAD_AUTH_TOKEN: 'endpoint-size-test-token',
        LEAD_INGEST_URL: `http://127.0.0.1:${ingestPort}/leads`,
        SITE_MATTERMOST_FALLBACK_WEBHOOK_URL: '',
      },
      stdio: ['ignore', 'pipe', 'pipe'],
    },
  );
  const nextExited = once(next, 'exit');
  next.stdout.on('data', (chunk) => logs.push(chunk.toString()));
  next.stderr.on('data', (chunk) => logs.push(chunk.toString()));
  t.after(async () => {
    if (next.exitCode === null) {
      next.kill('SIGTERM');
      await nextExited.catch(() => undefined);
    }
  });

  const baseUrl = `http://127.0.0.1:${appPort}`;
  await waitForNext(baseUrl, next, logs);

  const oversized = new URLSearchParams({
    name: 'Oversized Request',
    email: 'oversized@example.test',
    message: 'x'.repeat(65_000),
  }).toString();
  const oversizedResponse = await fetch(`${baseUrl}/api/contact`, {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: chunkedUrlEncoded(oversized),
    duplex: 'half',
    redirect: 'manual',
  });
  assert.equal(oversizedResponse.status, 400);
  assert.equal(deliveries.length, 0, 'oversized body must be rejected before lead delivery');

  const accepted = new URLSearchParams({
    firstName: 'Valid',
    lastName: 'Lead',
    email: 'valid-urlencoded@example.test',
    message: 'Please contact me.',
  }).toString();
  const acceptedResponse = await fetch(`${baseUrl}/api/contact`, {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: chunkedUrlEncoded(accepted),
    duplex: 'half',
    redirect: 'manual',
  });
  assert.equal(acceptedResponse.status, 303);
  assert.match(acceptedResponse.headers.get('location') || '', /\/thank-you\?lead=accepted$/);
  assert.equal(deliveries.length, 1, 'valid headerless form body must retain authoritative delivery');

  const multipart = new FormData();
  multipart.set('name', 'Multipart Lead');
  multipart.set('email', 'valid-multipart@example.test');
  multipart.set('message', 'Multipart remains accepted.');
  const multipartResponse = await fetch(`${baseUrl}/api/contact`, {
    method: 'POST',
    body: multipart,
    redirect: 'manual',
  });
  assert.equal(multipartResponse.status, 303);
  assert.equal(deliveries.length, 2, 'valid multipart form body must retain authoritative delivery');
});

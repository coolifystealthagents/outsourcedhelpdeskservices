import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';

const origin = process.env.VALIDATION_ORIGIN ?? 'http://127.0.0.1:43053';
const canonicalOrigin = 'https://outsourcedhelpdeskservices.com';
const blog = JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-09-02/blog.json'));
const research = JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-09-02/research.json'));
const groups = [['/blog', blog.entries], ['/research', research.entries]];
const hashes = [];

for (const [indexPath, entries] of groups) {
  const indexResponse = await fetch(`${origin}${indexPath}`);
  assert.equal(indexResponse.status, 200, `${indexPath} must return 200`);
  const indexHtml = await indexResponse.text();
  for (const {route} of entries) {
    assert.ok(indexHtml.includes(`href="${route}"`), `${route} missing from ${indexPath}`);
    const response = await fetch(`${origin}${route}`, {redirect:'manual'});
    assert.equal(response.status, 200, `${route} must return 200 without a redirect`);
    const html = await response.text();
    const canonical = `${canonicalOrigin}${route}`;
    assert.ok(html.includes(`<link rel="canonical" href="${canonical}"`), `${route} must be self-canonical`);
    assert.ok(html.includes('September 2, 2026'), `${route} missing visible date`);
    assert.ok(html.includes('"datePublished":"2026-09-02"'), `${route} missing structured datePublished`);
    const article = html.match(/<article[\s\S]*?<\/article>/)?.[0];
    assert.ok(article, `${route} missing article element`);
    hashes.push(crypto.createHash('sha256').update(article).digest('hex'));
  }
}

assert.equal(new Set(hashes).size, 17, 'rendered article hashes must be unique');
const sitemapResponse = await fetch(`${origin}/sitemap.xml`);
assert.equal(sitemapResponse.status, 200, 'sitemap must return 200');
const sitemap = await sitemapResponse.text();
for (const {route} of [...blog.entries, ...research.entries]) assert.ok(sitemap.includes(`<loc>${canonicalOrigin}${route}</loc>`), `${route} missing from sitemap`);
console.log('September 2 live-route checks passed: 17 HTTP 200 routes, self-canonicals, visible/structured dates, index links, sitemap entries, and unique rendered hashes.');

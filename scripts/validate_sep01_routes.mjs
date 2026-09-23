import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';

const origin = process.env.VALIDATION_ORIGIN ?? 'http://127.0.0.1:43053';
const canonicalOrigin = 'https://outsourcedhelpdeskservices.com';
const blog = JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-09-01/blog.json'));
const research = JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-09-01/research.json'));
const groups = [['/blog', blog.entries], ['/research', research.entries]];
const hashes = [];

for (const [indexPath, entries] of groups) {
  const indexResponse = await fetch(`${origin}${indexPath}`);
  assert.equal(indexResponse.status, 200, `${indexPath} must return 200`);
  const indexHtml = await indexResponse.text();
  const indexedHtml = [indexHtml];
  if (indexPath === '/blog') {
    const pagePaths = [...new Set([...indexHtml.matchAll(/href="(\/blog\/page\/\d+)"/g)].map((match) => match[1]))];
    for (const pagePath of pagePaths) {
      const pageResponse = await fetch(`${origin}${pagePath}`);
      assert.equal(pageResponse.status, 200, `${pagePath} must return 200`);
      indexedHtml.push(await pageResponse.text());
    }
  }
  const completeIndexHtml = indexedHtml.join('\n');
  for (const {route} of entries) {
    assert.ok(completeIndexHtml.includes(`href="${route}"`), `${route} missing from ${indexPath} or its declared pagination pages`);
    const response = await fetch(`${origin}${route}`, {redirect:'manual'});
    assert.equal(response.status, 200, `${route} must return 200 without a redirect`);
    const html = await response.text();
    const canonical = `${canonicalOrigin}${route}`;
    assert.ok(html.includes(`<link rel="canonical" href="${canonical}"`), `${route} must be self-canonical`);
    const publishedMatch = html.match(/"datePublished":"(\d{4}-\d{2}-\d{2})"/);
    assert.ok(publishedMatch, `${route} missing structured datePublished`);
    const visibleDate = new Intl.DateTimeFormat('en-US', {month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC'}).format(new Date(`${publishedMatch[1]}T00:00:00Z`));
    assert.ok(html.includes(visibleDate), `${route} visible date does not match structured datePublished`);
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
console.log('September 1 live-route checks passed: 17 HTTP 200 routes, self-canonicals, visible/structured dates, index links, sitemap entries, and unique rendered hashes.');

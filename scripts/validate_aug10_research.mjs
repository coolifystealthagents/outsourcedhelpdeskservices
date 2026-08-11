import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const root = process.cwd();
const targetDate = '2026-08-10';
const manifest = JSON.parse(fs.readFileSync(path.join(root, '.paperclip/aug10-2026/research.json'), 'utf8'));
const fail = (message) => { throw new Error(message); };
const entries = manifest.entries;
if (manifest.contract !== 'sites3-aug10-public-date-v6' || manifest.family !== 'research') fail('manifest identity mismatch');
if (entries.length < 10 || entries.length < manifest.minimum || new Set(entries.map((entry) => entry.slug)).size !== entries.length) fail('count or uniqueness failed');

const source = fs.readFileSync(path.join(root, 'app/data.ts'), 'utf8');
const route = fs.readFileSync(path.join(root, 'app/research/[slug]/page.tsx'), 'utf8');
const sitemap = fs.readFileSync(path.join(root, 'app/sitemap.xml/route.ts'), 'utf8');
const indexHtml = fs.readFileSync(path.join(root, '.next/server/app/research.html'), 'utf8');
if (!route.includes('alternates:{canonical:') || !route.includes('datePublished:p.published')) fail('research route hooks missing');
if (!sitemap.includes('researchPosts.map(p=>`/research/${p.slug}`)')) fail('research sitemap mapping missing');
for (const entry of entries) {
  if (entry.route !== '/research/' + entry.slug || !entry.route.startsWith('/research/')) fail('family route failed: ' + entry.slug);
  if (entry.sourcePath !== 'app/data.ts' || entry.sourceDateField !== 'published' || entry.sourceDate !== targetDate || entry.renderedDate !== targetDate) fail('manifest date/source failed: ' + entry.slug);
  const record = new RegExp("slug: '" + entry.slug.replaceAll('-', '\\-') + "'[^\\n]*published: '([^']+)'", 'm').exec(source);
  if (!record || record[1] !== targetDate) fail('source record/date failed: ' + entry.slug);
  const before = execFileSync('git', ['show', entry.introducedByCommit + '^:' + entry.sourcePath], { encoding: 'utf8' });
  const after = execFileSync('git', ['show', entry.introducedByCommit + ':' + entry.sourcePath], { encoding: 'utf8' });
  if (before.includes("slug: '" + entry.slug + "'") || !after.includes("slug: '" + entry.slug + "'")) fail('provenance failed: ' + entry.slug);
  const html = fs.readFileSync(path.join(root, '.next/server/app/research', entry.slug + '.html'), 'utf8');
  if (!html.includes('datePublished') || !html.includes(targetDate) || !html.includes('/research/' + entry.slug)) fail('rendered date/canonical failed: ' + entry.slug);
  if (!indexHtml.includes(entry.slug)) fail('index route missing: ' + entry.slug);
}
const positions = entries.map((entry) => indexHtml.indexOf(entry.slug));
if (positions.some((position) => position < 0)) fail('index route missing');
if (positions.some((position, index) => index && position < positions[index - 1])) fail('index is not newest-first');
console.log('PASS aug10 research manifest: ' + entries.length + ' entries; provenance, source dates, route family, rendered dates, canonical/sitemap hooks, and newest-first order verified');

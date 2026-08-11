import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const root = process.cwd();
const manifestPath = path.join(root, '.paperclip/aug10-2026/blog.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const fail = (message) => { throw new Error(message); };
const entries = manifest.entries;
if (manifest.contract !== 'sites3-aug10-public-date-v6' || manifest.family !== 'blog') fail('manifest identity mismatch');
if (entries.length < manifest.minimum || new Set(entries.map((entry) => entry.slug)).size !== entries.length) fail('count or uniqueness failed');

const source = fs.readFileSync(path.join(root, 'app/data.ts'), 'utf8');
const route = fs.readFileSync(path.join(root, 'app/blog/[slug]/page.tsx'), 'utf8');
const buildFiles = fs.existsSync(path.join(root, '.next/server')) ? fs.readdirSync(path.join(root, '.next/server'), { recursive: true }).map(String) : [];
const indexHtml = fs.readFileSync(path.join(root, '.next/server/app/blog.html'), 'utf8');
if (indexHtml.indexOf(entries[0].slug) < 0 || indexHtml.indexOf(entries[1].slug) < 0 || indexHtml.indexOf(entries[0].slug) > indexHtml.indexOf(entries[1].slug)) fail('index is not newest-first');
for (const entry of entries) {
  if (!entry.route.startsWith('/blog/') || entry.route !== '/blog/' + entry.slug) fail('family route failed: ' + entry.slug);
  if (entry.sourcePath !== 'app/data.ts' || entry.sourceDate !== '2026-08-10' || entry.sourceDateField !== 'published') fail('source manifest failed: ' + entry.slug);
  if (!new RegExp("slug: '" + entry.slug.replaceAll('-', '\\-') + "'").test(source)) fail('source record missing: ' + entry.slug);
  const before = execFileSync('git', ['show', entry.introducedByCommit + '^:' + entry.sourcePath], { encoding: 'utf8' });
  const after = execFileSync('git', ['show', entry.introducedByCommit + ':' + entry.sourcePath], { encoding: 'utf8' });
  if (before.includes("slug: '" + entry.slug + "'") || !after.includes("slug: '" + entry.slug + "'")) fail('provenance failed: ' + entry.slug);
  if (!route.includes('datePublished') || !route.includes('dateTime={published}') || !route.includes('dateTime={post.published}')) fail('rendering hooks missing');
  const renderedEvidence = buildFiles.some((file) => file.includes(entry.slug));
  if (!renderedEvidence) fail('built route missing: ' + entry.slug);
  const htmlPath = path.join(root, '.next/server/app/blog', entry.slug + '.html');
  const html = fs.readFileSync(htmlPath, 'utf8');
  if (!html.includes('datePublished') || !html.includes('2026-08-10') || !html.includes('dateTime="2026-08-10"')) fail('rendered date failed: ' + entry.slug);
}
const order = entries.map((entry) => source.indexOf("slug: '" + entry.slug + "'"));
if (order.some((position, index) => index && position < order[index - 1])) fail('source batch order failed');
console.log('PASS aug10 blog manifest: ' + entries.length + ' entries; provenance, source dates, route family, rendered date hooks, build routes, and newest-first order verified');

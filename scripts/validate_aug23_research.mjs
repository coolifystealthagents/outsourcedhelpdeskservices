import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const baseline = 'a6f4067c74ab7cd8a85a50cf4ab74616f08aadfc';
const sourcePath = 'app/aug23ResearchBatch.ts';
const manifestPath = '.paperclip/daily-content/2026-08-23/research.json';
const source = fs.readFileSync(sourcePath, 'utf8');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const routePage = fs.readFileSync('app/research/[slug]/page.tsx', 'utf8');
const data = fs.readFileSync('app/data.ts', 'utf8');
const sitemap = fs.readFileSync('app/sitemap.xml/route.ts', 'utf8');
const failures = [];

const assert = (condition, message) => { if (!condition) failures.push(message); };
assert(manifest.length === 5, `manifest has ${manifest.length} entries, expected 5`);
assert(new Set(manifest.map(item => item.route)).size === 5, 'manifest routes are not unique');
assert(!execFileSync('git', ['ls-tree', '-r', '--name-only', baseline, '--', sourcePath], { encoding: 'utf8' }).trim(), `${sourcePath} existed at baseline`);
assert(data.includes("import { aug23ResearchBatch } from './aug23ResearchBatch';"), 'research batch is not imported');
assert(data.includes('...aug23ResearchBatch,'), 'research batch is not included in researchPosts');
assert(data.includes(".sort((a, b) => b.published.localeCompare(a.published))"), 'same-day ordering is not deterministic');
assert(sitemap.includes('...researchPosts.map(p=>`/research/${p.slug}`)'), 'research routes are absent from sitemap generation');
assert(routePage.includes('datePublished:publicationDate'), 'Article schema does not bind datePublished');
assert(routePage.includes('<time dateTime={publicationDate}>{formatPublicDate(publicationDate)}</time>'), 'visible publication date is not rendered');
assert(routePage.includes('alternates:{canonical:`https://${site.domain.toLowerCase()}/research/${p.slug}`}'), 'same-site canonical metadata is absent');

for (const entry of manifest) {
  const slug = entry.route.replace('/research/', '');
  const start = source.indexOf(`slug:'${slug}'`);
  const next = source.indexOf("\n{published:", start);
  const block = source.slice(start, next < 0 ? source.length : next);
  const body = (block.match(/body:\[(.*?)\],sources:/s)?.[1] ?? '');
  const words = body.replace(/https?:\/\/[^\s'",]+/g, '').match(/[A-Za-z0-9][A-Za-z0-9’'_-]*/g) ?? [];
  const urls = new Set(block.match(/https?:\/\/[^\s'",]+/g) ?? []);
  assert(start >= 0, `${slug}: route record is missing`);
  assert(entry.sourcePaths?.length === 1 && entry.sourcePaths[0] === sourcePath, `${slug}: sourcePaths is not exact`);
  assert(block.startsWith(`slug:'${slug}'`) || source.slice(Math.max(0, start - 60), start).includes("published:'2026-08-23',sourceDate:'2026-08-23',"), `${slug}: direct date binding is missing`);
  assert(words.length >= 900, `${slug}: ${words.length} substantive words, expected at least 900`);
  assert(body.startsWith("\n'Research question:"), `${slug}: does not lead with a research question`);
  assert(body.includes("'Methodology:"), `${slug}: methodology is missing`);
  assert(body.includes("'Limitations:"), `${slug}: limitations are missing`);
  assert(body.includes("'Evidence-led conclusion:"), `${slug}: evidence-led conclusion is missing`);
  assert(urls.size >= 3, `${slug}: has ${urls.size} external URLs, expected at least 3`);
  assert(!/Paperclip|Gemini|manifest|deployment|GitHub|rate card|pricing call to action/i.test(body), `${slug}: prohibited public-production language found`);
  console.log(`${slug}: ${words.length} words, ${urls.size} source URLs`);
}

assert(!source.includes('2026-08-24'), 'August 24 date remains in the August 23 source');
assert(!source.includes('August 24, 2026'), 'August 24 visible date remains in the August 23 source');
assert(!/[—–]| -- /.test(source), 'Humanizer punctuation check failed');

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log('August 23 research contract validation passed.');

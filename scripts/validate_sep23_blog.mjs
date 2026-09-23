import fs from 'node:fs';

const source = fs.readFileSync('app/sep23BlogArticles.ts', 'utf8');
const shared = fs.readFileSync('app/sep18BlogArticles.ts', 'utf8');
const data = fs.readFileSync('app/data.ts', 'utf8');
const index = fs.readFileSync('app/blog/page.tsx', 'utf8');
const route = fs.readFileSync('app/blog/[slug]/page.tsx', 'utf8');
const sitemap = fs.readFileSync('app/sitemap.xml/route.ts', 'utf8');
const manifest = JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-09-23/blog.json', 'utf8'));
const failures = [];
const check = (condition, message) => { if (!condition) failures.push(message); };

check(manifest.family === 'blog', 'manifest family must be blog');
check(manifest.publicationDate === '2026-09-23', 'manifest publication date mismatch');
check(manifest.entries?.length === 12, `expected 12 manifest entries, found ${manifest.entries?.length}`);
check(new Set(manifest.entries?.map((entry) => entry.slug)).size === 12, 'manifest slugs are not unique');
check(data.includes("import { sep23BlogArticles } from './sep23BlogArticles';"), 'data import is missing');
check(data.includes('...sep23BlogArticles,'), 'data registration is missing');
check(index.includes("publishedOn(p,'2026-09-23')"), 'blog index does not select the new publication date');
check(index.includes('Published September 23, 2026'), 'blog index heading is stale');
check(route.includes('datePublished: published, dateModified: published'), 'structured publication dates are not bound');
check(route.includes('Authoritative sources'), 'public source rendering is missing');
check(sitemap.includes('...blogPosts.map'), 'sitemap does not enumerate blog posts');
check(!/[—–]| -- /.test(source), 'humanizer punctuation check failed');

const oldFiles = fs.readdirSync('.paperclip/daily-content', { withFileTypes: true })
  .filter((item) => item.isDirectory() && item.name !== '2026-09-23')
  .map((item) => `.paperclip/daily-content/${item.name}/blog.json`)
  .filter((file) => fs.existsSync(file));
const oldText = oldFiles.map((file) => fs.readFileSync(file, 'utf8')).join('\n');
for (const entry of manifest.entries ?? []) {
  check(source.includes(`slug: '${entry.slug}'`), `${entry.slug}: missing source seed`);
  check(!oldText.includes(`"${entry.slug}"`), `${entry.slug}: appears in a prior ledger`);
  check(entry.liveUrl === `https://outsourcedhelpdeskservices.com/blog/${entry.slug}`, `${entry.slug}: live URL mismatch`);
  check(Array.isArray(entry.sources) && entry.sources.length >= 3, `${entry.slug}: fewer than three sources`);
  check(entry.publicationDate === '2026-09-23', `${entry.slug}: article date mismatch`);
  check(/^[a-f0-9]{64}$/.test(entry.contentHash), `${entry.slug}: content hash is invalid`);
}

const commonBody = shared.slice(shared.indexOf('export function buildBuyerGuideBody'), shared.indexOf('export const sep18BlogArticles'));
const commonWords = (commonBody.match(/[A-Za-z0-9][A-Za-z0-9'-]*/g) ?? []).length;
for (const line of source.split('\n').filter((value) => value.includes("{ slug: '"))) {
  const slug = line.match(/slug: '([^']+)'/)?.[1];
  const estimated = commonWords + (line.match(/[A-Za-z0-9][A-Za-z0-9'-]*/g) ?? []).length;
  check(estimated >= 900, `${slug}: assembled source estimate below 900 words (${estimated})`);
  console.log(`${slug}: ${estimated} assembled-source words`);
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log('September 23 blog contract validation passed.');

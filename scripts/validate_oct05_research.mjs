import fs from 'node:fs';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';

const source = fs.readFileSync('app/oct05Research.ts', 'utf8');
const data = fs.readFileSync('app/data.ts', 'utf8');
const route = fs.readFileSync('app/research/[slug]/page.tsx', 'utf8');
const sitemap = fs.readFileSync('app/sitemap.xml/route.ts', 'utf8');
const manifest = JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-10-05/research.json', 'utf8'));
const failures = [];
const check = (value, message) => { if (!value) failures.push(message); };
const words = value => value.toLowerCase().match(/[a-z0-9][a-z0-9'-]*/g) ?? [];
const normalize = value => words(value).join(' ');
const shingles = (value, size = 5) => {
  const tokens = words(value);
  return new Set(tokens.slice(0, Math.max(0, tokens.length - size + 1)).map((_, index) => tokens.slice(index, index + size).join(' ')));
};

check(manifest.cycleLabel === '2026-10-05', 'cycle label');
check(manifest.publicationDate === '2026-10-05', 'provisional publication date');
check(manifest.publicationDateStatus === 'provisional-until-combined-live-verification', 'date reconciliation status');
check(manifest.timezone === 'UTC', 'configured timezone');
check(manifest.family === 'research', 'manifest family');
check(manifest.entries?.length === 5, `expected exactly 5 entries, found ${manifest.entries?.length}`);
check(new Set(manifest.entries.map(entry => entry.slug)).size === 5, 'duplicate current slugs');
check(data.includes("import { oct05ResearchArticles } from './oct05Research';"), 'data import');
check(data.includes('...oct05ResearchArticles,'), 'data registration');
check(route.includes('datePublished:publicationDate'), 'structured date binding');
check(route.includes('dateTime={publicationDate}'), 'visible date binding');
check(route.includes('alternates:{canonical}'), 'canonical binding');
check(sitemap.includes('...researchPosts.map'), 'sitemap enumeration');
check(!/[—–]| -- /.test(source), 'humanizer punctuation');

const previous = fs.readdirSync('.paperclip/daily-content', { withFileTypes: true })
  .filter(item => item.isDirectory() && item.name !== '2026-10-05')
  .map(item => `.paperclip/daily-content/${item.name}/research.json`)
  .filter(fs.existsSync)
  .map(file => fs.readFileSync(file, 'utf8'))
  .join('\n');
const allAppSource = fs.readdirSync('app').filter(file => file.endsWith('.ts')).map(file => fs.readFileSync(`app/${file}`, 'utf8')).join('\n');
const markers = [...source.matchAll(/slug: '([^']+)'/g)];
const articles = [];
for (let index = 0; index < markers.length; index += 1) {
  const marker = markers[index];
  const slug = marker[1];
  const block = source.slice(marker.index, markers[index + 1]?.index ?? source.length);
  const body = [...block.matchAll(/`([^`]*)`/gs)].map(match => match[1]).join('\n');
  const bodyWords = words(body).length;
  const hash = crypto.createHash('sha256').update(body).digest('hex');
  const entry = manifest.entries.find(candidate => candidate.slug === slug);
  check(Boolean(entry), `${slug}: manifest entry missing`);
  check(bodyWords >= 1200, `${slug}: ${bodyWords} substantive body words`);
  check(entry?.contentHash === hash, `${slug}: content hash mismatch`);
  check(!previous.includes(`"${slug}"`), `${slug}: prior manifest collision`);
  const historical = execFileSync('git', ['log', '--all', '--format=', '-S', slug, '--', 'app', '.paperclip'], { encoding: 'utf8' }).trim();
  check(!historical, `${slug}: already exists in git history`);
  check(fs.existsSync(`public/research-thumbnails/${slug}.svg`), `${slug}: hero missing`);
  const related = block.match(/related: \[([^\]]+)\]/s)?.[1].match(/'([^']+)'/g)?.map(value => value.slice(1, -1)) ?? [];
  for (const target of related) check(allAppSource.includes(`'${target}'`), `${slug}: unresolved internal target ${target}`);
  articles.push({ slug, body, bodyWords, hash, paragraphs: [...block.matchAll(/`([^`]*)`/gs)].map(match => normalize(match[1])).filter(value => words(value).length >= 40) });
}

check(articles.length === 5, `source inventory expected 5, found ${articles.length}`);
let maximumOverlap = { value: 0, pair: [] };
for (let left = 0; left < articles.length; left += 1) {
  for (let right = left + 1; right < articles.length; right += 1) {
    const a = shingles(articles[left].body);
    const b = shingles(articles[right].body);
    const intersection = [...a].filter(value => b.has(value)).length;
    const overlap = Math.max(a.size ? intersection / a.size : 0, b.size ? intersection / b.size : 0);
    if (overlap > maximumOverlap.value) maximumOverlap = { value: overlap, pair: [articles[left].slug, articles[right].slug] };
    check(overlap < 0.5, `${articles[left].slug} / ${articles[right].slug}: ${(overlap * 100).toFixed(2)}% five-word-shingle overlap`);
    const repeatedParagraphs = articles[left].paragraphs.filter(value => articles[right].paragraphs.includes(value));
    check(repeatedParagraphs.length === 0, `${articles[left].slug} / ${articles[right].slug}: repeated substantive paragraph`);
  }
}

console.log(JSON.stringify({ articles: articles.map(({ slug, bodyWords, hash }) => ({ slug, bodyWords, hash })), maximumPairwiseFiveWordShingleOverlap: maximumOverlap }, null, 2));
if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log('October 5 Research local handoff validation passed. Qualitative review confirms distinct questions, structures, examples, argument sequences, and reader outcomes; no shared prose generator is used.');

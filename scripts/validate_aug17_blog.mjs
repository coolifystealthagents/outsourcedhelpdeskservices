import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const publicationDate = '2026-08-17';
const draftPaths = [
  'app/editorial/aug17-blog-articles-a.json',
  'app/editorial/aug17-blog-articles-b1.json',
  'app/editorial/aug17-blog-articles-b2.json',
];
const expectedSlugs = [
  'help-desk-ticket-owner-absence-plan',
  'help-desk-ticket-escalation-evidence-checklist',
  'help-desk-ticket-duplicate-detection',
  'help-desk-ticket-waiting-state-design',
  'help-desk-support-coverage-gap-review',
  'help-desk-approval-validity-window',
  'help-desk-customer-identity-mismatch-route',
  'help-desk-queue-capacity-signal',
  'help-desk-customer-reply-approval-boundary',
  'help-desk-ticket-incident-scope-check',
  'help-desk-knowledge-article-prerequisite-check',
  'help-desk-queue-routing-fallback',
  'help-desk-ticket-customer-promise-audit',
  'help-desk-ticket-resolution-verification',
  'help-desk-support-article-search-terms',
  'help-desk-queue-escalation-ownership',
  'help-desk-ticket-customer-effort-review',
  'help-desk-queue-transfer-reason',
  'help-desk-article-customer-scenario-test',
  'help-desk-ticket-sensitive-data-minimization',
  'help-desk-outsourcing-scope-change-review',
  'help-desk-queue-review-meeting-brief',
];
const requiredKeys = ['cautions', 'checklist', 'directAnswer', 'example', 'fields', 'sections', 'table'];
const prohibitedCopy = [
  ['commercial pricing', /\b(?:pricing|prices?|rate card|hourly rates?|monthly rates?|annual rates?|rates? (?:start|starting|from|are))\b/i],
  ['sales call to action', /\b(?:contact us|get started|book (?:a )?(?:call|demo)|schedule (?:a )?(?:call|demo)|request (?:a )?(?:quote|consultation)|buy now|sign up)\b/i],
  ['Paperclip internal copy', /\bpaperclip\b/i],
  ['Git internal copy', /\bgit(?:hub)?\b/i],
  ['deployment copy', /\bdeploy(?:ment|ed|ing)?\b/i],
  ['content-production copy', /\bcontent[- ]production\b/i],
  ['internal CTA label', /\bCTA\b/],
];

const read = (relativePath) => readFileSync(path.join(root, relativePath), 'utf8');
const nonemptyString = (value) => typeof value === 'string' && value.trim().length > 0;
const collectStrings = (value) => {
  if (typeof value === 'string') return [value];
  if (Array.isArray(value)) return value.flatMap(collectStrings);
  if (value && typeof value === 'object') return Object.values(value).flatMap(collectStrings);
  return [];
};
const wordCount = (value) => (collectStrings(value).join(' ').match(/[\p{L}\p{N}]+(?:[’'-][\p{L}\p{N}]+)*/gu) || []).length;

const batches = draftPaths.map((draftPath) => JSON.parse(read(draftPath)));
const entries = batches.flatMap((batch) => Object.entries(batch));
const actualSlugs = entries.map(([slug]) => slug);
assert.deepEqual(actualSlugs, expectedSlugs, 'August 17 Blog slugs or source ordering changed');
assert.equal(new Set(actualSlugs).size, 22, 'August 17 Blog routes must contain exactly 22 unique slugs');
assert.equal(new Set(entries.map(([, article]) => JSON.stringify(article))).size, 22, 'every route must have a route-specific structured record');

for (const [slug, article] of entries) {
  assert.deepEqual(Object.keys(article).sort(), requiredKeys, `${slug}: required section keys changed`);
  assert.ok(Array.isArray(article.directAnswer) && article.directAnswer.length >= 2 && article.directAnswer.every(nonemptyString), `${slug}: direct answers are incomplete`);
  assert.ok(Array.isArray(article.fields) && article.fields.length >= 4, `${slug}: field definitions are incomplete`);
  for (const field of article.fields) assert.ok(Array.isArray(field) && field.length === 2 && field.every(nonemptyString), `${slug}: invalid field definition`);
  assert.ok(article.table && nonemptyString(article.table.heading), `${slug}: table heading is missing`);
  assert.ok(Array.isArray(article.table.columns) && article.table.columns.length >= 3 && article.table.columns.every(nonemptyString), `${slug}: table columns are incomplete`);
  assert.ok(Array.isArray(article.table.rows) && article.table.rows.length >= 4, `${slug}: table rows are incomplete`);
  for (const row of article.table.rows) assert.ok(Array.isArray(row) && row.length === article.table.columns.length && row.every(nonemptyString), `${slug}: table row does not match its columns`);
  assert.ok(Array.isArray(article.sections) && article.sections.length >= 2, `${slug}: narrative sections are incomplete`);
  for (const section of article.sections) assert.ok(nonemptyString(section.heading) && Array.isArray(section.body) && section.body.length >= 2 && section.body.every(nonemptyString), `${slug}: invalid narrative section`);
  assert.ok(article.example && nonemptyString(article.example.heading) && Array.isArray(article.example.body) && article.example.body.length >= 2 && article.example.body.every(nonemptyString), `${slug}: worked example is incomplete`);
  assert.ok(Array.isArray(article.checklist) && article.checklist.length >= 6 && article.checklist.every(nonemptyString), `${slug}: checklist is incomplete`);
  assert.ok(Array.isArray(article.cautions) && article.cautions.length >= 2 && article.cautions.every(nonemptyString), `${slug}: cautions are incomplete`);
  assert.ok(wordCount(article) >= 750, `${slug}: route-specific content has only ${wordCount(article)} words`);

  const articleCopy = collectStrings(article).join('\n');
  for (const [label, pattern] of prohibitedCopy) assert.ok(!pattern.test(articleCopy), `${slug}: prohibited ${label} found`);
}

const source = read('app/data.ts');
for (const slug of expectedSlugs) {
  const sourceLines = source.split('\n').filter((line) => line.includes(`slug: '${slug}'`));
  assert.equal(sourceLines.length, 1, `${slug}: expected one Blog data record`);
  assert.ok(sourceLines[0].includes(`published: '${publicationDate}'`), `${slug}: Blog data publication date must be ${publicationDate}`);
}

const integration = read('app/aug17BlogArticles.ts');
for (const draftPath of draftPaths) {
  const importPath = `./editorial/${path.basename(draftPath)}`;
  assert.ok(integration.includes(importPath), `production data integration does not import ${draftPath}`);
}
assert.ok(integration.includes(`AUG17_BLOG_PUBLICATION_DATE = '${publicationDate}'`), 'production publication-date constant changed');

const route = read('app/blog/[slug]/page.tsx');
assert.ok(route.includes('isAug17BlogSlug(slug)') && route.includes('aug17BlogArticles[slug]'), 'August 17 records are not reachable from the Blog route');
assert.ok(route.includes('datePublished: AUG17_BLOG_PUBLICATION_DATE'), 'structured publication date is not rendered');
assert.ok(route.includes('dateTime={AUG17_BLOG_PUBLICATION_DATE}'), 'visible semantic publication date is not rendered');
const aug17Route = route.slice(route.indexOf('function Aug17Article'), route.indexOf('function WorkforceChart'));
assert.ok(aug17Route.includes('<main className="section">'), 'August 17 Blog routes must retain the original page treatment');
assert.ok(aug17Route.includes('<article className="container guide-article" data-editorial-batch="2026-08-17-blog">'), 'August 17 Blog routes must retain the original article container treatment');
assert.ok(aug17Route.includes('<p className="eyebrow">Philippines staffing blog · <time'), 'August 17 Blog routes must retain the original dated hero treatment');
assert.ok(!aug17Route.includes('article-hero') && !aug17Route.includes('article-meta'), 'August 17 Blog routes must not replace the original hero with the strict-article treatment');
for (const field of ['directAnswer', 'fields', 'table', 'sections', 'example', 'checklist', 'cautions']) {
  assert.ok(route.includes(`article.${field}`), `Blog route does not render ${field}`);
}

console.log(`August 17 Blog contract passed: ${entries.length} exact unique routes, >=750 words each, all required modules, ${publicationDate} dates, and prohibited-copy checks`);

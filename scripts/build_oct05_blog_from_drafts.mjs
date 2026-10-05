import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const publicationDate = process.env.PUBLICATION_DATE;
if (!/^\d{4}-\d{2}-\d{2}$/.test(publicationDate ?? '')) {
  throw new Error('Set PUBLICATION_DATE to the reconciled UTC first-publication date.');
}

const draftDir = '.paperclip/daily-content/2026-10-05/drafts';
const files = fs.readdirSync(draftDir).filter((file) => file.endsWith('.md')).sort();
if (files.length !== 12) throw new Error(`Expected 12 drafts, found ${files.length}`);

const scalar = (frontmatter, key) => {
  const match = frontmatter.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
  if (!match) throw new Error(`Missing ${key}`);
  return match[1].trim();
};

const parseSources = (frontmatter) => {
  const sources = [];
  const pattern = /^\s+- name:\s*(.+)\n\s+url:\s*(.+)$/gm;
  for (const match of frontmatter.matchAll(pattern)) sources.push({ name: match[1].trim(), url: match[2].trim() });
  if (!sources.length) throw new Error('Missing sources');
  return sources;
};

const articles = files.map((file) => {
  const raw = fs.readFileSync(path.join(draftDir, file), 'utf8');
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]+)$/);
  if (!match) throw new Error(`${file}: invalid draft`);
  const [, frontmatter, markdown] = match;
  const body = markdown
    .replace(/^# .+\n+/, '')
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter((paragraph) => paragraph && !paragraph.startsWith('## '))
    .map((paragraph) => paragraph.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1'));
  return {
    slug: scalar(frontmatter, 'slug'),
    title: scalar(frontmatter, 'title'),
    excerpt: scalar(frontmatter, 'excerpt'),
    minutes: Number(scalar(frontmatter, 'minutes')),
    heroImage: scalar(frontmatter, 'heroImage'),
    body,
    sources: parseSources(frontmatter),
    cta: { href: scalar(frontmatter, 'ctaHref'), label: scalar(frontmatter, 'ctaLabel') },
  };
});

const output = `// Generated mechanically from the reviewed October 5 Markdown drafts.\n` +
  `const published = ${JSON.stringify(publicationDate)} as const;\n\n` +
  `export const oct05BlogArticles = ${JSON.stringify(articles, null, 2).replace(/"published": "__DATE__"/g, 'published')}\n` +
  `.map((article) => ({ ...article, published }));\n`;

fs.writeFileSync('app/oct05BlogArticles.ts', output);
const manifest = {
  schemaVersion: 1, cycleLabel: '2026-10-05', family: 'blog', domain: 'outsourcedhelpdeskservices.com',
  repository: 'coolifystealthagents/outsourcedhelpdeskservices', productionBranch: 'main',
  baselineSha: '7b359e63d2ce49c3dfb1ad335f81cd5eaa44ea62', taskIdentifier: 'OUTAAA-84',
  branch: 'routine/outaaa-84-20261005', siteTimezone: 'UTC', publicationDate,
  publicationDateStatus: 'provisional-until-combined-live-verification', required: 12, staged: 12, verifiedLive: 0,
  entries: articles.map((article) => ({
    topic: article.title, slug: article.slug, route: `/blog/${article.slug}`, publicationDate,
    bodyWords: article.body.join(' ').match(/[A-Za-z0-9]+(?:['-][A-Za-z0-9]+)*/g)?.length ?? 0,
    contentHash: crypto.createHash('sha256').update(article.body.join('\n')).digest('hex'),
    sources: article.sources.map((source) => source.url), hero: article.heroImage,
  })),
};
fs.writeFileSync('.paperclip/daily-content/2026-10-05/blog.json', `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Generated app/oct05BlogArticles.ts with ${articles.length} articles for ${publicationDate}.`);

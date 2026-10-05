import fs from 'node:fs';
import path from 'node:path';

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
console.log(`Generated app/oct05BlogArticles.ts with ${articles.length} articles for ${publicationDate}.`);

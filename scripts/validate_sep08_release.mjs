import fs from 'node:fs';

const origin = process.env.AUDIT_ORIGIN ?? 'http://127.0.0.1:3000';
const source = fs.readFileSync(new URL('../app/sep08Content.ts', import.meta.url), 'utf8');
const slugs = [...source.matchAll(/slug: '([^']+)'/g)].map((match) => match[1]);
const blogs = slugs.slice(0, 12);
const research = slugs.slice(12);
const failures = [];

if (blogs.length !== 12 || research.length !== 5 || new Set(slugs).size !== 17) {
  failures.push(`inventory: expected 12 Blog and 5 Research unique slugs; got ${blogs.length} and ${research.length}`);
}

for (const [family, entries] of [['blog', blogs], ['research', research]]) {
  for (const slug of entries) {
    const path = `/${family}/${slug}`;
    const response = await fetch(`${origin}${path}`);
    const html = await response.text();
    const gates = {
      http200: response.status === 200,
      visibleDate: html.includes('September 8, 2026'),
      structuredDate: html.includes('2026-09-08'),
      selfCanonical: html.includes(`https://outsourcedhelpdeskservices.com${path}`),
      correctFamily: html.includes(family === 'blog' ? 'BlogPosting' : '"Article"'),
      hero: html.includes('/helpdesk-team.jpg'),
      openGraph: html.includes('property="og:image"') && html.includes('/helpdesk-team.jpg'),
    };
    for (const [gate, passed] of Object.entries(gates)) if (!passed) failures.push(`${path}: ${gate}`);
  }
}

const [blogIndex, researchIndex, sitemap, image] = await Promise.all([
  fetch(`${origin}/blog`).then((response) => response.text()),
  fetch(`${origin}/research`).then((response) => response.text()),
  fetch(`${origin}/sitemap.xml`).then((response) => response.text()),
  fetch(`${origin}/helpdesk-team.jpg`),
]);

for (const slug of blogs) {
  if (!blogIndex.includes(`/blog/${slug}`)) failures.push(`/blog/${slug}: family-index membership`);
  if (!sitemap.includes(`/blog/${slug}`)) failures.push(`/blog/${slug}: sitemap membership`);
}
for (const slug of research) {
  if (!researchIndex.includes(`/research/${slug}`)) failures.push(`/research/${slug}: family-index membership`);
  if (!sitemap.includes(`/research/${slug}`)) failures.push(`/research/${slug}: sitemap membership`);
}
if (image.status !== 200) failures.push(`/helpdesk-team.jpg: HTTP ${image.status}`);

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log(`PASS ${origin}: Blog 12/12, Research 5/5, all route/date/canonical/family/index/sitemap/hero/OG gates`);

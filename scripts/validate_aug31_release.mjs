import assert from 'node:assert/strict';
import fs from 'node:fs';
const blog=JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-08-31/blog.json'));
const research=JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-08-31/research.json'));
const source=fs.readFileSync('app/aug31Content.ts','utf8');
const data=fs.readFileSync('app/data.ts','utf8');
const blogRoute=fs.readFileSync('app/blog/[slug]/page.tsx','utf8');
const researchRoute=fs.readFileSync('app/research/[slug]/page.tsx','utf8');
assert.equal(blog.entries.length,12,'Blog count must be exactly 12');
assert.equal(research.entries.length,5,'Research count must be exactly 5');
assert.equal(new Set([...blog.entries,...research.entries].map(x=>x.route)).size,17,'routes must be unique');
for(const {route} of [...blog.entries,...research.entries]) {
  const slug=route.split('/').pop();
  assert.ok(source.includes(slug)||source.includes(slug.replace(/^help-desk-/,'').replace(/^outsourced-helpdesk-/,'')),`missing source ${route}`);
}
assert.ok(source.includes("const published='2026-08-31'"));
assert.ok(source.includes('August 31, 2026'));
assert.ok(data.includes('...aug31BlogArticles')&&data.includes('...aug31ResearchArticles'));
assert.ok(blogRoute.includes('datePublished: published')&&blogRoute.includes('dateTime={published}'));
assert.ok(researchRoute.includes('datePublished:publicationDate')&&researchRoute.includes('dateTime={publicationDate}'));
console.log('August 31 release contract passed: 12 Blog + 5 Research, unique routes, visible and structured dates wired.');

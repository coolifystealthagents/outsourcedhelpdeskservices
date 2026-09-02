import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';

const blog = JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-09-02/blog.json'));
const research = JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-09-02/research.json'));
const source = fs.readFileSync('app/sep02Content.ts', 'utf8');
const data = fs.readFileSync('app/data.ts', 'utf8');
const entries = [...blog.entries, ...research.entries];

assert.equal(blog.entries.length, 12, 'Blog count must be exactly 12');
assert.equal(research.entries.length, 5, 'Research count must be exactly 5');
assert.equal(new Set(entries.map(entry => entry.route)).size, 17, 'all routes must be unique');
assert.equal(new Set(entries.map(entry => entry.route.split('/').pop())).size, 17, 'all slugs must be unique');
for (const {route} of entries) assert.ok(source.includes(`slug:'${route.split('/').pop()}'`), `missing exact source slug ${route}`);
assert.ok(source.includes("const published = '2026-09-02'"));
assert.ok((source.match(/September 2, 2026/g) ?? []).length >= 2, 'visible date copy missing');
assert.ok(data.includes('...sep02BlogArticles') && data.includes('...sep02ResearchArticles'));

const seedObjects = [...source.matchAll(/\{slug:'([^']+)',title:'([^']+)',excerpt:'([^']+)'[^}]+\}/g)];
assert.equal(seedObjects.length, 17, 'expected 17 distinct content seed objects');
assert.equal(new Set(seedObjects.map(match => match[2])).size, 17, 'titles must be unique');
const hashes = seedObjects.map(match => crypto.createHash('sha256').update(match[0]).digest('hex'));
assert.equal(new Set(hashes).size, 17, 'content seed hashes must be unique');
console.log('September 2 release contract passed: exactly 12 Blog + 5 Research with unique source records, routes, titles, and structured/visible dates.');

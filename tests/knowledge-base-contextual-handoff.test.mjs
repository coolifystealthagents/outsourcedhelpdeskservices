import fs from 'node:fs';
import assert from 'node:assert/strict';

const data = fs.readFileSync('app/data.ts', 'utf8');
const renderer = fs.readFileSync('app/blog/[slug]/page.tsx', 'utf8');
const record = data.match(/\{ slug: 'help-desk-knowledge-base-maintenance',[\s\S]*? \},\n  \{ slug: 'help-desk-quality-review-checklist'/)?.[0] ?? '';

assert.ok(record, 'knowledge-base article record must remain in the blog inventory');
assert.match(record, /updated: '2026-10-15'/, 'the substantive route edit must retain its modified date');
assert.match(record, /contextualLink: \{ after: 1, href: '\/services\/knowledge-base-maintenance'/, 'the route record must own the knowledge-base service handoff');
assert.match(record, /When a ticket shows that an answer is old, keep the evidence and send the update to its owner\./, 'the handoff must preserve the evidence-and-owner boundary');
assert.match(record, /The work needs a clear review path before anyone changes the published guidance\./, 'the handoff must reject unreviewed guidance changes');
assert.match(record, /See the knowledge base maintenance service for controlled article upkeep\./, 'the handoff must state its useful next step');
assert.match(renderer, /dateModified: updated \?\? published/, 'the generic renderer must propagate a record modified date to BlogPosting schema');
assert.match(renderer, /index \+ 1 === post\.contextualLink\.after/, 'the generic renderer must place the selected handoff after its data-owned body paragraph');

console.log('Knowledge-base contextual handoff contract passed.');
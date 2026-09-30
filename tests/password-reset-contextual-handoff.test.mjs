import fs from 'node:fs';
import assert from 'node:assert/strict';

const data = fs.readFileSync('app/data.ts', 'utf8');
const renderer = fs.readFileSync('app/blog/[slug]/page.tsx', 'utf8');
const record = data.match(/\{ slug: 'help-desk-password-reset-boundaries',[\s\S]*? \},\n  \{ slug: 'help-desk-saas-user-support-playbook'/)?.[0] ?? '';

assert.ok(record, 'password-reset article record must remain in the blog inventory');
assert.match(record, /updated: '2026-09-30'/, 'the substantive route edit must retain its modified date');
assert.match(record, /contextualLink: \{ after: 1, href: '\/services\/password-reset-coordination'/, 'the route record must own the password-reset service handoff');
assert.match(record, /When the approved identity evidence does not match, pause the reset\./, 'the handoff must retain the identity stopping point');
assert.match(record, /See the password reset coordination service for the documented recovery handoff\./, 'the handoff must state its useful next step');
assert.match(renderer, /dateModified: updated \?\? published/, 'the generic renderer must propagate a record modified date to BlogPosting schema');
assert.match(renderer, /index \+ 1 === post\.contextualLink\.after/, 'the generic renderer must place the selected handoff after its data-owned body paragraph');
assert.match(renderer, /<a href=\{post\.contextualLink\.href\}>\{post\.contextualLink\.label\}<\/a>/, 'the generic renderer must render the route-owned contextual link as a native anchor');

console.log('Password-reset contextual handoff contract passed.');

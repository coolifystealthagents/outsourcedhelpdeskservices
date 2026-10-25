import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const data = read('app/data.ts');
const renderer = read('app/research/[slug]/page.tsx');
const start = data.indexOf("slug: 'helpdesk-chat-support-research'");
const end = data.indexOf("slug: 'helpdesk-customer-context-research'", start);
const record = data.slice(start, end);

test('chat-support research record owns its Philippines service handoff and updated date', () => {
  assert.ok(start >= 0 && end > start, 'expected the selected chat-support research record');
  assert.match(record, /updated: '2026-10-25'/);
  assert.match(record, /heading: 'Plan the live chat lane'/);
  assert.match(record, /href: '\/services\/chat-helpdesk-support'/);
  assert.match(record, /label: 'Review chat helpdesk support scope'/);
  assert.match(record, /Philippines-based chat team/);
  assert.match(record, /your team keeps verification, security, money, and policy decisions/);
});

test('research renderer uses the record-owned updated date before inherited source dates', () => {
  assert.match(renderer, /p\.updated\?\?p\.sourceDate\?\?p\.published/);
  assert.match(renderer, /p\.serviceHandoff&&<section>/);
});

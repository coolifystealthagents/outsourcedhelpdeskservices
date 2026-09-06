# Help desk topical-authority link ledger

## Purpose

This is an internal execution ledger for Outsourced Helpdesk Services. It maps existing Philippines-only help desk pages to the most useful existing service page, so future edits add a body link only when it solves the reader's next question.

The site covers tier 1 ticket work, escalation rules, knowledge base upkeep, and quality review. It does not use this ledger to claim rankings, provider performance, or backlink results.

## Current pillars

| Pillar | Existing money page | Reader decision |
| --- | --- | --- |
| Ticket intake and ownership | `/services/level-one-ticket-triage` | What can a Philippine tier 1 specialist safely sort, document, and route? |
| Customer reply channels | `/services/email-helpdesk-support` and `/services/chat-helpdesk-support` | Which repeat support work fits the channel without extending scope? |
| Account and recovery boundaries | `/services/account-access-support` and `/services/password-reset-coordination` | Where should the help desk stop and send an account decision to the owner? |
| Knowledge guidance | `/services/knowledge-base-maintenance` | How can ticket evidence improve an approved answer? |
| Escalations and evidence | `/services/ticket-escalation-coordination` and `/services/bug-report-documentation` | What facts should move with a technical or owner handoff? |
| Quality and queue review | `/services/helpdesk-quality-review` and `/services/support-queue-reporting` | How can an owner check outcomes without treating a count as proof? |

## Supporting-page link opportunities

Each proposed destination already exists. Add the link in the relevant body paragraph, not as a generic footer or a repeated sitewide list.

| Supporting page | Exact reader transition | Proposed existing destination | Priority | Status |
| --- | --- | --- | --- | --- |
| `/blog/help-desk-ticket-triage-workflow` | After the article explains categories, priority, and owners, a reader may need to define the first live tier 1 lane. | `/services/level-one-ticket-triage` | First | Delivered in route-local main; one exact href verified on 2026-09-06. Do not duplicate. |
| `/blog/help-desk-password-reset-boundaries` | A reader who reaches the identity stopping point may need the service scope for recovery coordination. | `/services/password-reset-coordination` | Second | Verified absent in route-local main on 2026-09-06. |
| `/blog/help-desk-knowledge-base-maintenance` | A reader who finds an outdated answer may need the service page for controlled article upkeep. | `/services/knowledge-base-maintenance` | Third | Verified absent in route-local main on 2026-09-06. |
| `/blog/help-desk-escalation-rules` | A reader who has the facts but no clear receiving route may need the escalation-coordination scope. | `/services/ticket-escalation-coordination` | Fourth | Delivered in route-local main; one exact href verified on 2026-09-06. Do not duplicate. |
| `/blog/help-desk-quality-review-checklist` | A reader choosing a review sample may need the service boundary for quality work. | `/services/helpdesk-quality-review` | Fifth | Delivered in route-local main; one exact href verified on 2026-09-06. Do not duplicate. |
| `/blog/help-desk-service-level-targets` | A reader setting response targets may need a queue-reporting scope that separates reporting from promises. | `/services/support-queue-reporting` | Sixth | Verified absent in route-local main on 2026-09-06. |

## Existing implementation notes

The generic blog route already renders the same three service links for every non-strict post. Those links are useful navigation, but they do not replace a contextual body link that names the decision in the paragraph where it arises.

The article template uses the organization as both `BlogPosting.author` and `publisher`. There is no verified individual author record in the inspected source, so this ledger does not propose a personal byline or author schema change.

The sitemap route derives service, blog, and research URLs from `app/data.ts`. A future public edit must preserve that data-driven coverage, build the route, and verify the source-specific marker on the canonical host and `www` after deployment.

## Next bounded release

Audit `/blog/help-desk-password-reset-boundaries` in its generated form. If the article still lacks a body-level link to `/services/password-reset-coordination`, add one short sentence at the identity stopping point; do not change unrelated pages or shared template links.

# Service-led research link ledger

Updated: 2026-09-03

This ledger keeps research-to-service links specific to the existing Philippines-only helpdesk services. A row is eligible only when the source page answers the question that leads to the service, the destination already exists, and the service href is absent from the source route-local `<main>` in a production build.

## Current pillar inventory

- Level One Ticket Triage
- Email Helpdesk Support
- Chat Helpdesk Support
- Account Access Support
- Password Reset Coordination
- SaaS User Support
- Ecommerce Customer Helpdesk
- Knowledge Base Maintenance
- Ticket Escalation Coordination
- Bug Report Documentation
- Helpdesk Quality Review
- Support Queue Reporting

## Verified next candidates

| Priority | Existing research URL | Reader question | Existing service URL | Artifact result | Controlled next step |
| --- | --- | --- | --- | --- | --- |
| 1 | `/research/helpdesk-password-reset-research` | How can a team prepare a safe password-reset request without exposing credentials or deciding who may recover an account? | `/services/password-reset-coordination` | The source and destination have generated H1s, canonical URLs, and sitemap entries. The service href is absent from the source route-local main. | Add one data-owned handoff that lets a Philippines-based coordinator prepare approved recovery evidence while the account owner keeps identity, access, and approval decisions. |
| 2 | `/research/helpdesk-chat-support-research` | What does a team need to set up an accountable chat-support lane without promising that chat agents can settle exceptions? | `/services/chat-helpdesk-support` | The source and destination have generated H1s, canonical URLs, and sitemap entries. The service href is absent from the source route-local main. | Add one data-owned handoff that frames the service as documented chat intake, routing, and follow-up; retain policy, refund, access, and customer-commitment decisions with the owner. |
| 3 | `/research/helpdesk-bug-intake-research` | What evidence should a helpdesk collect before engineering needs to review a reported defect? | `/services/bug-report-documentation` | The source and destination have generated H1s, canonical URLs, and sitemap entries. The service href is absent from the source route-local main. | Add one data-owned handoff that offers structured defect evidence preparation and keeps diagnosis, prioritization, release, and customer commitments with authorized owners. |

## Delivered pair

| Research URL | Service URL | Delivery status |
| --- | --- | --- |
| `/research/helpdesk-ticket-next-action-research` | `/services/ticket-escalation-coordination` | Delivered and publicly verified on 2026-09-01. Do not add a second route-local CTA. |

## Verification notes

- Built sitemap records include every route named in this ledger. This repository intentionally emits no sitemap `lastmod` values.
- This file changes planning evidence only. It does not alter rendered pages, schema, or sitemap output, so deployment and public-route verification do not apply to this ledger commit.

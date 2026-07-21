# Humanizer audit

Date: 2026-07-21

## Scope reviewed

- `app/page.tsx`: homepage headings, support lanes, launch steps, guide cards, and calls to action
- `app/data.ts`: site description, service data, guide titles and excerpts, guide bodies, FAQ copy, sources, and contact-page support data
- `app/components.tsx`: header, shared call to action, footer description, disclosure, and service links
- `app/services/[slug]/page.tsx`: service metadata, hero copy, task lists, controls, first-week steps, and schema descriptions
- `app/blog/page.tsx`: guide index heading, introduction, cards, and metadata
- `app/blog/[slug]/page.tsx`: guide template, structured modules, source display, FAQ, and schema values
- `app/contact/page.tsx`: metadata, intake copy, prompts, form labels, and options
- `app/thank-you/page.tsx`: confirmation copy, metadata, and next step
- `app/globals.css`: shared CTA spacing, container alignment, and button contrast
- `app/layout.tsx`: sitewide metadata and Open Graph description

## What changed

- Replaced four repeated service descriptions with help-desk-specific scopes, tasks, controls, and first-week steps.
- Repaired a broken guide title and rewrote vague guide excerpts around real buyer questions.
- Replaced the shared fallback article with a separate body for each live guide route.
- Removed dormant, unsupported claims about savings, pilot length, and task counts.
- Removed broad offshore-staffing copy that did not fit ticket support.
- Rewrote the contact, footer, shared CTA, guide index, and thank-you copy around ticket types, coverage, access, review, and escalation.
- Put the shared detail-page CTA back inside the site grid and changed its button text to a darker, readable color after visual QA.
- Kept existing routes and citations. Updated visible descriptions and matching schema text together.

## Final anti-AI pass

The first pass still had signs of a factory template: repeated descriptions, generic staffing language, a forced three-point proof block, and one fallback body shared by three guides. The final copy uses direct sentences and specific help desk decisions. Lists remain where they are useful as checklists, not as decorative slogans.

## Exclusions

Privacy, terms, cancellation, and cancellation-policy pages were not edited. No legal meaning was changed. No testimonials, client stories, performance figures, prices, credentials, or new factual claims were added. Existing external sources were retained.

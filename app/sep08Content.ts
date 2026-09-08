const published = '2026-09-08' as const;
const heroImage = '/helpdesk-team.jpg' as const;

type BlogSeed = {
  slug: string;
  title: string;
  excerpt: string;
  opening: string;
  routine: string;
  example: string;
  boundary: string;
  review: string;
};

const blogSeeds: BlogSeed[] = [
  {
    slug: 'help-desk-morning-queue-opening-routine',
    title: 'Open the help desk queue with a ten-minute risk check',
    excerpt: 'Start the support day by finding overdue promises, ownerless tickets, and work that needs a protected decision.',
    opening: 'The first ten minutes of a shift should answer a practical question: which ticket will become harder to recover if nobody touches it now? A raw oldest-first view cannot answer that on its own.',
    routine: 'Check customer updates due before the next handoff, reopened work, tickets without an accepted owner, and requests carrying security, access, payment, or outage signals. Put one permitted next action and one checkpoint on each item you move.',
    example: 'A password-reset request may be newer than a routine setup question but still needs earlier review when its verification window expires soon. The support specialist can confirm the approved recovery route without changing identity rules.',
    boundary: 'The opening sweep does not authorize staff to raise priority, approve an exception, or infer impact from an anxious message. Route those decisions with the evidence attached.',
    review: 'Once a week, compare the opening list with actual missed updates and escalations. Remove filters that add noise and add a signal only when it changes the next action.',
  },
  {
    slug: 'help-desk-ticket-title-repair-routine',
    title: 'Repair vague ticket titles before they slow the next owner',
    excerpt: 'Rewrite unclear subjects with the affected service, observed symptom, and useful scope while preserving the customer wording.',
    opening: 'Titles such as "Help" or "Urgent problem" force every reader to reopen the ticket. A short repair makes queue scanning easier, but the title must not turn an unverified report into a diagnosis.',
    routine: 'Keep the customer message intact. Add the affected service, the observable symptom, and the known scope. If scope is unknown, say so. Use the team vocabulary that routing and search already recognize.',
    example: 'Change "Email broken" to "Webmail sign-in rejected for one reported user." That title carries more routing value without claiming that the account, browser, or service caused the failure.',
    boundary: 'Do not put personal data, credentials, confidential project names, or a guessed root cause in the title. Sensitive detail belongs in the approved record with the correct access controls.',
    review: 'Sample repaired titles beside their final disposition. If agents repeatedly choose the wrong service term, fix the taxonomy or intake prompt instead of asking for more improvisation.',
  },
  {
    slug: 'help-desk-reopened-ticket-first-look',
    title: 'Give reopened help desk tickets a fresh first look',
    excerpt: 'Treat a reopen as new evidence, then decide whether the original owner, another queue, or a protected specialist should act.',
    opening: 'A reopened ticket is not simply yesterday\'s closed ticket back in the queue. The customer may be reporting a failed fix, a recurrence, or a different problem that happens to look familiar.',
    routine: 'Read the closure basis and the new message together. Mark what changed, whether the earlier completion evidence still holds, who owns the next safe action, and when the customer will hear back.',
    example: 'If access worked after a reset and fails again the next morning, record the second failure as a new event. Do not silently replace the earlier evidence or tell the customer the reset never worked.',
    boundary: 'A reopen does not prove the original handling was wrong. It also does not permit frontline staff to repeat a recovery step when the approved retry limit has been reached.',
    review: 'Group reopens by reason rather than agent. Repeated failures after one workflow step point to an article, product, or verification problem that needs an owner.',
  },
  {
    slug: 'help-desk-screenshot-redaction-check',
    title: 'Check a support screenshot before attaching it to a ticket',
    excerpt: 'Keep the useful error evidence while removing unrelated messages, account details, tokens, and personal information.',
    opening: 'Screenshots feel convenient because they capture context quickly. They also collect whatever happens to be visible around the error, including details the next support action does not need.',
    routine: 'Ask what the image must prove. Crop to that area, cover unrelated identifiers with the approved redaction method, check browser bars and background windows, then open the saved copy before attaching it.',
    example: 'For a failed form submission, the error text and visible field label may be enough. A full desktop image with email previews and customer records creates risk without improving the escalation.',
    boundary: 'Never ask a customer to expose a password, recovery code, payment number, secret key, or private conversation. Use the secure evidence path when ordinary ticket access is too broad.',
    review: 'Review a small attachment sample for over-collection and unreadable redaction. Change the request template when the same unnecessary detail appears again.',
  },
  {
    slug: 'help-desk-customer-time-zone-check',
    title: 'Confirm the customer time zone before promising an update',
    excerpt: 'Translate support checkpoints into a time the customer can use and keep the underlying service clock explicit.',
    opening: '"Tomorrow morning" is easy to write and surprisingly easy to misunderstand. A distributed help desk needs a named date, time, and zone whenever the timing matters.',
    routine: 'Use the zone stored in the approved customer record or ask the customer to confirm it. Record the internal deadline separately, then write the external checkpoint with the calendar date and zone.',
    example: 'An internal review due at 16:00 UTC can become a customer update promised by 9:00 a.m. Pacific on September 9. The ticket should retain both times so the next shift can act.',
    boundary: 'Do not promise a resolution time when only an update time is approved. A time-zone conversion cannot create certainty about a vendor, engineer, or decision owner.',
    review: 'Check missed promises for conversion errors, daylight-saving assumptions, and vague phrases. Repair the template if the promised event is unclear even when the time is correct.',
  },
  {
    slug: 'help-desk-duplicate-customer-update-check',
    title: 'Stop duplicate customer updates during a busy handoff',
    excerpt: 'Use one visible communication owner and a send check so two shifts do not issue conflicting replies.',
    opening: 'Two agents can both do the reasonable thing and still create a confusing result. This happens when each sees a due update but neither can see that the other is drafting it.',
    routine: 'Name the communication owner, mark the draft state in the ticket, check for a newer public reply immediately before sending, and record the next checkpoint after the message goes out.',
    example: 'The outgoing shift can prepare the facts while the incoming owner sends the update after acceptance. The ticket shows who has the final send action, not merely who typed first.',
    boundary: 'A coordination marker must not hide an urgent safety notice. Follow the incident route when the approved process requires immediate communication from a specific owner.',
    review: 'Track duplicate and contradictory replies as workflow findings. Fix visibility and ownership before treating them as individual writing errors.',
  },
  {
    slug: 'help-desk-pending-customer-state-review',
    title: 'Review pending-customer tickets without blaming the customer',
    excerpt: 'Check whether the requested information is necessary, the return path is clear, and support still owns the promised follow-up.',
    opening: 'A pending-customer label can conceal a weak request. Before leaving a case there, confirm that the customer knows exactly what is needed and has a safe way to provide it.',
    routine: 'Restate the blocked decision, list only the missing facts, link the approved submission route, set a reasonable checkpoint, and record what support will do when the information arrives.',
    example: 'Instead of asking for "more details," request the browser version, the exact error wording, and the time of the attempt. Explain that these facts determine the next troubleshooting step.',
    boundary: 'Do not use pending status to pause an internal action that the team can already complete. Never request secrets or unrelated personal data to make the ticket feel complete.',
    review: 'Sample aged pending tickets for vague asks and missing reminders. If many customers stall on the same question, rewrite the intake or offer a safer collection method.',
  },
  {
    slug: 'help-desk-link-check-before-send',
    title: 'Test help desk links in the same view the customer receives',
    excerpt: 'Verify destination, access requirements, anchor text, and current instructions before sending a saved link.',
    opening: 'A link can return HTTP 200 and still be useless to the customer. It may open the wrong region, require staff access, land above the relevant instruction, or describe an older product screen.',
    routine: 'Open the link outside the staff session when permitted. Check the destination title, audience, prerequisites, current steps, and whether the surrounding reply accurately describes what the customer will see.',
    example: 'A public recovery guide is appropriate only if it reaches the correct product and does not send the customer into an admin-only branch. Record a replacement when the saved reply points elsewhere.',
    boundary: 'Do not bypass access controls to test a restricted page, and do not shorten a link in a way that hides its destination. Escalate ownership when the authoritative source is unavailable.',
    review: 'Prioritize high-use and high-risk links. Retire or repair the source macro so agents do not have to remember the same correction on every ticket.',
  },
  {
    slug: 'help-desk-escalation-rejection-recovery',
    title: 'Recover cleanly when a help desk escalation is rejected',
    excerpt: 'Turn a rejected handoff into a specific correction, a named owner, and an honest customer checkpoint.',
    opening: 'A rejected escalation should not bounce back as an unexplained status change. The frontline owner needs to know whether evidence is missing, the destination is wrong, or the requested decision sits outside that team.',
    routine: 'Record the rejection reason, preserve the original packet, identify the smallest correction, assign it, and update the customer from confirmed facts. Keep the earlier timestamps visible.',
    example: 'If engineering needs reproducible steps, support can request those steps without rebuilding the whole case. If the destination was wrong, the routing owner should correct the map as well as the ticket.',
    boundary: 'Frontline support must not invent evidence or reinterpret a specialist refusal as a technical finding. Disputed ownership goes to the named operational owner.',
    review: 'Count rejection reasons by route and required field. A cluster usually calls for a form or routing repair, not another reminder to "write better escalations."',
  },
  {
    slug: 'help-desk-after-hours-acknowledgement-check',
    title: 'Write an after-hours acknowledgement that sets a real expectation',
    excerpt: 'Tell customers what was received, what coverage exists now, and when a qualified owner will review the request.',
    opening: 'An automatic after-hours reply should reduce uncertainty. It should not sound like a technician has investigated the problem when the message has only entered a queue.',
    routine: 'Confirm receipt, state the current coverage boundary, explain the urgent route if one exists, and give the next review window in a named time zone. Keep the wording consistent with actual staffing.',
    example: 'A routine request received overnight can be scheduled for the next staffed window. A suspected account compromise should receive the approved urgent instructions and routing details.',
    boundary: 'Do not claim continuous monitoring, guaranteed response, or incident status unless the service and record support those statements. Avoid asking for sensitive evidence by reply email.',
    review: 'Test the message against holidays, coverage changes, and common urgent requests. Update it whenever the rota or escalation contact changes.',
  },
  {
    slug: 'help-desk-knowledge-note-promotion-review',
    title: 'Decide when a private ticket note deserves a help desk article',
    excerpt: 'Check reuse, authority, sensitivity, and maintenance ownership before turning one successful answer into shared guidance.',
    opening: 'A ticket note can solve one case without being ready for reuse. Before promoting it, ask whether the conditions are repeatable and whether an authoritative owner agrees with the action.',
    routine: 'Remove case-specific details, define the audience and prerequisites, verify each instruction, name the stop condition, choose the right publishing surface, and assign a review owner.',
    example: 'A workaround approved for one tenant should stay case-bound until the product owner confirms its wider scope. A stable public setup step may qualify once its source and maintenance path are clear.',
    boundary: 'Do not publish internal controls, customer data, unpublished defects, or exception decisions as general guidance. One successful outcome does not establish universal safety.',
    review: 'After publication, watch failed searches, repeat contacts, escalations, and source changes. Withdraw the article when its controlling assumption no longer holds.',
  },
  {
    slug: 'help-desk-end-of-day-article-maintenance-log',
    title: 'Keep an end-of-day log for help desk article repairs',
    excerpt: 'Capture what changed, why it changed, who approved it, and which saved replies or workflows also need attention.',
    opening: 'Daily publishing creates maintenance work whether or not the team records it. A small log prevents a wording fix from becoming detached from the ticket evidence and downstream tools that prompted it.',
    routine: 'For each edit, note the article, triggering evidence, changed claim or step, source checked, reviewer, affected links or macros, release time, and next review trigger.',
    example: 'When a vendor changes its sign-in screen, the log connects the corrected article to two saved replies that quote the old label. Their owners can update them in the same change window.',
    boundary: 'The log is not a place for customer records, credentials, or unapproved internal findings. Link to controlled evidence instead of copying it into a broad content tracker.',
    review: 'At week end, close completed dependencies and assign any orphaned repair. Repeated emergency edits are a signal to revisit source monitoring or publication scope.',
  },
];

export const sep08BlogArticles = blogSeeds.map((article) => ({
  slug: article.slug,
  title: article.title,
  excerpt: article.excerpt,
  published,
  minutes: 8,
  heroImage,
  body: [article.opening, `Daily routine: ${article.routine}`, `Example: ${article.example}`, `Boundary: ${article.boundary}`, `Review: ${article.review}`, 'Published September 8, 2026 for OutsourcedHelpdeskServices.com. Keep the ticket as the source of truth and give every unfinished action a named owner.'],
}));

const sources = [
  { name: 'NIST Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework', note: 'Governance, responsibility, risk controls, and measurement.' },
  { name: 'NIST SP 800-53 Rev. 5', url: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final', note: 'Access control, audit, accountability, and information handling.' },
  { name: 'ICO data minimisation guidance', url: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles-a-guide-to-the-data-protection-principles/data-minimisation/', note: 'Personal information should be adequate, relevant, and limited to what is necessary.' },
  { name: 'GOV.UK Service Manual: measuring user needs', url: 'https://www.gov.uk/service-manual/measuring-success/measuring-user-needs', note: 'Measures should connect to whether users can complete their goals.' },
  { name: 'CISA Secure by Design', url: 'https://www.cisa.gov/securebydesign', note: 'Security ownership and safe defaults in product and service design.' },
];

const researchSeeds = [
  { slug: 'helpdesk-reopen-reason-coding-study', title: 'Why help desk tickets reopen: a coding protocol', excerpt: 'A bounded method for separating recurrence, failed fixes, incomplete closure, and genuinely new issues.', question: 'Which observable events explain why a closed ticket returned to active work?', method: 'Freeze a sample and observation window before review. Two reviewers code the original goal, closure basis, elapsed time, new customer evidence, current scope, next owner, and one reopen-reason category. Resolve disagreements without changing the original record.', finding: 'A reopen count combines several events with different operational meanings. The protocol tests whether reason coding produces a more useful repair signal than the count alone.', implication: 'Report category counts with denominators and send repeated workflow failures to the owner of that workflow.', limitation: 'Ticket text may omit offline events, category judgment can vary, and this observational review cannot prove that an earlier support action caused the reopen.', stats: [{ value: '7', label: 'coded fields' }, { value: '4', label: 'reason classes' }] },
  { slug: 'helpdesk-screenshot-minimisation-study', title: 'Support screenshots: an evidence-minimisation review', excerpt: 'Study whether attachments preserve the fact needed for action while excluding unrelated customer information.', question: 'How often does a screenshot contain information that is unnecessary for the documented support decision?', method: 'Define necessary evidence for each sampled request type, then have authorized reviewers code the visible error, required context, unrelated identifiers, background content, redaction quality, access route, and disposition. Record counts without copying protected content.', finding: 'The review tests whether screenshot usefulness and data minimisation can be assessed as separate fields rather than treated as one subjective quality score.', implication: 'Repair image-request templates and secure collection routes where unnecessary exposure repeats.', limitation: 'The sample excludes material reviewers are not permitted to access. Visible content does not establish later use or harm, and local policy determines what information is necessary.', stats: [{ value: '7', label: 'review fields' }, { value: '2', label: 'separate outcomes' }] },
  { slug: 'helpdesk-escalation-rejection-pattern-study', title: 'Rejected help desk escalations: a routing-pattern study', excerpt: 'A repeatable review of missing evidence, wrong destinations, unclear decisions, and authority gaps.', question: 'What recorded reason prevented an escalation owner from accepting the requested next action?', method: 'Take a fixed sample of rejected handoffs. Code destination, requested decision, required evidence, rejection reason, correction owner, time to acceptance, customer checkpoint, and whether the route map changed.', finding: 'The protocol distinguishes a correctable packet gap from a routing or authority problem. Assignment timestamps alone do not show accepted ownership.', implication: 'Change the form, route, or ownership rule associated with repeated rejection reasons, then compare a later fixed window.', limitation: 'Teams may record rejection inconsistently, accepted handoffs can still fail later, and before-and-after differences would not prove causality without a comparison design.', stats: [{ value: '8', label: 'handoff fields' }, { value: '1', label: 'acceptance event' }] },
  { slug: 'helpdesk-time-zone-promise-accuracy-study', title: 'Help desk update promises: a time-zone accuracy study', excerpt: 'Test whether customer checkpoints name the event, calendar date, time zone, owner, and actual completion evidence.', question: 'Which promise fields are missing when customers and support teams work in different time zones?', method: 'Freeze a sample of time-bound updates. Code the promised event, calendar date, local time, named zone, internal deadline, owner, completion event, and variance. Treat resolution promises separately from update promises.', finding: 'The study tests whether explicit time-zone fields reduce ambiguity in the record. It does not assume that clearer wording makes the underlying work faster.', implication: 'Repair templates and handoff views when the same field is absent across shifts.', limitation: 'A ticket timestamp may reflect system processing rather than customer receipt. Seasonal clock changes and undocumented agreements can alter interpretation, and association does not establish cause.', stats: [{ value: '8', label: 'promise fields' }, { value: '2', label: 'promise types' }] },
  { slug: 'helpdesk-article-maintenance-log-study', title: 'Daily help desk publishing: a maintenance-log study', excerpt: 'Examine whether new and revised articles retain source, ownership, dependency, and withdrawal information after release.', question: 'Which maintenance records remain complete thirty days after a help desk article is published or materially changed?', method: 'Define a fixed article cohort at release. Record source authority, approved scope, change reason, reviewer, linked macros and forms, review trigger, withdrawal owner, and status at the follow-up date. Report missing fields by article type.', finding: 'The protocol tests whether a daily publishing routine leaves enough information for later correction. Publication volume is not used as a quality proxy.', implication: 'Require the maintenance fields that repeatedly disappear and reduce publication scope when no owner can sustain them.', limitation: 'A complete log does not prove that guidance is accurate or used safely. Thirty days may miss slow changes, undocumented reuse is hard to observe, and results from one site do not generalize automatically.', stats: [{ value: '8', label: 'maintenance fields' }, { value: '30 days', label: 'follow-up window' }] },
];

export const sep08ResearchArticles = researchSeeds.map((study) => ({
  slug: study.slug,
  title: study.title,
  excerpt: study.excerpt,
  published,
  sourceDate: published,
  hero: heroImage,
  keyStats: study.stats,
  sources,
  related: [],
  body: [
    `Research question: ${study.question}`,
    `Methodology and scope: ${study.method} This is a proposed operational review for OutsourcedHelpdeskServices.com, not a report of observed customer results.`,
    'Evidence basis: NIST CSF 2.0 and NIST SP 800-53 support explicit governance, accountability, access controls, and reviewable records. ICO guidance supports limiting personal information to what is necessary. GOV.UK guidance supports measuring whether users achieve their goals. CISA Secure by Design supports clear security ownership and safe defaults. These sources provide principles; they do not supply local performance data or authorize a local support decision.',
    `Finding to test: ${study.finding}`,
    `Operational use: ${study.implication} Keep direct observations, reviewer judgments, and inferred causes in separate fields.`,
    `Inference limits and limitations: ${study.limitation} The method cannot establish a universal benchmark, customer satisfaction, legal compliance, or effects outside the declared sample and observation window.`,
    'Published September 8, 2026. Report the sample size, exclusions, denominators, disagreements, and missing data alongside any result. Do not convert an association into a causal claim.',
  ],
}));

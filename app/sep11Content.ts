const published = '2026-09-11' as const;
const heroImage = '/helpdesk-team.jpg' as const;

const blogSeeds = [
  {
    slug: 'help-desk-article-source-expiry-check-september-11',
    title: 'Check source expiry before publishing a help desk article',
    excerpt: 'Record when a policy, product page, or approved procedure may stop supporting the answer.',
    body: [
      'A source can be accurate today and still be a poor foundation for an article that has no review date. Before publishing, identify the policy, product page, procedure, or owner decision that supports each operational claim.',
      'Record the source owner, the date checked, and the event that should trigger another review. Product releases, contract changes, permission changes, and retired forms are stronger triggers than a vague annual reminder.',
      'If the source has an expiry date, put it in the working record. Do not turn a temporary exception into standing guidance or hide an uncertain source behind confident wording.',
      'At the start of the daily article routine, check drafts with the nearest source deadline first. Pause publication when the supporting decision has expired and send the precise question back to its owner.'
    ]
  },
  {
    slug: 'help-desk-article-screenshot-freshness-september-11',
    title: 'Keep screenshots from making help desk articles stale',
    excerpt: 'Use screenshots only when they clarify a step, then track the interface detail they depend on.',
    body: [
      'A screenshot often ages faster than the instruction beside it. Use one when the position or appearance of a control genuinely helps the reader, not as decoration for a step that is already clear.',
      'Capture only the necessary area with approved test data. Remove names, account details, browser tabs, notifications, and any information that does not belong in the article.',
      'In the article record, note the product version or capture date and the control shown. Write the instruction so a small visual change does not make the whole answer unusable.',
      'Review screenshots after interface releases and when tickets mention a missing label. Replace the image only after checking that the documented action and permission boundary are still correct.'
    ]
  },
  {
    slug: 'help-desk-article-single-owner-review-september-11',
    title: 'Give every daily help desk article one review owner',
    excerpt: 'Make one person accountable for the publish decision while allowing specialists to contribute evidence.',
    body: [
      'Several specialists may contribute examples, but one named owner should decide whether an article is ready. Shared interest is not the same as accountable review.',
      'The owner checks the intended reader, request scope, factual sources, permitted actions, stopping point, and next review trigger. Contributors can challenge the draft without quietly changing its authority.',
      'When security, identity, financial, contractual, or production decisions appear, the article owner must obtain the relevant approval. Ownership of the prose does not grant authority over the process.',
      'Keep the owner visible beside the article record. If that person leaves the role, retire or reassign the article instead of letting an unowned answer remain active.'
    ]
  },
  {
    slug: 'help-desk-article-ticket-example-redaction-september-11',
    title: 'Redact ticket examples before using them in help desk guidance',
    excerpt: 'Preserve the useful pattern without carrying customer identity or unrelated case details into an article.',
    body: [
      'A real ticket can make an article clearer, but the published example rarely needs the whole record. Start by naming the learning point, then retain only the details required to explain it.',
      'Remove customer names, contact details, account identifiers, secrets, free-text personal information, and unrelated business context. Replace them with plain role or system labels only when the example still makes sense.',
      'Redaction does not make every ticket suitable for reuse. Follow the organization’s approval and retention rules, and keep sensitive incident or identity evidence inside its protected system.',
      'Ask a second reviewer to read the example without the original ticket. They should be able to follow the lesson without reconstructing who the customer was.'
    ]
  },
  {
    slug: 'help-desk-article-no-result-search-log-september-11',
    title: 'Turn no-result help desk searches into article decisions',
    excerpt: 'Separate missing guidance from poor search terms, unsupported requests, and routing problems.',
    body: [
      'A search with no result is evidence of a gap in the search experience, not automatic proof that the team needs a new article. Read the query alongside the request and the action the customer needed.',
      'Check whether an approved answer already exists under different language. If it does, improve the title, synonyms, or link path and test the original query again.',
      'Some searches describe unsupported work or decisions that belong to an account, security, policy, or technical owner. Give those requests a safe route instead of publishing instructions that expand help desk authority.',
      'In the daily queue, group repeated searches by intent. Create an article only when a stable, approved answer is missing and a named owner can maintain it.'
    ]
  },
  {
    slug: 'help-desk-article-duplicate-intent-check-september-11',
    title: 'Check article intent before writing a second help desk answer',
    excerpt: 'Compare the reader, goal, prerequisites, and safe next action before adding another page.',
    body: [
      'Two drafts with different titles may answer the same customer need. Compare who the reader is, what they are trying to do, which conditions apply, and what safe action follows.',
      'If the intent matches, improve the existing article and preserve its route when possible. A second answer can split maintenance and leave agents choosing between nearly identical instructions.',
      'Keep separate articles when the audience, permission boundary, product state, or outcome is genuinely different. Explain that distinction in the opening lines so search results do not look interchangeable.',
      'Record merge and split decisions in the editorial log. This gives tomorrow’s writer a reason to update an existing page instead of rebuilding the same identity.'
    ]
  },
  {
    slug: 'help-desk-article-stop-condition-writing-september-11',
    title: 'Write a clear stop condition into help desk instructions',
    excerpt: 'Tell the specialist when a routine step ends and a named owner must take over.',
    body: [
      'Instructions are incomplete when they explain only the happy path. Place the stop condition next to the step where identity, access, security, money, policy, or production risk can change the route.',
      'Describe an observable signal: a verification mismatch, an unavailable approved option, an unexpected permission request, or a result outside the documented scope. Avoid labels such as "use judgment" when the decision belongs elsewhere.',
      'Name the receiving role and the evidence it needs. The specialist should preserve the customer goal, relevant result, actions taken, and next communication checkpoint without attempting the protected decision.',
      'Test the draft with one normal example and one boundary example. If reviewers choose different stopping points, revise the rule before publication.'
    ]
  },
  {
    slug: 'help-desk-article-link-destination-review-september-11',
    title: 'Review where every help desk article link actually lands',
    excerpt: 'Check the destination, audience, access requirement, and promised action instead of testing status alone.',
    body: [
      'An HTTP success does not prove that a link is useful. Open each destination from the reader’s permitted view and confirm that it reaches the page, form, or instruction named in the sentence.',
      'Check sign-in requirements, regional variants, anchors, downloads, and contact routes. A link that sends a customer to an internal login or a generic homepage has failed its job even if it returns a page.',
      'Use descriptive link text that still makes sense outside the surrounding paragraph. Do not publish guessed replacement URLs when an approved source has moved.',
      'Add the important destinations to the article review record. When one changes, inspect the macros and related pages that reuse it before closing the repair.'
    ]
  },
  {
    slug: 'help-desk-article-reader-test-september-11',
    title: 'Run a five-minute reader test on a help desk draft',
    excerpt: 'Watch whether a person can identify the scope, action, boundary, and next route without coaching.',
    body: [
      'A short reader test catches problems that an author learns to overlook. Give the draft to someone who understands the support role but did not write the page.',
      'Ask them to explain which request the article covers, what they would do first, where they would stop, and what they would tell the customer next. Do not guide them toward the intended answer.',
      'Record the first point of hesitation and any step they interpreted differently. One reader does not prove universal usability, but a material misunderstanding is enough to send the draft back.',
      'Fix the smallest controlling problem, then repeat the same questions. Publish when the route is clear and the factual owner has approved the content.'
    ]
  },
  {
    slug: 'help-desk-article-change-note-september-11',
    title: 'Write a useful change note for a help desk article',
    excerpt: 'Record the operational difference, its source, affected users, and the date the new guidance applies.',
    body: [
      'A note such as "updated" tells the next reviewer almost nothing. State which instruction, scope rule, link, or owner changed and why that difference matters to support work.',
      'Include the approving source, effective date, and affected channels or request types. Keep the prior version available according to the organization’s record policy.',
      'Do not describe a formatting cleanup as a process change. Likewise, do not hide a changed permission or customer promise inside a general editorial note.',
      'Use change notes during shift briefings only when the update alters live handling. Routine copy edits can remain in the article history without adding noise to the queue.'
    ]
  },
  {
    slug: 'help-desk-article-retirement-check-september-11',
    title: 'Retire a help desk article without breaking the support path',
    excerpt: 'Trace links, saved replies, queue rules, and owner references before removing guidance from active use.',
    body: [
      'An obsolete article may still be linked from macros, forms, onboarding notes, and old tickets. Inventory those dependencies before taking the page out of active use.',
      'Choose the correct outcome for each reader: a verified replacement, a clear service boundary, or an owner route. A redirect should lead to the same usable intent, not merely to the knowledge base homepage.',
      'Mark the retirement date and reason in the editorial record. Preserve required history, but keep expired steps out of search and frontline reuse.',
      'After the change, test the important inbound links and watch failed searches for the retired title. Repair any path that still leaves the reader at a dead end.'
    ]
  },
  {
    slug: 'help-desk-daily-editorial-queue-limit-september-11',
    title: 'Set a limit for the daily help desk article queue',
    excerpt: 'Protect source checking and review time by limiting how many drafts can be active at once.',
    body: [
      'A daily publishing target can turn into unfinished review work when every ticket pattern becomes a draft. Set an active queue limit that reflects the people available to verify sources and approve boundaries.',
      'Rank candidates by repeated customer need, risk of a wrong answer, failed search evidence, and stability of the approved process. A popular query with no safe answer should be routed, not rushed into publication.',
      'Count research, revision, link checks, and retirement work against the same editorial capacity. New pages are not the only useful output of the routine.',
      'When the limit is reached, finish or reject a current item before starting another. Review carried-over drafts for missing owners and uncertain sources rather than letting them age invisibly.'
    ]
  }
] as const;

export const sep11BlogArticles = blogSeeds.map((article) => ({ ...article, published, minutes: 8, heroImage }));

const sources = [
  { name: 'NIST Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework', note: 'Primary NIST framework for governing and measuring cybersecurity risk.' },
  { name: 'NIST SP 800-53 Rev. 5', url: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final', note: 'Primary NIST control catalog covering access, audit records, configuration, and information handling.' },
  { name: 'ICO guidance on data minimisation', url: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles/a-guide-to-the-data-protection-principles/data-minimisation/', note: 'Regulator guidance on limiting personal data to what is adequate, relevant, and necessary.' },
  { name: 'GOV.UK Service Manual: measuring the success of your service', url: 'https://www.gov.uk/service-manual/measuring-success/measuring-the-success-of-your-service', note: 'Government service guidance connecting performance measures with usability research and user outcomes.' },
  { name: 'CISA Secure by Design', url: 'https://www.cisa.gov/securebydesign', note: 'Primary CISA guidance on secure defaults and accountable product security.' }
] as const;

const researchSeeds = [
  {
    slug: 'helpdesk-article-source-expiry-protocol-september-11',
    title: 'Help desk article source expiry: a review protocol',
    excerpt: 'A bounded method for testing whether active guidance still rests on current approved sources.',
    question: 'Which active help desk articles rely on a source that is expired, superseded, unreachable, or missing a named owner?',
    method: 'Freeze the active article inventory and a review date. Two authorized reviewers record each operational claim, supporting source, source owner, last checked date, expiry or change trigger, current accessibility, and review outcome. Resolve disagreements before reporting counts.',
    finding: 'The protocol tests whether source age and missing ownership concentrate in articles that later need correction. It does not assume that an old source is wrong.',
    use: 'Prioritize review where a material claim has no current source or owner, and pause reuse when the governing decision has expired.',
    limitation: 'Informal approvals may be absent from the record, an accessible page may still be obsolete, and the proposed review supplies no evidence that source age caused a ticket outcome.',
    stats: [{ value: '8', label: 'source fields' }, { value: '2', label: 'reviewers' }]
  },
  {
    slug: 'helpdesk-no-result-search-intent-protocol-september-11',
    title: 'No-result help desk searches: an intent classification protocol',
    excerpt: 'Separate missing articles from vocabulary gaps, unsupported work, and broken support routes.',
    question: 'What share of sampled no-result searches represents missing approved guidance rather than a search-language or service-routing problem?',
    method: 'Define a fixed observation window and eligible search surfaces. De-identify queries under approved rules, then have two reviewers code user intent, existing-answer match, vocabulary mismatch, unsupported request, protected decision, route failure, and final disposition. Publish the denominator and exclusions.',
    finding: 'The design tests whether article creation is the right response to a failed query instead of treating every no-result event as the same content gap.',
    use: 'Improve titles or synonyms for existing answers, create pages only for stable approved needs, and repair routes for work that should not become public instruction.',
    limitation: 'Short queries can be ambiguous, search logs omit off-platform behavior, de-identification may remove context, and classification cannot establish what the user ultimately needed.',
    stats: [{ value: '7', label: 'intent classes' }, { value: '1', label: 'declared denominator' }]
  },
  {
    slug: 'helpdesk-article-reader-comprehension-protocol-september-11',
    title: 'Help desk article reader comprehension: a task protocol',
    excerpt: 'Test whether readers can identify scope, action, stop condition, and next route without coaching.',
    question: 'Can eligible readers use a sampled article to choose the documented first action and stopping point?',
    method: 'Preselect articles, reader roles, and realistic scenarios. Give each participant the published page without coaching. Record their stated scope, first action, stop condition, escalation destination, completion time, and confidence. Score against owner-approved answers and retain disagreements.',
    finding: 'The protocol distinguishes a page that is readable from one that supports the intended operational decision.',
    use: 'Revise the first material misunderstanding, then repeat the same scenario before broadening distribution.',
    limitation: 'A small test may not represent all readers, a scenario cannot recreate live pressure, reviewer scoring contains judgment, and correct recall does not prove safe performance in production.',
    stats: [{ value: '6', label: 'observed fields' }, { value: '4', label: 'decision checks' }]
  },
  {
    slug: 'helpdesk-article-dependency-retirement-protocol-september-11',
    title: 'Retiring help desk articles: a dependency verification protocol',
    excerpt: 'Map active links and support surfaces before removing obsolete guidance.',
    question: 'Which customer and agent paths still depend on an article selected for retirement?',
    method: 'Declare the retirement candidate and inventory window. Inspect permitted sitemaps, search results, saved replies, forms, onboarding material, related articles, and queue rules. Record each inbound dependency, audience, usage evidence, replacement decision, test result, owner, and closure date.',
    finding: 'The protocol tests whether retirement work closes the whole support path rather than only removing one page.',
    use: 'Provide a verified same-intent replacement or a clear owner route for each material dependency before deactivating guidance.',
    limitation: 'Undocumented bookmarks and copied text may escape inventory, usage evidence may be incomplete, and a successful destination check does not prove that readers understand the replacement.',
    stats: [{ value: '8', label: 'dependency fields' }, { value: '2', label: 'post-change checks' }]
  },
  {
    slug: 'helpdesk-daily-editorial-capacity-protocol-september-11',
    title: 'Daily help desk editorial capacity: a work-in-progress protocol',
    excerpt: 'Measure whether active draft volume leaves enough time for source review, approval, and maintenance.',
    question: 'How does the number of simultaneous article drafts relate to review delay, returned work, and unowned carryover?',
    method: 'Set an observation period and a consistent definition of active editorial work. For every item, record entry time, work type, risk class, source status, owner, reviewer, approval wait, return reason, completion, rejection, and carryover. Compare bands of concurrent work without changing the limit during measurement.',
    finding: 'The protocol tests an association between work in progress and editorial completion quality. It does not prescribe one universal daily limit.',
    use: 'Set a local queue limit from observed review capacity, then include maintenance and retirement work when testing the revised routine.',
    limitation: 'Work items differ in difficulty, staffing and interruptions can confound the relationship, local results may not transfer, and an association cannot show that draft volume caused delay or defects.',
    stats: [{ value: '11', label: 'workflow fields' }, { value: '1', label: 'fixed observation period' }]
  }
] as const;

export const sep11ResearchArticles = researchSeeds.map((study) => ({
  slug: study.slug,
  title: study.title,
  excerpt: study.excerpt,
  published,
  sourceDate: published,
  hero: heroImage,
  keyStats: study.stats.map((stat) => ({ ...stat })),
  sources: [...sources],
  related: [],
  body: [
    `Research question: ${study.question}`,
    `Methodology, scope, population, and observation window: ${study.method} This is a proposed operational study for OutsourcedHelpdeskServices.com. It reports no observed customer, ticket, or employee result.`,
    'Evidence basis and references: NIST CSF 2.0 and NIST SP 800-53 support accountable, reviewable controls. ICO guidance supports necessary and proportionate personal-data handling. GOV.UK guidance connects measures to user needs. CISA supports secure defaults and named security ownership. These primary sources shape the protocol but provide no local measurements.',
    `Finding to test: ${study.finding}`,
    `Operational use: ${study.use} Record observations separately from reviewer judgments and later inferences.`,
    `Inference and causal boundaries, with limitations: ${study.limitation} Any result would apply only to the declared sample, period, definitions, systems, and available records. It could not establish causality, a universal benchmark, customer satisfaction, legal compliance, or performance outside the sample.`,
    'Publication note: Published September 11, 2026. A result report must disclose sample size, exclusions, missing data, denominators, reviewer agreement, protocol changes, and the access date for every reference.'
  ]
}));

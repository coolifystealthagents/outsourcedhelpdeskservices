const published = '2026-09-18' as const;
const heroImage = '/helpdesk-team.jpg' as const;

const sources = [
  { name: 'NIST Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework' },
  { name: 'NIST SP 1305: Cybersecurity Supply Chain Risk Management', url: 'https://csrc.nist.gov/pubs/sp/1305/final' },
  { name: 'NIST Digital Identity Guidelines', url: 'https://pages.nist.gov/800-63-4/' },
  { name: 'CISA Secure by Design', url: 'https://www.cisa.gov/securebydesign' },
  { name: 'ICO data minimisation guidance', url: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles/a-guide-to-the-data-protection-principles/data-minimisation/' }
] as const;

type Seed = {
  slug: string;
  title: string;
  excerpt: string;
  reader: string;
  decision: string;
  inputs: string;
  boundary: string;
  example: string;
  measure: string;
  owner: string;
  serviceHref: string;
  serviceLabel: string;
};

const seeds: readonly Seed[] = [
  {
    slug: 'outsourced-help-desk-readiness-assessment',
    title: 'Outsourced Help Desk Readiness Assessment: What to Fix Before You Hire',
    excerpt: 'Test whether your queue, ownership rules, access controls, and knowledge sources are ready for a responsible outsourced help desk launch.',
    reader: 'an operations leader deciding whether outsourcing is the next sensible move',
    decision: 'whether the current help desk is documented well enough to hand off a defined first lane',
    inputs: 'ticket categories, arrival patterns, current owners, approved answers, access roles, escalation paths, and recent quality findings',
    boundary: 'Outsourcing should not be used to hide an ownerless queue, an undefined security decision, or a process that changes from person to person.',
    example: 'A SaaS company groups 200 recent requests and finds that password-reset coordination and basic how-to questions follow stable rules, while billing exceptions and production incidents still depend on senior judgment. It launches the stable lanes first and keeps the exceptions with internal owners.',
    measure: 'eligible ticket share, handoff returns, source-answer coverage, access exceptions, and missed customer checkpoints',
    owner: 'the internal service owner',
    serviceHref: '/services/level-one-ticket-triage',
    serviceLabel: 'level one ticket triage'
  },
  {
    slug: 'outsourced-help-desk-vs-in-house-team-comparison',
    title: 'Outsourced Help Desk vs. In-House Team: A Decision Framework',
    excerpt: 'Compare control, coverage, management effort, specialist access, and total operating cost without reducing the choice to hourly rates.',
    reader: 'a founder or support leader comparing an internal hire with a managed staffing option',
    decision: 'which operating model can own the defined workload with acceptable control and management effort',
    inputs: 'fully loaded labor cost, recruiting time, supervision, coverage windows, tooling, training, attrition exposure, security work, and expected queue variability',
    boundary: 'A spreadsheet cannot decide culture fit, legal duties, or risk tolerance, and a lower quoted rate does not prove a lower total cost.',
    example: 'A growing software company needs weekday email coverage and has clear product articles, but it lacks a repeatable escalation map. Its comparison assigns the same internal owner and quality-review time to both options, exposing management work that a simple salary-versus-fee comparison would miss.',
    measure: 'cost per supported hour, management hours, coverage attainment, first-route accuracy, quality findings, and time to stable ownership',
    owner: 'the budget owner together with the help desk service owner',
    serviceHref: '/services/email-helpdesk-support',
    serviceLabel: 'email helpdesk support'
  },
  {
    slug: 'outsourced-help-desk-rfp-checklist',
    title: 'Outsourced Help Desk RFP Checklist for a Verifiable Provider Selection',
    excerpt: 'Turn a vague request for support into comparable evidence about scope, staffing, security, escalation, quality, and transition.',
    reader: 'a buyer preparing an RFP or structured provider evaluation',
    decision: 'which provider can demonstrate a workable operating model for the buyer’s actual ticket lanes',
    inputs: 'request volumes, channels, hours, languages, systems, ticket samples, permission boundaries, reporting needs, transition dates, and contract constraints',
    boundary: 'An RFP should not invite providers to invent performance history, promise unsupported outcomes, or accept access before responsibilities are agreed.',
    example: 'A retailer gives each bidder the same anonymized ticket pack and asks for a routing decision, customer reply, escalation record, and quality review. The exercise reveals that two polished proposals interpret refund authority differently, allowing the retailer to resolve the boundary before selection.',
    measure: 'requirement coverage, evidence supplied, scenario accuracy, unresolved exceptions, implementation dependencies, and referenceable contract commitments',
    owner: 'the procurement lead with accountable operations and security reviewers',
    serviceHref: '/services/helpdesk-quality-review',
    serviceLabel: 'helpdesk quality review'
  },
  {
    slug: 'outsourced-help-desk-pricing-model-comparison',
    title: 'How to Compare Outsourced Help Desk Pricing Models',
    excerpt: 'Evaluate per-agent, per-ticket, hourly, and capacity-based proposals against workload variability, inclusions, and service risk.',
    reader: 'a buyer normalizing help desk proposals that use different commercial units',
    decision: 'which pricing structure makes cost and service responsibility understandable for the expected workload',
    inputs: 'forecast volume, contact mix, handling complexity, productive hours, occupancy assumptions, minimums, overtime, implementation work, management, tools, and change charges',
    boundary: 'This framework is not a market price list, and no model is automatically cheaper without the buyer’s volumes, inclusions, and risk allocation.',
    example: 'A subscription business receives one per-agent quote and one per-ticket quote. It converts both into three demand scenarios, adds onboarding and client-management time, and discovers that the apparent winner changes when seasonal tickets rise and the per-ticket plan applies a different definition of a billable contact.',
    measure: 'normalized monthly cost, unit-definition variance, unused capacity, overage exposure, excluded work, and cost attached to quality corrections',
    owner: 'the commercial owner with the operations lead who understands demand',
    serviceHref: '/services/support-queue-reporting',
    serviceLabel: 'support queue reporting'
  },
  {
    slug: 'outsourced-help-desk-security-due-diligence-questions',
    title: 'Security Due Diligence Questions for an Outsourced Help Desk',
    excerpt: 'Ask for concrete evidence about identity, least privilege, devices, logging, incidents, subcontractors, and offboarding before granting access.',
    reader: 'a security or operations reviewer assessing a prospective help desk provider',
    decision: 'whether the provider’s controls and shared responsibilities fit the systems and data in scope',
    inputs: 'system inventory, data classes, identity architecture, permission roles, device controls, logging, incident paths, continuity needs, subcontractors, and termination procedures',
    boundary: 'A questionnaire is not proof by itself, a certification is not a substitute for scope-specific review, and frontline support should never receive unrestricted access by default.',
    example: 'A company plans to outsource account-access coordination. The provider can document named accounts and managed devices, but the proposed role can also export customer records. The buyer creates a narrower role and tests it with approved scenarios before any live queue is assigned.',
    measure: 'approved-role coverage, privileged exceptions, review completion, log availability, access-removal time, and incident notification tests',
    owner: 'the customer’s security owner working with the service owner',
    serviceHref: '/services/account-access-support',
    serviceLabel: 'account access support'
  },
  {
    slug: 'outsourced-help-desk-transition-plan',
    title: 'A Practical Outsourced Help Desk Transition Plan',
    excerpt: 'Move from discovery to shadowing, controlled production, and steady-state support with evidence-based gates.',
    reader: 'an implementation owner planning the first weeks of an outsourced help desk',
    decision: 'when each ticket lane is ready to move from observation to controlled handling and then normal operation',
    inputs: 'scope, owners, ticket samples, approved articles, access roles, schedules, escalation contacts, communication templates, quality criteria, and rollback rules',
    boundary: 'A calendar date alone should not trigger production access or a larger queue; each gate needs observable readiness evidence.',
    example: 'A business starts with email how-to requests. During shadowing, specialists classify tickets and draft replies without sending them. After reviewers agree on routing and wording, a small live cohort opens with same-day review, while account changes remain outside scope until identity controls pass testing.',
    measure: 'training agreement, scenario pass rate, reviewed live tickets, escalation acceptance, correction rate, customer checkpoint adherence, and rollback events',
    owner: 'one accountable transition manager on each side',
    serviceHref: '/services/email-helpdesk-support',
    serviceLabel: 'email helpdesk support'
  },
  {
    slug: 'follow-the-sun-help-desk-coverage-plan',
    title: 'How to Design Follow-the-Sun Help Desk Coverage Without Losing Ownership',
    excerpt: 'Build coverage around demand, decision availability, handoff evidence, and customer promises instead of a vague 24/7 label.',
    reader: 'a support leader evaluating extended-hours or follow-the-sun coverage',
    decision: 'which hours and ticket lanes can be covered safely when the usual internal owners are offline',
    inputs: 'arrival times by request type, customer regions, severity rules, shift overlap, decision-owner availability, maintenance windows, channels, and historical escalations',
    boundary: 'Continuous inbox monitoring is not continuous resolution, and no schedule should imply that unavailable approvers or engineers are on call.',
    example: 'A US-based SaaS team adds a Philippines shift for overnight intake and common how-to requests. The overlap hour is reserved for incident context, aging tickets, and changed articles. High-risk access requests receive acknowledgement and evidence collection, then wait for the named US owner.',
    measure: 'coverage by eligible lane, handoff acceptance, after-hours acknowledgement, missed updates, reopened work, and exceptions waiting for an unavailable owner',
    owner: 'the global queue owner with a named lead for every shift',
    serviceHref: '/services/chat-helpdesk-support',
    serviceLabel: 'chat helpdesk support'
  },
  {
    slug: 'tier-one-tier-two-help-desk-scope-split',
    title: 'Tier 1 vs. Tier 2 Help Desk: Define the Split Before Outsourcing',
    excerpt: 'Separate repeatable resolution from deeper technical judgment using observable triggers, evidence requirements, and ownership.',
    reader: 'a technical support leader deciding what an outsourced Tier 1 team should handle',
    decision: 'where routine troubleshooting ends and specialist investigation or protected approval begins',
    inputs: 'request taxonomy, known fixes, diagnostic permissions, incident rules, engineering ownership, identity checks, change authority, and examples of ambiguous cases',
    boundary: 'Tier labels are not universal, and a provider should not infer production-change, security, billing, or identity authority from the phrase Tier 1.',
    example: 'For a login complaint, Tier 1 may confirm service status, gather the error, verify the approved identity path, and coordinate a documented reset. A suspected compromise, repeated lockout after reset, or privileged account moves to the security or identity owner with the evidence already attached.',
    measure: 'first-lane resolution, incorrect escalation, late escalation, evidence completeness, transfer count, and repeat contact after handoff',
    owner: 'the technical service owner who controls the escalation boundary',
    serviceHref: '/services/ticket-escalation-coordination',
    serviceLabel: 'ticket escalation coordination'
  },
  {
    slug: 'outsourced-help-desk-sla-scorecard',
    title: 'Build an Outsourced Help Desk SLA and Quality Scorecard That Drives Decisions',
    excerpt: 'Combine response measures with routing, answer accuracy, ownership, customer updates, and corrective action.',
    reader: 'a service owner designing governance for an outsourced help desk relationship',
    decision: 'which small set of measures will show whether customers receive accurate, owned, and timely support',
    inputs: 'service hours, eligible requests, priority definitions, pause rules, response checkpoints, quality rubric, sampling method, exclusions, and decision owners',
    boundary: 'Averages can hide severe misses, speed can reward shallow replies, and a contractual target does not prove that the customer’s need was resolved.',
    example: 'A provider meets its first-response target by acknowledging every request quickly, yet reviewers find that account-access tickets lack identity-path evidence. The scorecard keeps response time but adds route accuracy and required-evidence checks, with a corrective owner and follow-up sample.',
    measure: 'response attainment, checkpoint attainment, route accuracy, answer accuracy, required-note completion, reopen rate, and corrective-action closure',
    owner: 'the customer service owner and provider delivery lead together',
    serviceHref: '/services/helpdesk-quality-review',
    serviceLabel: 'helpdesk quality review'
  },
  {
    slug: 'help-desk-knowledge-transfer-plan-for-outsourcing',
    title: 'A Help Desk Knowledge Transfer Plan for Outsourcing',
    excerpt: 'Convert tacit answers into owned, testable guidance without copying stale habits or sensitive ticket data.',
    reader: 'a knowledge or support manager preparing an outsourced team to answer recurring questions',
    decision: 'which guidance is reliable enough for use and which questions still need an accountable internal source',
    inputs: 'top request intents, existing articles, solved tickets, macros, product changes, policy owners, access boundaries, known exceptions, and failed searches',
    boundary: 'Ticket history is evidence to inspect, not automatic permission to reuse personal data or repeat an undocumented workaround.',
    example: 'A product specialist demonstrates a common setup fix. The knowledge owner turns it into a draft with prerequisites, approved steps, a stop condition, and a source link. A new specialist then solves a test scenario using only the article, revealing one missing permission check before publication.',
    measure: 'priority-intent coverage, source ownership, scenario success, search success, article-assisted resolution, corrections, and review-date compliance',
    owner: 'the knowledge owner with factual approval from the relevant product or policy owner',
    serviceHref: '/services/knowledge-base-maintenance',
    serviceLabel: 'knowledge base maintenance'
  },
  {
    slug: 'ecommerce-outsourced-help-desk-seasonal-readiness',
    title: 'Seasonal Readiness for an Outsourced Ecommerce Help Desk',
    excerpt: 'Prepare order questions, delivery exceptions, returns, fraud signals, staffing, and escalation ownership before demand rises.',
    reader: 'an ecommerce operator planning support coverage for a promotion or peak season',
    decision: 'which high-volume customer requests can move quickly and which exceptions must stay with commerce, fraud, finance, or logistics owners',
    inputs: 'campaign calendar, order-status flows, carrier paths, return rules, refund authority, fraud triggers, inventory messages, contact forecasts, and incident communications',
    boundary: 'Extra agents cannot compensate for unclear refund authority, inaccurate inventory promises, or an unavailable fraud and logistics escalation path.',
    example: 'Before a holiday campaign, a retailer tests delayed-order, duplicate-charge, damaged-item, and address-change scenarios. Specialists can explain status and collect evidence, but refunds above the approved limit and suspicious address changes route to named owners with a promised update checkpoint.',
    measure: 'contact arrival by reason, backlog age, approved self-service use, route accuracy, refund escalations, carrier handoff time, and repeat contacts',
    owner: 'the ecommerce operations owner with finance, fraud, and logistics backups',
    serviceHref: '/services/ecommerce-customer-helpdesk',
    serviceLabel: 'ecommerce customer helpdesk'
  },
  {
    slug: 'saas-outsourced-help-desk-onboarding-offboarding-workflow',
    title: 'SaaS User Onboarding and Offboarding With an Outsourced Help Desk',
    excerpt: 'Let support coordinate repeatable user requests while keeping approval, identity, entitlement, and audit decisions with accountable owners.',
    reader: 'a SaaS or IT operations leader scoping user lifecycle work for an outsourced help desk',
    decision: 'which onboarding and offboarding steps support may coordinate without granting it authority to approve access',
    inputs: 'request sources, identity checks, approver matrix, role catalog, application owners, joiner and leaver timing, exception rules, evidence retention, and emergency removal paths',
    boundary: 'A ticket is not approval, a manager name in free text is not verified authority, and convenience should not override least privilege or urgent removal rules.',
    example: 'For a new starter, support checks that the request came through the approved workflow, confirms required fields, coordinates standard-role provisioning, and records results. A privileged role or missing approver stops the workflow. For a leaver, the urgent removal path takes priority over ordinary queue order.',
    measure: 'complete approved requests, provisioning accuracy, rejected exceptions, time to urgent removal, orphaned access findings, and audit-record completeness',
    owner: 'the identity or application owner who holds approval authority',
    serviceHref: '/services/saas-user-support',
    serviceLabel: 'SaaS user support'
  }
] as const;

function buildBody(seed: Seed) {
  return [
    `The practical answer is to make the decision visible before comparing vendors or assigning tickets. This guide is for ${seed.reader}. The central question is ${seed.decision}. Start with evidence from the queue rather than a generic list of features. Define the customer need, the work an agent may perform, the decision that remains with your company, and the proof required before a ticket can close. That creates a fair basis for evaluation and prevents a provider from having to guess how your business works. It also gives your internal team a concrete way to approve, reject, or narrow the proposed lane.`,
    `Build the baseline from ${seed.inputs}. Use a fixed observation window and state what was excluded. Averages alone are weak planning evidence because a queue can contain routine questions, protected decisions, and rare high-impact events. Group work by intent, channel, required permission, customer impact, and destination owner. Read a small sample from each important group. The goal is not to produce a perfect forecast. It is to expose the differences that change staffing, training, access, and escalation. Mark unknowns honestly and assign an owner to resolve each one before it becomes a contractual assumption.`,
    `Write a scope row for every eligible request family. Each row should name the entry signal, facts the specialist may collect, approved source, allowed actions, stopping condition, escalation destination, customer update, and closure evidence. ${seed.boundary} Keep identity, security, money, policy, and production-change decisions with named accountable owners unless a separately approved control says otherwise. If two reviewers route the same example differently, the scope is not ready. Resolve the disagreement in the source rule instead of asking frontline staff to compensate with personal judgment.`,
    `Turn the scope into a responsibility map. ${seed.owner.charAt(0).toUpperCase() + seed.owner.slice(1)} should remain accountable for the service outcome. Name who performs the task, who approves exceptions, who supplies factual guidance, who receives incidents, and who tells the customer what happens next. Add a backup for every time-sensitive decision. A shared mailbox or team name can be a destination, but it is not accountability unless someone monitors acceptance and aging. During provider discussions, ask both sides to explain the same scenario. Differences are useful findings because they reveal hidden expectations before live customers encounter them.`,
    `Use a worked example to test the model. ${seed.example} Run at least one normal case, one incomplete request, one sensitive boundary, and one after-hours case. Require the specialist to show the ticket note, not merely describe the answer. The note should preserve the customer goal, verified facts, action taken, source used, result, next owner, and communication checkpoint. Reviewers should score the route and evidence separately from writing style. A polished reply with the wrong authority is still a failed case, while a safe escalation may be the correct outcome.`,
    `Treat access as a designed part of the service. Begin with named accounts, approved devices, role-based permissions, multifactor authentication where the system supports it, and logging appropriate to the risk. Test that the role can complete allowed work and cannot perform excluded work. Record who approves access, who reviews it, and how quickly it must be removed after a role change or contract end. NIST CSF 2.0 and its supply-chain guide are useful references because they emphasize governance, clear supplier requirements, due diligence, monitoring, incident participation, and end-of-relationship activities. Adapt those outcomes to the actual systems in scope rather than claiming blanket compliance.`,
    `Limit the information placed in the support workflow. Collect what is necessary to identify the request, follow the approved step, and preserve the decision record. Do not copy passwords, secrets, full payment details, or unrelated personal information into notes. When an attachment or screenshot is necessary, state what it should show and where it belongs. The ICO data-minimisation guidance offers a useful principle: personal data should be adequate, relevant, and limited to what is necessary. Your legal and privacy owners must decide which obligations apply; the provider should demonstrate how its operating practice follows the approved rule.`,
    `Create a controlled launch with evidence-based gates. Start with observation, then supervised scenarios, then a small live cohort, and only then expand volume or complexity. A gate should state who approves it and what evidence is sufficient. Examples include agreement on ticket classification, successful use of the approved identity path, correct escalation in boundary cases, complete notes, and reliable customer checkpoints. Keep a rollback path. If a new lane produces repeated corrections, pause expansion, protect open customers, repair the source instruction, and retest. A launch date matters, but it should not override an unmet control.`,
    `Measure ${seed.measure}. Define the numerator, denominator, clock, exclusions, source system, review frequency, and owner for every measure. Read counts with ticket examples because a favorable average can hide a serious routing or access failure. Separate demand, speed, quality, and risk signals instead of compressing them into one score. Compare results with the declared baseline and avoid claiming that the provider caused a change when staffing, product releases, campaigns, or policy changes occurred at the same time. Measures should trigger questions and decisions, not serve as decoration in a monthly report.`,
    `Run governance as a short decision routine. Review new risks, aging exceptions, access changes, quality findings, source updates, customer promises, and actions from the prior meeting. Every corrective action needs an owner, due date, acceptance test, and evidence link. Trends belong in the meeting only when someone can act on them. A recurring wrong route may require a taxonomy change; repeated missing evidence may require a form change; a surge in unsupported requests may require clearer public guidance. Do not solve every finding by adding training. Repair the workflow that made the error easy to repeat.`,
    `Before signing or expanding, document the commercial and operational assumptions in the same language used by the queue. Include eligible work, hours, channels, demand bands, staffing model, transition work, tools, client responsibilities, change process, security duties, incident participation, quality sampling, reporting, continuity, and exit support. Ask what happens when volume is above or below plan and when an internal owner is unavailable. Contract language should support the operating model, while qualified legal, privacy, and security reviewers address obligations. A proposal, policy summary, or certification should not be stretched beyond its actual scope.`,
    `The next useful step is a bounded working session, not a wholesale handoff. Select a representative ticket sample, draft the scope rows, name the exception owners, and test the most important boundary. Then review the site’s ${seed.serviceLabel} service page at ${seed.serviceHref} to connect the decision to a concrete support lane. If the evidence supports a pilot, define the cohort and review gates. If it does not, preserve the findings and fix the missing owner, source, access role, or customer promise first. A smaller service with clear control is a stronger starting point than a broad launch built on assumptions.`
  ];
}

export const sep18BlogArticles = seeds.map((seed) => ({
  slug: seed.slug,
  title: seed.title,
  excerpt: seed.excerpt,
  published,
  minutes: 11,
  heroImage,
  body: buildBody(seed),
  sources: [...sources],
  cta: { href: seed.serviceHref, label: seed.serviceLabel }
}));


export const site = {
  domain: 'OutsourcedHelpdeskServices.com',
  slug: 'outsourcedhelpdeskservices',
  brand: 'Outsourced Helpdesk Services',
  primary: 'outsourced helpdesk services',
  audience: 'companies that need tier 1 help desk, ticket triage, and user support',
  angle: 'ticket ownership, escalation rules, knowledge base upkeep, and quality review',
  style: 'Helpdesk ticket UI',
  dark: '#041014',
  color: '#2dd4bf',
  accent: '#f59e0b',
  heroImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
  serviceImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80',
  alt: 'help desk support specialist managing tickets',
  badge: 'Ticket ops',
} as const;

export const services = [
  { slug: "level-one-ticket-triage", title: "Level One Ticket Triage", desc: "Filipino helpdesk specialists can handle level one ticket triage with documented workflows, approval limits, and owner review." },
  { slug: "email-helpdesk-support", title: "Email Helpdesk Support", desc: "Filipino helpdesk specialists can handle email helpdesk support with documented workflows, approval limits, and owner review." },
  { slug: "chat-helpdesk-support", title: "Chat Helpdesk Support", desc: "Filipino helpdesk specialists can handle chat helpdesk support with documented workflows, approval limits, and owner review." },
  { slug: "account-access-support", title: "Account Access Support", desc: "Filipino helpdesk specialists can handle account access support with documented workflows, approval limits, and owner review." },
  { slug: "password-reset-coordination", title: "Password Reset Coordination", desc: "Filipino helpdesk specialists can handle password reset coordination with documented workflows, approval limits, and owner review." },
  { slug: "saas-user-support", title: "SaaS User Support", desc: "Filipino helpdesk specialists can handle saas user support with documented workflows, approval limits, and owner review." },
  { slug: "ecommerce-customer-helpdesk", title: "Ecommerce Customer Helpdesk", desc: "Filipino helpdesk specialists can handle ecommerce customer helpdesk with documented workflows, approval limits, and owner review." },
  { slug: "knowledge-base-maintenance", title: "Knowledge Base Maintenance", desc: "Filipino helpdesk specialists can handle knowledge base maintenance with documented workflows, approval limits, and owner review." },
  { slug: "ticket-escalation-coordination", title: "Ticket Escalation Coordination", desc: "Filipino helpdesk specialists can handle ticket escalation coordination with documented workflows, approval limits, and owner review." },
  { slug: "bug-report-documentation", title: "Bug Report Documentation", desc: "Filipino helpdesk specialists can handle bug report documentation with documented workflows, approval limits, and owner review." },
  { slug: "helpdesk-quality-review", title: "Helpdesk Quality Review", desc: "Filipino helpdesk specialists can handle helpdesk quality review with documented workflows, approval limits, and owner review." },
  { slug: "support-queue-reporting", title: "Support Queue Reporting", desc: "Filipino helpdesk specialists can handle support queue reporting with documented workflows, approval limits, and owner review." },
] as const;

export const blogPosts = [
  {
    slug: 'outsourced-helpdesk-services-planning',
    title: 'IT help desk outsourcing: A Philippines-only buyer plan',
    excerpt: 'Use a clear ticket scope, access limits, service targets, and a 30-day test plan to hire Philippine help desk staff without handing over risky decisions.',
    minutes: 11,
  },
  {
    slug: 'outsourced-helpdesk-services-tasks-to-outsource',
    title: 'Which help desk tasks should you outsource first?',
    excerpt: 'Start with repeat tickets that have known answers, clear limits, and real examples for review.',
    minutes: 7,
  },
  {
    slug: 'outsourced-helpdesk-services-provider-questions',
    title: 'Questions to ask an outsourced help desk provider',
    excerpt: 'Use these questions to check ticket ownership, access, coverage, quality review, and escalation before you sign.',
    minutes: 8,
  },
  {
    slug: 'outsourced-helpdesk-services-onboarding-checklist',
    title: 'First-week help desk onboarding checklist',
    excerpt: 'Set up ticket access, approved answers, manager limits, and daily review before the queue grows.',
    minutes: 9,
  },
] as const;

const sharedSources = [
  { name: 'NIST Digital Identity Guidelines', url: 'https://pages.nist.gov/800-63-3/' },
  { name: 'Zendesk customer service resources', url: 'https://www.zendesk.com/resources/' },
] as const;

export const blogDetails = {
  'outsourced-helpdesk-services-planning': {
    keyTakeaways: [
      'Start with five repeat ticket types, not the whole queue.',
      'Hire from the Philippines for a written shift with real manager overlap.',
      'Keep identity, money, security, and account decisions with a named owner.',
      'Use a small ticket sample and a 30-day ramp before adding harder work.',
    ],
    directAnswer: [
      'IT help desk outsourcing means a remote support team handles approved ticket work inside your tools and rules. For a Philippines-only team, the safest first scope is tier 1 triage, known fixes, clear notes, and fast handoffs to your own technical owner.',
      'Do not buy a vague promise to "handle support." Buy named coverage hours, named ticket types, access limits, response targets, an escalation map, and a review plan tied to real tickets.',
    ],
    planningNumbers: [
      { value: '20', label: 'past tickets', note: 'Example training and scope sample' },
      { value: '5', label: 'ticket types', note: 'Example first live queue' },
      { value: '2 hrs', label: 'manager overlap', note: 'Example daily handoff window' },
      { value: '15 min', label: 'daily review', note: 'Example first-week check' },
      { value: '30 days', label: 'controlled ramp', note: 'Example test before wider scope' },
    ],
    sections: [
      {
        heading: 'Start with the queue you have now',
        body: [
          'Export a small set of solved tickets before you speak with a provider. Group them by request, tool, risk, answer path, and the person who made the final call.',
          'A useful first sample might contain 20 tickets from the last 30 days. Label that number as a planning example, then change it to fit your real queue and ticket mix.',
          'Look for repeat work with a known finish line. Good first lanes can include ticket tagging, basic software setup steps, status updates, knowledge base replies, and fact gathering for a technical escalation.',
          'Keep work out of the first lane when the agent would need to approve money, change account ownership, bypass an identity check, or promise an engineering date. A fast reply is not worth a bad security or customer decision.',
        ],
      },
      {
        heading: 'Choose a Philippine coverage window',
        body: [
          'A Philippines-only team can support a fixed day shift, a night shift, or a split schedule. Write the hours in one time zone and show the matching hours for the Philippine team so nobody has to guess.',
          'Plan real overlap with the manager who owns exceptions. A two-hour daily overlap is a planning example, not a rule, but the schedule needs enough shared time to review hard tickets and update instructions.',
          'Do not call the service 24/7 unless the staffing plan covers nights, weekends, breaks, leave, and backup. Ask who is present in each block and who takes the queue when the assigned agent is absent.',

        ],
      },
      {
        heading: 'Set tier 1 scope and stopping points',
        body: [
          'For each ticket type, write what the agent may see, what they may change, and when they must stop. "Handle password tickets" is too loose because password work can range from sharing a public reset link to changing a protected account.',
          'A safer rule might let the agent confirm the approved recovery path and collect required details. It should send identity failures, locked admin accounts, and suspected takeover attempts to a named security owner.',
          'Use the same pattern for billing, refunds, outages, and angry customers. The Philippine support agent can gather facts and keep the customer updated while the policy or technical decision stays with your manager.',

        ],
      },
      {
        heading: 'Limit access before the first login',
        body: [
          'Give each person a named account and only the access needed for the first ticket lanes. NIST SP 800-53 includes least privilege controls, which is a sound base for deciding what the role may view or change.',
          'Turn on strong multi-factor authentication where the tool supports it. CISA recommends MFA and points organizations toward phishing-resistant methods for stronger protection.',
          'Keep a simple access sheet with the tool, role, owner, approval date, and removal step. Review it when the job changes, when a person leaves, and when the pilot ends.',
          'Philippine staff may handle personal data as part of support work. Republic Act No. 10173 sets the Philippine data privacy framework, so your contract and operating rules should state what data the team can access and how incidents are reported.',
        ],
      },
      {
        heading: 'Write service targets that agents can use',
        body: [
          "A target should tell the agent what starts the clock, what pauses it, and what ends it. Atlassian's SLA guidance uses goals and calendars, which is more useful than one broad promise to reply quickly.",
          'Separate first response from resolution because the agent may not control the final fix. A tier 1 team can own a prompt first reply and a clean escalation even when engineering owns the repair time.',
          'Use a few priority levels that match real risk. For example, a full outage might need a 15-minute handoff while a how-to question can wait until the next covered block, but both numbers must come from your own service promise.',

        ],
      },
      {
        heading: 'Review answers, notes, and handoffs',
        body: [
          'Check a small ticket sample each day during the first week. Score whether the answer was right, the tone fit the customer, the notes showed the work, and the escalation reached the correct owner.',
          'A 15-minute daily review is a planning example for a small pilot. If the queue is larger or the tickets carry more risk, use a larger sample and give the reviewer enough time to read the full thread.',
          'Fix the source when the same miss appears twice. That may mean changing an article, adding a screenshot, tightening an access rule, or naming a better escalation owner.',

        ],
      },
      {
        heading: 'Run a 30-day controlled ramp',
        body: [
          'Days 1 through 5 can cover tool access, past tickets, reply practice, and shadow work. Keep the live lane small until the agent can find the approved answer and explain where to stop.',
          'Days 6 through 15 can add a limited live queue with daily review. Track repeat questions, unclear articles, missed tags, late handoffs, and requests that arrive outside the planned scope.',
          'Days 16 through 30 can add one harder ticket type only if the first lane is steady. The manager should approve that change in writing and update the access and escalation sheets at the same time.',
          'At day 30, decide whether to expand, hold, retrain, or remove a lane. Use ticket evidence for that choice instead of judging the team by how busy the chat channel felt.',
        ],
      },
      {
        heading: 'Compare providers on the working plan',
        body: [
          'Ask each provider to respond to the same queue sample and coverage brief. This makes it easier to compare the proposed Philippine team, manager support, tool controls, and review method.',
          'A provider should be able to name the person who handles schedule gaps and quality misses. "Our team will take care of it" is not a usable answer when a live queue is waiting.',
          'Confirm that the proposed staff will be hired from the Philippines. This site does not offer a mixed-region bench, so the written proposal should match the Philippines-only model described on the call.',

        ],
      },
    ],
    comparisonRows: [
      ['Decision', 'Weak provider answer', 'Useful evidence'],
      ['Philippine team', 'We hire globally', 'Named Philippines-only hiring and coverage plan'],
      ['Coverage', 'We can cover any hours', 'Shift blocks, holidays, breaks, and backup owner'],
      ['Scope', 'We handle tier 1', 'Named ticket types, actions, limits, and tools'],
      ['Access', 'Send the logins', 'Named accounts, role limits, MFA, and removal steps'],
      ['Escalation', 'Agents ask when needed', 'Trigger, owner, channel, and response target'],
      ['Quality', 'We monitor the team', 'Ticket sample, checklist, reviewer, and fix log'],
    ],
    scripts: [
      "Can you map these five ticket types to the Philippine agent's action, stopping point, access level, and escalation owner before you propose coverage?",
      'Please show the exact shift, backup plan, manager overlap, first-week ticket sample, and the person who fixes a missed handoff.',
    ],
    workflow: [
      { step: '1', title: 'Ticket arrives', body: 'The Philippine agent checks the type, customer record, urgency, and approved answer path.' },
      { step: '2', title: 'Known work is completed', body: 'The agent uses the approved reply, records the steps, and sets the correct status.' },
      { step: '3', title: 'Risk hits the limit', body: 'Money, identity, security, outage, or policy decisions move to the named owner with the facts attached.' },
      { step: '4', title: 'The manager closes the loop', body: 'The owner makes the decision, and the agent sends the approved update or records the final fix.' },
      { step: '5', title: 'The rule gets better', body: 'The reviewer checks the ticket and updates the article or handoff rule when a gap caused the miss.' },
    ],
    scenario: [
      'Example: a software customer says a new employee cannot enter the billing portal. The Philippine agent checks the approved setup article, confirms the user record, and sees that the request would add billing access.',
      "The agent does not grant the role or share an admin login. The ticket goes to the customer's billing owner with the user name, requested role, account, checks already completed, and a copy-ready customer update.",
      'The owner approves or rejects the change, then the agent records the result. During review, the support lead checks whether the correct owner received the ticket and whether the customer got a clear update within the promised window.',
    ],
    relatedLinks: [
      { label: 'Plan ticket operations support', href: '/services/operations-support' },
      { label: 'Review customer help desk support', href: '/services/customer-support' },
      { label: 'Set up help desk QA and reporting', href: '/services/reporting-and-qa' },
      { label: 'Use the provider question guide', href: '/blog/outsourced-helpdesk-services-provider-questions' },
      { label: 'Request a Philippines-only help desk plan', href: '/contact' },
    ],
    sources: [
      { name: 'NIST SP 800-53 Rev. 5, Security and Privacy Controls', url: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final', note: 'Least privilege and access control reference.' },
      { name: 'CISA multi-factor authentication guidance', url: 'https://www.cisa.gov/resources-tools/resources/multi-factor-authentication-mfa', note: 'MFA and phishing-resistant authentication guidance.' },
      { name: 'Republic Act No. 10173, Data Privacy Act of 2012', url: 'https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html', note: 'Philippine legal text for personal data protection.' },
      { name: 'Atlassian guide to service-level agreements', url: 'https://www.atlassian.com/itsm/service-request-management/slas', note: 'SLA goals, calendars, and service desk measurement.' },
    ],
    faqs: [
      { q: 'What is IT help desk outsourcing?', a: 'It is a setup where an outside team handles approved support tickets inside your tools and rules. Your company can keep technical, money, identity, and policy decisions with named internal owners.' },
      { q: 'Why hire help desk staff from the Philippines?', a: 'A Philippine team can provide clear remote coverage for repeat support work when the role, shift, tools, and handoffs are written down. The country does not remove the need for good access controls or active management.' },
      { q: 'Which tickets should move first?', a: 'Start with frequent tickets that have a stable answer, low decision risk, and several solved examples. Keep security, refunds, account ownership, and unclear technical work out of the first lane.' },
      { q: 'Can a Philippine help desk cover US hours?', a: 'Yes, when the proposed shift and backup plan match the hours in your contract. Check the daily manager overlap, holiday plan, breaks, leave coverage, and after-hours escalation path.' },
      { q: 'How long should a help desk pilot run?', a: 'This guide uses 30 days as a planning example because it allows time for training, a small live queue, review, and one careful scope change. Your pilot may need more time when tickets are rare, complex, or sensitive.' },
      { q: 'How do I check help desk quality?', a: 'Read a sample of real tickets for answer accuracy, useful notes, tone, status, and correct escalation. Fix the article or rule behind repeat misses instead of only reminding the agent.' },
    ],
  },
  'outsourced-helpdesk-services-tasks-to-outsource': {
    keyTakeaways: [
      'Start with frequent tickets that already have an approved answer.',
      'Avoid handing off money, security, or account decisions at the start.',
      'Use past tickets to train and review the first batch.',
    ],
    sections: [
      { heading: 'Pick work with a known finish line', body: 'Password-help instructions, order status checks, basic product questions, and ticket tagging can be good first lanes when the answer and limit are clear. The exact list depends on your product and access rules.' },
      { heading: 'Separate gathering from deciding', body: 'An agent can collect order details, reproduce an error, or confirm the customer record without approving a refund or changing account access. This keeps the queue moving while the decision stays with the right owner.' },
      { heading: 'Train with real examples', body: 'Choose resolved tickets that show a normal answer, an exception, and a bad handoff. Ask the new support team to explain what they would do and where they would stop before they work on live requests.' },
    ],
    comparisonRows: [
      ['Ticket type', 'Good first task', 'Keep with an owner'],
      ['Product question', 'Use an approved article', 'Promise a feature or deadline'],
      ['Billing', 'Collect invoice and account details', 'Approve credit or refund'],
      ['Access', 'Share the approved recovery steps', 'Bypass identity checks'],
      ['Bug report', 'Gather steps and screenshots', 'Set engineering priority'],
    ],
    script: 'Which ticket types have a repeatable answer, a clear stopping point, and enough past examples for us to review together?',
    sources: sharedSources,
    faqs: [
      { q: 'What help desk task is easiest to outsource?', a: 'A frequent ticket with a stable answer, low risk, and several good examples is usually easier than a broad support queue.' },
      { q: 'Should outsourced agents handle refunds?', a: 'They can gather facts and route the request. Keep refund approval with the person who owns the policy and budget unless you have set a firm approval limit.' },
      { q: 'When can I add harder tickets?', a: 'Add them after the first lane produces accurate answers, useful notes, and correct escalations without constant correction.' },
    ],
  },
  'outsourced-helpdesk-services-provider-questions': {
    keyTakeaways: [
      'Ask who owns ticket quality before you ask about headcount.',
      'Request a sample escalation rule for security, refunds, billing, outages, and angry customers.',
      'Review ticket notes and manager follow-up before you add more work.',
    ],
    sections: [
      { heading: 'Start with ticket ownership', body: 'A help desk provider should explain who opens tickets, who answers them, who checks the answer, and who fixes bad handoffs. If the answer is vague on the sales call, ask for the names and review steps in writing.' },
      { heading: 'Check data access before the first login', body: 'Support staff may need CRM, billing, chat, inbox, and knowledge base access. Give the least access that lets them do the job. Keep refunds, account changes, security resets, and customer data exports behind approval.' },
      { heading: 'Ask for the QA sample, not the promise', body: 'Ask to see the checklist used for tone, accuracy, ticket notes, and escalation. A simple working sheet tells you more than a broad promise about quality.' },
    ],
    comparisonRows: [
      ['Topic', 'Weak answer', 'Better answer'],
      ['Coverage', 'We can cover any hours.', 'Here is the shift, backup plan, holiday plan, and manager overlap.'],
      ['Escalation', 'The agent will ask when needed.', 'Billing, refunds, outages, VIP customers, and security tickets go to this owner.'],
      ['Quality', 'We monitor performance.', 'We review a set of tickets and discuss misses with examples.'],
      ['Tools', 'Just send logins.', 'Use role-based access, a password manager, and an approval list for sensitive work.'],
    ],
    script: 'Before we start, can you send the QA checklist, escalation rules, and manager review plan you recommend for our help desk?',
    sources: [
      { name: 'Zendesk CX Trends', url: 'https://www.zendesk.com/customer-experience-trends/' },
      { name: 'NIST Digital Identity Guidelines', url: 'https://pages.nist.gov/800-63-3/' },
      { name: 'HDI Support Center Practices and Salary Report', url: 'https://www.thinkhdi.com/library/supportworld/2024/hdi-support-center-practices-salary-report' },
    ],
    faqs: [
      { q: 'Which questions matter most when choosing a provider?', a: 'Focus on ownership, access, quality review, coverage, escalation, and what happens when an agent is absent or not a fit.' },
      { q: 'Should outsourced help desk staff get full system access?', a: 'No. Start with the access needed for common tickets. Keep billing changes, data exports, and security resets behind approval.' },
      { q: 'How should I test a new provider?', a: 'Begin with a small group of known ticket types. Review the answers, notes, and escalations before adding more of the queue.' },
    ],
  },
  'outsourced-helpdesk-services-onboarding-checklist': {
    keyTakeaways: [
      'Give access by role instead of sharing broad account logins.',
      'Practice on past tickets before opening the live queue.',
      'Review answers and handoffs each day during the first week.',
    ],
    sections: [
      { heading: 'Set the tools and limits', body: 'Create named accounts, turn on the required security controls, and grant only the access needed for the first ticket types. Write down which changes need approval and where the agent sends those requests.' },
      { heading: 'Teach the answer path', body: 'Share approved articles, reply examples, product notes, and the escalation list. Then use past tickets to check whether the agent can find the answer, record the work, and stop at the right limit.' },
      { heading: 'Keep the first queue small', body: 'Open a limited set of ticket types and review them every day. Correct the source article or rule when the same miss appears twice instead of relying on a reminder in chat.' },
    ],
    comparisonRows: [
      ['Setup area', 'Before live work', 'First-week check'],
      ['Access', 'Named accounts and role limits', 'Remove access that is not needed'],
      ['Answers', 'Approved articles and examples', 'Fix unclear or missing steps'],
      ['Escalation', 'Owner list and triggers', 'Review missed and late handoffs'],
      ['Quality', 'One ticket checklist', 'Discuss real tickets with the reviewer'],
    ],
    script: 'For the first week, can we limit the queue to these ticket types and review answers, notes, and escalations together each day?',
    sources: sharedSources,
    faqs: [
      { q: 'What should I prepare before help desk onboarding?', a: 'Prepare named tool access, real ticket examples, approved answers, agent limits, escalation owners, and one review checklist.' },
      { q: 'Should the new team start with the full queue?', a: 'No. Start with a small set of known ticket types. Add more after the answers and handoffs are steady.' },
      { q: 'What should the first review cover?', a: 'Check answer accuracy, customer tone, ticket notes, status, and whether each exception reached the correct owner.' },
    ],
  },
} as const;

export const helpdeskOffer = {
  included: [
    'ticket scope built from the requests your team handles now',
    'coverage plan based on channels, hours, volume, and manager overlap',
    'access and approval limits for sensitive customer work',
    'first-week review plan for answers, notes, and escalations',
  ],
} as const;

export const leadQuestions = [
  'Which ticket types take the most time now?',
  'Which channels and hours need coverage?',
  'What tools would the support team need to use?',
  'Which requests must always go to a manager?',
  'Who will review ticket quality during the first week?',
] as const;

export const helpdeskFitNote = 'The right setup depends on your ticket types, hours, tools, access rules, and available managers. Share those details so the first plan fits the queue you have.';


export const researchPosts: Array<{ slug: string; title: string; excerpt: string; body: string[] }> = [];

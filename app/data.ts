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
  {
    slug: 'operations-support',
    title: 'Ticket operations support',
    desc: 'Keep new tickets sorted, tagged, assigned, and moving without asking agents to make decisions that belong to a manager.',
    bestTasks: ['Triage new tickets by type and urgency', 'Route exceptions to the named owner', 'Clean up tags, status, and ticket notes'],
    controls: ['Written priority rules', 'A manager queue for risky requests', 'Daily review of missed or stale tickets'],
    firstWeek: ['Share real ticket examples', 'Set tags and routing rules', 'Review the first small batch together'],
  },
  {
    slug: 'customer-support',
    title: 'Customer help desk support',
    desc: 'Answer common product and account questions through inbox, chat, or a support portal using approved replies and clear escalation rules.',
    bestTasks: ['Answer repeat how-to questions', 'Collect details before escalation', 'Send status updates on open requests'],
    controls: ['Approved answer library', 'Identity checks for account requests', 'Manager approval for refunds and account changes'],
    firstWeek: ['Choose the first ticket types', 'Practice with past conversations', 'Check tone and accuracy every day'],
  },
  {
    slug: 'admin-support',
    title: 'Knowledge base support',
    desc: 'Turn solved tickets and manager notes into help articles that customers and agents can find, follow, and keep current.',
    bestTasks: ['Draft articles from solved tickets', 'Fix broken links and stale steps', 'Organize article tags and search terms'],
    controls: ['A subject owner approves each article', 'Screenshots hide private data', 'Old steps are flagged before publishing'],
    firstWeek: ['Pick five repeat questions', 'Agree on one article format', 'Publish only after owner review'],
  },
  {
    slug: 'reporting-and-qa',
    title: 'Help desk QA and reporting',
    desc: 'Review real tickets for accurate answers, useful notes, correct handoffs, and recurring problems the support lead should fix.',
    bestTasks: ['Score a sample of resolved tickets', 'Track missed handoffs and repeat issues', 'Prepare a short manager review'],
    controls: ['One written QA checklist', 'Links to the tickets behind each finding', 'A named owner for each follow-up'],
    firstWeek: ['Agree on the review checklist', 'Score the same sample together', 'Set the manager review date'],
  },
] as const;

export const blogPosts = [
  {
    slug: 'outsourced-helpdesk-services-planning',
    title: 'How to plan outsourced help desk coverage',
    excerpt: 'Define ticket types, coverage hours, owner decisions, and escalation rules before you compare providers.',
    minutes: 6,
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
      'List the ticket types and hours you need covered.',
      'Keep security, refunds, billing changes, and account decisions with a named owner.',
      'Decide how you will review ticket quality before the first shift.',
    ],
    sections: [
      { heading: 'Begin with the queue you already have', body: 'Pull a sample of recent tickets and group them by type. Note which ones had a known answer, which needed another team, and which involved money, access, or customer risk. That sample is more useful than a broad job description.' },
      { heading: 'Write the handoff rule', body: 'For each common ticket, state what the agent may do, what facts they should collect, and who takes over when the request crosses a limit. Put the owner name in the rule instead of saying "ask a manager."' },
      { heading: 'Choose a review routine', body: 'Check a small set of real tickets for answer accuracy, tone, notes, and correct escalation. Record the fix beside the ticket so the next review can show whether the problem came back.' },
    ],
    comparisonRows: [
      ['Plan item', 'Too loose', 'Useful detail'],
      ['Coverage', 'Business hours', 'Days, time zone, channel, and backup owner'],
      ['Scope', 'Handle support', 'Named ticket types with clear limits'],
      ['Escalation', 'Ask the team', 'Owner and trigger for each exception'],
      ['Review', 'Monitor quality', 'Ticket sample, checklist, reviewer, and date'],
    ],
    script: 'Can you map our common ticket types to the agent action, approval limit, and escalation owner before you propose coverage?',
    sources: sharedSources,
    faqs: [
      { q: 'What should a help desk scope include?', a: 'Include channels, hours, common ticket types, agent limits, escalation owners, tool access, and the way ticket quality will be checked.' },
      { q: 'Do I need every process documented first?', a: 'No. Start with the ticket types you can explain with real examples. Keep unclear or risky work with your team until the rule is written.' },
      { q: 'Who should own escalations?', a: 'Name a person or team for each type of exception. Billing, security, product defects, and customer complaints may need different owners.' },
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

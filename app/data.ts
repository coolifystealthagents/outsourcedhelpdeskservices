export const site = {
  "domain": "OutsourcedHelpdeskServices.com",
  "slug": "outsourcedhelpdeskservices",
  "brand": "Outsourced Helpdesk Services",
  "primary": "outsourced helpdesk services",
  "audience": "companies needing tier 1 helpdesk, ticket triage, and user support",
  "angle": "tickets, SLAs, escalation paths, knowledge base setup, and QA",
  "style": "Helpdesk ticket UI",
  "dark": "#041014",
  "color": "#2dd4bf",
  "accent": "#f59e0b",
  "heroImage": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
  "serviceImage": "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
  "alt": "helpdesk support specialist managing tickets",
  "badge": "Ticket ops"
} as const;
export const services = [
  {
    "slug": "operations-support",
    "title": "Operations Support",
    "desc": "Operations Support for teams using outsourced helpdesk services with clear SOPs, weekly review, and measurable handoffs."
  },
  {
    "slug": "customer-support",
    "title": "Customer Support",
    "desc": "Customer Support for teams using outsourced helpdesk services with clear SOPs, weekly review, and measurable handoffs."
  },
  {
    "slug": "admin-support",
    "title": "Admin Support",
    "desc": "Admin Support for teams using outsourced helpdesk services with clear SOPs, weekly review, and measurable handoffs."
  },
  {
    "slug": "reporting-and-qa",
    "title": "Reporting and QA",
    "desc": "Reporting and QA for teams using outsourced helpdesk services with clear SOPs, weekly review, and measurable handoffs."
  }
] as const;
export const blogPosts = [
  {
    "slug": "outsourced-helpdesk-services-planning",
    "title": "Outsourced Helpdesk Services: What does it plan?",
    "excerpt": "A plain-English guide to staffing details, scope, and hidden planning.",
    "minutes": 6
  },
  {
    "slug": "outsourced-helpdesk-services-tasks-to-outsource",
    "title": "Outsourced Helpdesk Services: What tasks should you outsource first?",
    "excerpt": "Start with recurring work that has examples and clear review rules.",
    "minutes": 7
  },
  {
    "slug": "outsourced-helpdesk-services-provider-questions",
    "title": "Outsourced Helpdesk Services: Questions to ask before hiring",
    "excerpt": "Use these questions before you sign with a provider or freelancer.",
    "minutes": 8
  },
  {
    "slug": "outsourced-helpdesk-services-onboarding-checklist",
    "title": "Outsourced Helpdesk Services: First week onboarding checklist",
    "excerpt": "A simple checklist for tools, SOPs, calls, QA, and reporting.",
    "minutes": 9
  }
] as const;
export const stats = [{label:'Typical savings target',value:'30-60%',note:'depends on role, management, and local hiring plan'},{label:'Best pilot length',value:'14 days',note:'enough time to test quality before scaling'},{label:'Start with',value:'5-10 tasks',note:'clear recurring tasks beat vague job descriptions'}] as const;

export const blogDetails = {
  'outsourced-helpdesk-services-provider-questions': {
    keyTakeaways: [
      'Ask who owns ticket quality before you ask about headcount.',
      'Request a sample escalation rule for security, refunds, billing, outages, and angry customers.',
      'Run a 14-day pilot with ticket notes, QA review, and one named manager.',
    ],
    sections: [
      {
        heading: 'Start with ticket ownership',
        body: 'A helpdesk provider should explain who opens tickets, who answers them, who checks the answer, and who fixes bad handoffs. If that sounds vague on the sales call, it will feel worse after launch.',
      },
      {
        heading: 'Check data access before the first login',
        body: 'Support staff often need CRM, billing, chat, inbox, and knowledge base access. Give the least access that lets them do the job. Keep refunds, account changes, security resets, and customer data exports behind manager approval until trust is proven.',
      },
      {
        heading: 'Ask for the QA sample, not the promise',
        body: 'Good providers can show the scorecard they use for tone, accuracy, response time, notes, and escalation. You do not need a polished deck. You need the simple checklist a manager will use every week.',
      },
    ],
    comparisonRows: [
      ['Topic', 'Weak answer', 'Better answer'],
      ['Coverage', 'We can cover any hours.', 'Here is the shift, backup plan, holiday plan, and manager overlap.'],
      ['Escalation', 'The agent will ask when needed.', 'Billing, refunds, outages, VIP customers, and security tickets go to this owner.'],
      ['Quality', 'We monitor performance.', 'We score five tickets per agent each week and review misses with examples.'],
      ['Tools', 'Just send logins.', 'Use role-based access, a password manager, and an approval list for sensitive work.'],
    ],
    script: 'Before we start, can you send the QA scorecard, the escalation rules, and the first two weeks of manager check-ins you recommend for our helpdesk?',
    sources: [
      { name: 'Zendesk CX Trends 2024', url: 'https://www.zendesk.com/customer-experience-trends/' },
      { name: 'NIST Digital Identity Guidelines', url: 'https://pages.nist.gov/800-63-3/' },
      { name: 'HDI Support Center Practices and Salary Report', url: 'https://www.thinkhdi.com/library/supportworld/2024/hdi-support-center-practices-salary-report' },
    ],
    faqs: [
      { q: 'How many questions should I ask a helpdesk provider?', a: 'Ask enough to test ownership, access, QA, coverage, escalation, and replacement rules. Ten focused questions beat a long vendor checklist.' },
      { q: 'Should outsourced helpdesk staff get full system access?', a: 'No. Start with the access needed for common tickets. Keep billing changes, data exports, and security resets behind approval.' },
      { q: 'What is a fair pilot length?', a: 'Fourteen days is usually enough to test ticket notes, tone, response time, escalations, and manager follow-up before you add more work.' },
    ],
  },
} as const;

export const staffingOffer = {
  partner: 'our staffing team',
  promise: 'Get a managed offshore staffing plan built around the work you need removed from your plate.',
  fit: [
    'business owners who need reliable remote staff but do not want to screen alone',
    'teams that want trained support, backup coverage, and a clear manager path',
    'companies that need help with admin, operations, customer support, calls, bookkeeping, development, or marketing work',
  ],
  included: [
    'role planning call to turn your task list into a clear staffing scope',
    'candidate matching based on skills, schedule, tools, and communication needs',
    'onboarding guidance for SOPs, scorecards, reporting, and safe tool access',
    'managed support so quality, attendance, and replacement questions do not sit only on the owner',
  ],
  proof: [
    'clear task scope before hiring',
    'weekly reporting rhythm',
    'named accountability and escalation path',
    'simple handoff plan for tools, SOPs, and quality checks',
  ],
} as const;

export const leadQuestions = [
  'What work do you want off your plate first?',
  'Which tools, inboxes, phones, CRMs, or systems will the staff member use?',
  'What hours, time zone, and response time do you need?',
  'Who checks quality during the first two weeks?',
  'What should the staff member never decide without approval?',
] as const;

export const staffingProcess = [
  { step: '1', title: 'Map the role', body: 'We turn messy tasks into one clear role with outcomes, tools, limits, and a first-week checklist.' },
  { step: '2', title: 'Match the staff', body: 'our staffing team can help match remote staff to the work, schedule, communication style, and skill level you need.' },
  { step: '3', title: 'Launch with control', body: 'Start with SOPs, sample work, limited access, daily review, and a simple scorecard so quality is easy to see.' },
  { step: '4', title: 'Scale what works', body: 'Once the first tasks are stable, add more work, better reporting, and stronger delegation without guessing.' },
] as const;

export const staffingFitNote = 'Every staffing plan depends on role scope, schedule, skills, tools, and management needs. Send the role details and our staffing team can guide the best fit.';

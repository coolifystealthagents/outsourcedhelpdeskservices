import { Footer, Header, JsonLd } from './components';

const supportLanes = [
  { number: '01', title: 'Ticket triage and routing', text: 'Sort new requests, set priority, add clean notes, and send urgent work to the right owner.', href: '/services/operations-support' },
  { number: '02', title: 'User and customer support', text: 'Handle repeat questions across inbox, chat, and portal with an approved answer path.', href: '/services/customer-support' },
  { number: '03', title: 'Knowledge base upkeep', text: 'Turn solved tickets into clear help articles so the same issue is easier next time.', href: '/services/admin-support' },
  { number: '04', title: 'QA and service reporting', text: 'Review ticket notes, missed handoffs, response windows, and the fixes your team should make.', href: '/services/reporting-and-qa' },
];

const launchSteps = [
  { day: 'Day 1', title: 'Draw the boundary', text: 'List what support can solve, what needs approval, and what must escalate at once.' },
  { day: 'Days 2–3', title: 'Build the answer path', text: 'Share sample tickets, approved replies, tool access, and the owner for each exception.' },
  { day: 'Days 4–5', title: 'Run tickets with review', text: 'Start with a small queue. Check notes and handoffs before adding more volume.' },
];

const guides = [
  { title: 'Questions to ask a help desk provider', text: 'Test ticket ownership, access, QA, coverage, and escalation before you sign.', href: '/blog/outsourced-helpdesk-services-provider-questions', time: '8 min' },
  { title: 'First-week onboarding checklist', text: 'Set up tools, sample answers, review rules, and manager check-ins.', href: '/blog/outsourced-helpdesk-services-onboarding-checklist', time: '9 min' },
  { title: 'Tasks to outsource first', text: 'Choose repeat work with clear examples instead of handing off the whole queue.', href: '/blog/outsourced-helpdesk-services-tasks-to-outsource', time: '7 min' },
];

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://outsourcedhelpdeskservices.com/#webpage',
        name: 'Outsourced Help Desk Services',
        url: 'https://outsourcedhelpdeskservices.com/',
        description: 'Plan outsourced help desk coverage, ticket triage, escalation, knowledge base work, and quality review.',
      },
      {
        '@type': 'Service',
        name: 'Outsourced help desk planning and staffing',
        serviceType: 'Outsourced help desk services',
        provider: { '@type': 'Organization', name: 'Outsourced Helpdesk Services', url: 'https://outsourcedhelpdeskservices.com/' },
        areaServed: 'US',
        description: 'Help desk planning for ticket triage, user support, escalation, knowledge base upkeep, and QA reporting.',
      },
    ],
  };

  return <>
    <Header />
    <main className="desk-home">
      <JsonLd data={schema} />

      <section className="desk-hero">
        <div className="desk-hero-copy">
          <p className="desk-kicker"><span /> Outsourced help desk planning</p>
          <h1>A calmer helpdesk starts here.</h1>
          <p className="desk-lead">Build a support team around the queue you have now: clear ticket ownership, useful notes, safe access, and an escalation path people can follow.</p>
          <a className="desk-button" href="/contact">Build my helpdesk plan <span aria-hidden="true">→</span></a>
          <p className="desk-tagline">Ticket coverage, clear escalation, one accountable launch.</p>
        </div>
        <div className="desk-hero-visual">
          <img src="/helpdesk-team.jpg" alt="Support team reviewing a help desk queue together" />
          <div className="desk-ticket-rail" aria-label="Example ticket flow">
            <p>Queue status</p>
            <div><span className="status-dot new" /><b>New</b><small>triage and tag</small></div>
            <div><span className="status-dot work" /><b>In progress</b><small>answer or route</small></div>
            <div><span className="status-dot done" /><b>Resolved</b><small>note the fix</small></div>
          </div>
        </div>
      </section>

      <section className="desk-operating-strip" aria-label="Help desk planning scope">
        <div><small>Start lane</small><strong>Tier 1 first</strong></div>
        <div><small>Common channels</small><strong>Inbox · chat · portal</strong></div>
        <div><small>Control point</small><strong>Named escalation owner</strong></div>
      </section>

      <section className="desk-section" id="tasks">
        <div className="desk-section-head">
          <div><p className="desk-kicker"><span /> Support lanes</p><h2>Give every ticket a clear next move.</h2></div>
          <p>Start with work your team can explain and review. Add harder tickets after the handoff is steady.</p>
        </div>
        <div className="desk-lanes">
          {supportLanes.map((lane) => <a href={lane.href} key={lane.number} className="desk-lane">
            <span>{lane.number}</span><h3>{lane.title}</h3><p>{lane.text}</p><b>Open service guide →</b>
          </a>)}
        </div>
      </section>

      <section className="desk-flow-section">
        <div className="desk-flow-copy">
          <p className="desk-kicker light"><span /> A working queue</p>
          <h2>Support should feel boring in the best way.</h2>
          <p>New tickets arrive. Someone owns the next step. Risky requests go to a manager. Solved issues leave a useful note behind.</p>
          <a href="/contact">Build my helpdesk plan →</a>
        </div>
        <div className="desk-flow-board" aria-label="Example help desk handoff board">
          <header><span>Today’s support path</span><small>Example operating view</small></header>
          <div className="desk-flow-row"><b>01</b><span><strong>Password and access</strong><small>Verify identity before any reset</small></span><em>Manager rule</em></div>
          <div className="desk-flow-row"><b>02</b><span><strong>Product how-to</strong><small>Use approved answer and source link</small></span><em>Support owned</em></div>
          <div className="desk-flow-row"><b>03</b><span><strong>Billing or refund</strong><small>Gather facts, then send for approval</small></span><em>Escalate</em></div>
        </div>
      </section>

      <section className="desk-section desk-launch">
        <div className="desk-section-head compact">
          <div><p className="desk-kicker"><span /> First week</p><h2>Launch with a small, reviewed queue.</h2></div>
        </div>
        <div className="desk-steps">
          {launchSteps.map((step) => <article key={step.day}><small>{step.day}</small><h3>{step.title}</h3><p>{step.text}</p></article>)}
        </div>
      </section>

      <section className="desk-guides">
        <div className="desk-guides-title"><p className="desk-kicker light"><span /> Before you hire</p><h2>Three guides worth reading first.</h2></div>
        <div className="desk-guide-list">
          {guides.map((guide) => <a href={guide.href} key={guide.href}><small>{guide.time}</small><div><strong>{guide.title}</strong><p>{guide.text}</p></div><b aria-hidden="true">↗</b></a>)}
        </div>
      </section>

      <section className="desk-final">
        <p className="desk-kicker"><span /> Ready when the queue is</p>
        <h2>Plan the handoff before you add headcount.</h2>
        <p>Tell us what comes in, who needs help, and which decisions must stay with your team.</p>
        <a className="desk-button" href="/contact">Build my helpdesk plan <span aria-hidden="true">→</span></a>
      </section>
    </main>
    <Footer />
  </>;
}

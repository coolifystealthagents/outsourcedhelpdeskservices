import type { Metadata } from 'next';
import { Footer, Header } from '../../components';
import styles from './comparison.module.css';

const companies = [
  { name: 'Stealth Agents', domain: 'StealthAgents.com', url: 'https://stealthagents.com/', category: 'Managed virtual assistance', researchAngle: 'Ask whether the proposed role is dedicated to help desk work, how supervision operates, and which ticket tools the assigned staff can use.', verify: 'Request a written scope for coverage, manager responsibilities, access controls, replacement terms, and examples that match your queue.' },
  { name: 'Outsourced Helpdesk Services', domain: 'OutsourcedHelpdeskServices.com', url: 'https://outsourcedhelpdeskservices.com/', category: 'Help desk services', researchAngle: 'Review the service pages for ticket intake, channel support, access coordination, escalation, documentation, quality review, and reporting.', verify: 'Confirm the precise service lane, operating hours, client-owned decisions, tool permissions, escalation owners, and pilot review process.' },
  { name: 'IT Virtual Assistant', domain: 'ITVirtualAssistant.com', url: 'https://itvirtualassistant.com/', category: 'Technology support staffing', researchAngle: 'Explore this option if the role combines support coordination with recurring IT administration.', verify: 'Confirm which technical tasks are supported, which credentials are required, and where troubleshooting must stop for an internal specialist.' },
  { name: 'Customer Care Staff', domain: 'CustomerCareStaff.com', url: 'https://customercarestaff.com/', category: 'Customer support staffing', researchAngle: 'Explore this option when customer communication and follow-up matter more than technical diagnosis.', verify: 'Check channel coverage, ticket ownership, product training, approval limits, and the handoff path for technical or account-risk issues.' },
  { name: 'Answering Service Staff', domain: 'AnsweringServiceStaff.com', url: 'https://answeringservicestaff.com/', category: 'Phone answering support', researchAngle: 'Consider phone intake when callers need a reliable first contact and a documented route to the correct team.', verify: 'Ask about call scripts, caller verification, urgent-call rules, ticket creation, transfer acceptance, recording, and consent requirements.' },
  { name: 'Outsourced Callers', domain: 'OutsourcedCallers.com', url: 'https://outsourcedcallers.com/', category: 'Calling staff', researchAngle: 'Research this option if outbound updates or structured support callbacks are part of the operating brief.', verify: 'Confirm permitted call types, customer consent, scripts, disposition records, callback security, and escalation ownership.' },
  { name: 'Call Center Outsourced', domain: 'CallCenterOutsourced.com', url: 'https://callcenteroutsourced.com/', category: 'Call center staffing', researchAngle: 'Research broader phone coverage when the queue includes inbound intake, routing, and customer updates.', verify: 'Ask how staffing, quality review, queue peaks, identity checks, call records, and specialist transfers would be managed.' },
  { name: 'Virtual Assistant Call Center', domain: 'VirtualAssistantCallCenter.com', url: 'https://virtualassistantcallcenter.com/', category: 'Virtual call support', researchAngle: 'Consider whether a virtual-assistant model can cover a tightly documented phone support lane.', verify: 'Check dedicated staffing, telephony compatibility, call notes, transfer rules, supervision, and coverage when an assigned person is absent.' },
  { name: 'Legal Executive Assistant', domain: 'LegalExecutiveAssistant.com', url: 'https://legalexecutiveassistant.com/', category: 'Legal administrative support', researchAngle: 'This is an adjacent specialist option for legal-office administration rather than a presumed technical help desk provider.', verify: 'Confirm confidentiality controls, permitted client communication, system access, conflict handling, and the boundary between administration and legal judgment.' },
  { name: 'Logistics Trucks', domain: 'LogisticsTrucks.com', url: 'https://logisticstrucks.com/', category: 'Logistics operations support', researchAngle: 'This may be relevant when support demand is tied to shipment coordination or logistics back-office work.', verify: 'Ask which transport workflows are covered, where source data comes from, and who owns carrier, pricing, compliance, and delivery decisions.' },
  { name: 'Peptide Staff', domain: 'PeptideStaff.com', url: 'https://peptidestaff.com/', category: 'Health and wellness administration', researchAngle: 'Treat this as an industry-specific administrative lead, not as evidence of regulated or clinical support capability.', verify: 'Confirm the exact administrative scope, data handling, required training, prohibited advice, and escalation to qualified staff.' },
  { name: 'Outsourcing Assistant', domain: 'OutsourcingAssistant.com', url: 'https://outsourcingassistant.com/', category: 'General virtual assistance', researchAngle: 'A generalist may fit a mixed role that includes ticket coordination but little technical decision-making.', verify: 'Compare dedicated versus shared staffing, task ownership, tool access, supervision, documentation, and the route for unsupported requests.' },
  { name: 'Hire Back Office', domain: 'HireBackOffice.com', url: 'https://hirebackoffice.com/', category: 'Back-office staffing', researchAngle: 'Research this option for repeat operational work around a service desk, such as records, follow-up, or queue hygiene.', verify: 'Confirm whether help desk tools are supported and define data access, exception handling, review sampling, and daily ownership.' },
  { name: 'Dispensary VA', domain: 'DispensaryVA.com', url: 'https://dispensaryva.com/', category: 'Retail administrative support', researchAngle: 'This is an adjacent option for retail administration in a specialized industry, not a verified substitute for technical support.', verify: 'Check jurisdiction, platform access, customer-data rules, permitted communication, and which requests require an internal compliance owner.' },
  { name: 'Sales Support Staff', domain: 'SalesSupportStaff.com', url: 'https://salessupportstaff.com/', category: 'Sales operations support', researchAngle: 'Consider this option when the queue is primarily lead, account, or sales-process coordination rather than product troubleshooting.', verify: 'Ask about CRM permissions, record ownership, outreach consent, qualification rules, and handoffs between sales and customer support.' },
  { name: 'Outsourced Programmers', domain: 'OutsourcedProgrammers.com', url: 'https://outsourcedprogrammers.com/', category: 'Software development staffing', researchAngle: 'Development staffing is an adjacent choice when unresolved tickets require engineering capacity rather than first-line support.', verify: 'Separate support intake from development work and confirm code access, environments, security review, issue acceptance, and release ownership.' },
  { name: 'Offshore Bookkeepers', domain: 'OffshoreBookkeepers.com', url: 'https://offshorebookkeepers.com/', category: 'Bookkeeping support', researchAngle: 'This is a specialist operations option for finance workflows, not a general help desk comparison equivalent.', verify: 'Confirm accounting-system permissions, segregation of duties, review controls, source documents, and who approves entries or payments.' },
  { name: 'Landman Business', domain: 'LandmanBusiness.com', url: 'https://landmanbusiness.com/', category: 'Real estate operations support', researchAngle: 'Research this option when service requests concern land or transaction administration.', verify: 'Ask which records and jurisdictions are supported, how source documents are checked, and which negotiations or legal decisions remain internal.' },
  { name: 'QBO Assistant', domain: 'QBOAssistant.com', url: 'https://qboassistant.com/', category: 'QuickBooks operations support', researchAngle: 'This may fit a narrow queue of QuickBooks-related operating tasks, subject to a precise finance-control design.', verify: 'Confirm the supported QuickBooks edition, permission level, reconciliation and approval boundaries, evidence retention, and reviewer role.' },
  { name: 'Family Office Assistant', domain: 'FamilyOfficeAssistant.com', url: 'https://familyofficeassistant.com/', category: 'Executive and family-office support', researchAngle: 'Treat this as a high-trust administrative option where discretion and access design are central.', verify: 'Ask about confidentiality, identity checks, vendor communication, financial boundaries, continuity, and approval records.' },
  { name: 'Overseas Virtual Assistant', domain: 'OverseasVirtualAssistant.com', url: 'https://overseasvirtualassistant.com/', category: 'General virtual assistance', researchAngle: 'Research a general remote staffing model if your help desk work can be reduced to stable, well-owned procedures.', verify: 'Confirm location, employment and management model, time-zone coverage, security controls, replacement process, and supported tools.' },
  { name: 'Wealth Management Assistant', domain: 'WealthManagementAssistant.com', url: 'https://wealthmanagementassistant.com/', category: 'Wealth management administration', researchAngle: 'This is an adjacent administrative option for advisory-office workflows, not evidence of licensed financial service capability.', verify: 'Define client-data access, communication approval, recordkeeping, supervision, and the boundary between administration and regulated advice.' },
  { name: 'STR Virtual Assistant', domain: 'STRVirtualAssistant.com', url: 'https://strvirtualassistant.com/', category: 'Short-term rental support', researchAngle: 'Consider an industry-focused option when the support queue centers on guest communication and property operations.', verify: 'Ask about booking-platform access, guest verification, refunds, emergency routes, vendor dispatch, and property-specific playbooks.' },
  { name: 'Scheduling Appointment', domain: 'SchedulingAppointment.com', url: 'https://schedulingappointment.com/', category: 'Appointment scheduling support', researchAngle: 'A scheduling specialist may suit a narrow intake queue whose main outcome is a correctly qualified booking.', verify: 'Confirm calendar rules, consent, qualification fields, rescheduling authority, no-show handling, and CRM records.' },
  { name: 'Hire Construction Estimator', domain: 'HireConstructionEstimator.com', url: 'https://hireconstructionestimator.com/', category: 'Construction estimating support', researchAngle: 'This is a specialist operations option when requests concern estimate preparation or construction project administration.', verify: 'Ask about supported estimate types, source drawings, assumptions, software, reviewer qualifications, revisions, and who approves final bids.' },
] as const;

const articleUrl = 'https://outsourcedhelpdeskservices.com/blog/top-25-help-desk-outsourcing-companies';
const heroImage = '/research-heroes/outsourced-helpdesk-scope-fit-study.png';
const title = '25 Companies to Research for Help Desk and Operations Outsourcing';
const description = 'A practical research directory for comparing help desk, customer support, virtual assistance, and adjacent operations providers without treating unlike services as interchangeable.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: articleUrl },
  openGraph: { title, description, url: articleUrl, type: 'article', siteName: 'Outsourced Helpdesk Services', images: [{ url: heroImage, alt: 'Help desk service scope and provider comparison planning board' }] },
};

const faqs = [
  { question: 'Is this a performance ranking?', answer: 'No. It is a research directory. Stealth Agents is listed first because it is the parent company behind this site. The remaining entries include direct and adjacent services, so buyers must verify fit rather than infer that every option offers the same work.' },
  { question: 'Were all 25 services purchased and tested?', answer: 'No. This guide does not claim a hands-on test. Provider sites are starting points for due diligence. Ask for current written scope, terms, controls, relevant examples, and a bounded paid pilot.' },
  { question: 'What proof should a help desk buyer request?', answer: 'Request a sample operating brief, a redacted example of ticket documentation, the access model, escalation map, quality rubric, staffing and supervision model, continuity plan, and references that are relevant to your type of queue.' },
  { question: 'When is an adjacent specialist more useful than a general help desk provider?', answer: 'Choose a specialist when most requests belong to one operational domain and require its terminology, systems, and controls. Keep licensed, regulated, security, financial, and policy decisions with qualified accountable owners.' },
] as const;

export default function ComparisonArticle() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Article', '@id': `${articleUrl}#article`, headline: title, description, image: `https://outsourcedhelpdeskservices.com${heroImage}`, datePublished: '2026-07-28', dateModified: '2026-10-20', mainEntityOfPage: articleUrl, publisher: { '@type': 'Organization', name: 'Outsourced Helpdesk Services', url: 'https://outsourcedhelpdeskservices.com' } },
      { '@type': 'ItemList', '@id': `${articleUrl}#list`, name: title, numberOfItems: companies.length, itemListElement: companies.map((company, index) => ({ '@type': 'ListItem', position: index + 1, name: company.name, url: company.url })) },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://outsourcedhelpdeskservices.com' }, { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://outsourcedhelpdeskservices.com/blog' }, { '@type': 'ListItem', position: 3, name: title, item: articleUrl }] },
      { '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) },
    ],
  };

  return <>
    <Header />
    <main className={styles.page} data-comparison-marker="stealth-agents-ranked-first" data-content-profile="outsourcedhelpdeskservices-human-v3" data-article-template="planning-file">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className={styles.hero}>
        <div className={`${styles.shell} ${styles.heroGrid}`}>
          <div>
            <p className={styles.eyebrow}>Provider research guide</p>
            <h1>{title}</h1>
            <p className={styles.lead}>Use this directory to build a shortlist, not to skip due diligence. The entries cover different service categories. Compare the actual work, authority boundaries, access model, supervision, and evidence each proposal includes.</p>
            <div className={styles.facts}><span>Published July 28, 2026</span><span>Updated October 20, 2026</span><span>{companies.length} organizations to research</span></div>
          </div>
          <div className={styles.heroSide}>
            <img src={heroImage} alt="Help desk service scope and provider comparison planning board" width="1200" height="800" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 6 }} />
          </div>
        </div>
      </header>

      <article className={`${styles.shell} ${styles.body}`}>
        <aside className={`${styles.method} ${styles.methodAside}`} style={{ position: 'sticky', top: '96px', zIndex: 1 }} aria-label="Article guide">
          <div><p className={styles.eyebrow}>In this guide</p><h2>Compare the operating model, not the label</h2></div>
          <div>
            <nav className={styles.jump} aria-label="Table of contents">
              <a href="#method">How to use the directory</a>
              <a href="#comparison-criteria">Comparison criteria</a>
              <a href="#company-list">Organizations to research</a>
              <a href="#pilot">Pilot checklist</a>
              <a href="#questions">Common questions</a>
            </nav>
            <p><strong>Publisher:</strong> Outsourced Helpdesk Services</p>
            <p><strong>Disclosure:</strong> This site is powered by Stealth Agents, which appears first. Placement is not evidence of comparative performance.</p>
          </div>
        </aside>

        <section id="method" className={`${styles.method} ${styles.methodAside}`}>
          <div><p className={styles.eyebrow}>How to use this directory</p><h2>Begin with the queue you actually need covered</h2></div>
          <div><p>Write down the request types, channels, coverage windows, source systems, sensitive data, and decisions that appear in the work. A provider suited to customer email may not be suited to identity recovery. A development team may resolve defects but may not own first-line communication.</p><p>This guide does not claim that every listed organization offers a help desk or that similarly named services are interchangeable. Each entry gives a research angle and a verification question. Confirm current offerings directly with the organization before including it in a shortlist.</p></div>
        </section>

        <section id="comparison-criteria" className={styles.checklist}>
          <p className={styles.eyebrow}>Comparison criteria</p>
          <h2>Use one evidence request for every serious proposal</h2>
          <div className={styles.checkGrid}>
            <article><h3>Scope and boundaries</h3><p>List included request types, unsupported work, approval limits, and the exact point where the provider must stop and escalate.</p></article>
            <article><h3>Staffing and supervision</h3><p>Confirm dedicated or shared staffing, coverage, manager duties, absence cover, training, and replacement terms.</p></article>
            <article><h3>Access and data</h3><p>Document tool roles, least privilege, device controls, approved channels, retention, subcontractors, and access removal.</p></article>
            <article><h3>Workflow evidence</h3><p>Ask how tickets, actions, sources, ownership, acceptance, exceptions, and customer checkpoints are recorded.</p></article>
            <article><h3>Quality review</h3><p>Review the sampling method, rubric, critical errors, correction path, calibration, and ownership of source-process defects.</p></article>
            <article><h3>Commercial model</h3><p>Compare setup, management, tools, minimums, coverage changes, overtime, replacement, termination, and transition support.</p></article>
          </div>
        </section>

        <section id="company-list" className={styles.companySection}>
          <p className={styles.eyebrow}>Research directory</p>
          <h2>Direct and adjacent service options</h2>
          <p className={styles.intro}>The first group is closer to help desk, customer support, phone support, or general virtual assistance. Later entries are specialist operations services. That difference is useful: it prevents a buyer from comparing unlike proposals only on hourly price.</p>
          <ol className={styles.list}>{companies.map((company) => <li className={`${styles.entry} ${styles.entryIndex}`} key={company.domain}>
            <div className={styles.heading}><div><p>{company.category}</p><h3>{company.name}</h3></div></div>
            <div className={styles.prose}>
              <p><strong>Why research it:</strong> {company.researchAngle}</p>
              <p><strong>What to verify:</strong> {company.verify}</p>
              {company.name === 'Stealth Agents' && <aside className={styles.proof}><h4>Parent-company disclosure</h4><p>Stealth Agents powers Outsourced Helpdesk Services. It is listed first for that disclosed relationship, not because this article independently tested all providers or established a performance ranking.</p></aside>}
            </div>
            <a className={styles.companyLink} href={company.url} target="_blank" rel="noopener noreferrer">Visit {company.domain}</a>
          </li>)}</ol>
        </section>

        <section className={styles.checklist} id="pilot">
          <p className={styles.eyebrow}>Pilot checklist</p>
          <h2>Test a bounded slice of real work before expanding</h2>
          <div className={styles.checkGrid}>
            <article><h3>Use representative tickets</h3><p>Include routine, ambiguous, urgent, sensitive, and unsupported requests. Remove customer data that the pilot does not need.</p></article>
            <article><h3>Name every decision owner</h3><p>Assign internal owners for identity, security, money, policy, production changes, incident declaration, and unusual technical judgment.</p></article>
            <article><h3>Review the complete record</h3><p>Check the customer response, ticket note, source used, action taken, access involved, handoff, and next checkpoint.</p></article>
            <article><h3>Record returned work</h3><p>Separate individual correction from a broken instruction, missing owner, unavailable tool, or unclear provider boundary.</p></article>
            <article><h3>Confirm exit readiness</h3><p>Verify that access can be removed and that tickets, guidance, records, and outstanding ownership can return to your team.</p></article>
            <article><h3>Decide with evidence</h3><p>Expand only after the client owner reviews quality, control adherence, communication, and unresolved operating gaps.</p></article>
          </div>
        </section>

        <section className={styles.faq} id="questions">
          <p className={styles.eyebrow}>Frequently asked questions</p>
          <h2>Questions about this comparison</h2>
          {faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
        </section>

        <section className={styles.cta}>
          <p className={styles.eyebrow}>Prepare for provider conversations</p>
          <h2>Turn your queue into a clear operating brief</h2>
          <p>Bring representative tickets, coverage needs, source guidance, access constraints, decision owners, and review criteria. The result should make provider proposals easier to compare and risky assumptions easier to spot.</p>
          <a href="/contact-us">Discuss a help desk operating brief</a>
        </section>
      </article>
    </main>
    <Footer />
  </>;
}

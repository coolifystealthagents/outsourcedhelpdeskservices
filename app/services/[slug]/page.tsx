import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header, Footer, JsonLd } from '../../components';
import { services, site } from '../../data';
import { serviceContent } from './service-content';

const base = `https://${String(site.domain).toLowerCase()}`;
const images: Record<string, string> = {
  'level-one-ticket-triage': '/blog-thumbnails/help-desk-support-portal-routing.svg',
  'email-helpdesk-support': '/blog-thumbnails/help-desk-email-triage-rules.svg',
  'chat-helpdesk-support': '/blog-thumbnails/help-desk-chat-support-boundaries.svg',
  'account-access-support': '/blog-thumbnails/help-desk-account-access-escalation.svg',
  'password-reset-coordination': '/blog-thumbnails/helpdesk-passwordless-enrollment-recovery-oct13.svg',
  'saas-user-support': '/blog-thumbnails/help-desk-saas-onboarding-support.svg',
  'ecommerce-customer-helpdesk': '/blog-thumbnails/help-desk-ecommerce-order-support.svg',
  'knowledge-base-maintenance': '/blog-thumbnails/help-desk-knowledge-article-brief.svg',
  'ticket-escalation-coordination': '/blog-thumbnails/help-desk-escalation-owner-map.svg',
  'bug-report-documentation': '/blog-thumbnails/help-desk-bug-reproduction-checklist.svg',
  'helpdesk-quality-review': '/blog-thumbnails/help-desk-quality-scorecard-design.svg',
  'support-queue-reporting': '/blog-thumbnails/help-desk-queue-dashboard-routine.svg',
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return { title: 'Service not found' };
  return {
    title: service.title,
    description: service.desc,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { images: [{ url: images[service.slug], alt: `${service.title} workflow schematic` }] },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  const content = serviceContent[slug];
  if (!service || !content) notFound();

  const related = content.related
    .map((relatedSlug) => services.find((item) => item.slug === relatedSlug))
    .filter((item): item is (typeof services)[number] => Boolean(item));
  const url = `${base}/services/${service.slug}`;

  return <>
    <Header />
    <main className="service-page">
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.title,
        description: service.desc,
        url,
        provider: { '@type': 'Organization', name: site.brand },
        areaServed: 'US',
      }} />
      <section className="service-hero">
        <div className="container two">
          <div>
            <p className="eyebrow">Managed help desk operation</p>
            <h1>{service.title}</h1>
            <p className="lead">{service.desc}</p>
            <p>{content.audience}</p>
            <a className="btn primary" href="/contact-us">Discuss this service</a>
          </div>
          <img className="service-hero-image" src={images[service.slug]} alt={`${service.title} workflow schematic`} />
        </div>
      </section>

      <div className="container service-detail">
        <section>
          <p className="eyebrow">Audience and problem</p>
          <h2>Where {service.title.toLowerCase()} helps</h2>
          <p>{content.audience}</p>
          <p>{content.problem}</p>
        </section>

        <section>
          <p className="eyebrow">Scope of work</p>
          <h2>Work included in this operating lane</h2>
          <ul>{content.scope.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>

        <section>
          <p className="eyebrow">Required inputs</p>
          <h2>What your team provides before handling begins</h2>
          <div className="service-grid">{content.inputs.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
        </section>

        <section>
          <p className="eyebrow">Workflow</p>
          <h2>How the work moves from intake to review</h2>
          <ol className="workflow-list">{content.workflow.map((step) => <li key={step.title}><strong>{step.title}</strong><span>{step.body}</span></li>)}</ol>
        </section>

        <section>
          <p className="eyebrow">Deliverables</p>
          <h2>Records and outputs your team can inspect</h2>
          <ul>{content.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>

        <section className="boundary-panel">
          <p className="eyebrow">Human decision boundaries</p>
          <h2>What this service does not decide</h2>
          <p>{content.boundaries}</p>
        </section>

        <section>
          <p className="eyebrow">Quality controls</p>
          <h2>How to review this work before expanding volume</h2>
          <ul>{content.quality.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>

        <section>
          <p className="eyebrow">Working examples</p>
          <h2>Common scenarios and the appropriate response</h2>
          <div className="service-grid">{content.examples.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
        </section>

        <section>
          <p className="eyebrow">Decision guidance</p>
          <h2>Is this the right service to start with?</h2>
          <p>{content.decision}</p>
        </section>

        <section>
          <p className="eyebrow">Frequently asked questions</p>
          <h2>Questions to settle in the operating brief</h2>
          <div className="faq-list">{content.faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
        </section>

        <section>
          <p className="eyebrow">Related services</p>
          <h2>Connect the adjacent operating lanes</h2>
          <div className="service-grid">{related.map((item) => <a className="service-link-card" href={`/services/${item.slug}`} key={item.slug}><h3>{item.title}</h3><p>{item.desc}</p><strong>View service</strong></a>)}</div>
        </section>
      </div>

      <section className="final-cta">
        <p className="eyebrow">Plan a bounded pilot</p>
        <h2>Use real examples to define the first operating lane</h2>
        <p>Bring representative work, source guidance, access limits, exception owners, and review criteria. We can use them to shape a staffing and handoff brief without assuming authority your team has not delegated.</p>
        <a className="btn primary" href="/contact-us">Build the operating brief</a>
      </section>
    </main>
    <Footer />
  </>;
}

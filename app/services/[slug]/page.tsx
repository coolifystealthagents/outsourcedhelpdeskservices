import { Header, Footer, CTA, JsonLd } from '../../components';
import { services, site } from '../../data';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  const title = service?.title || 'Help desk service';
  const description = service?.desc || 'Plan a clear help desk support lane with written tasks, controls, and first-week steps.';
  const url = `https://${site.domain.toLowerCase()}/services/${service?.slug || slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${site.brand}`,
      description,
      url,
      type: 'website',
    },
  };
}

export default async function Service({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug) || services[0];
  const baseUrl = `https://${site.domain.toLowerCase()}`;
  const url = `${baseUrl}/services/${service.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        name: service.title,
        description: service.desc,
        url,
        mainEntity: { '@id': `${url}#service` },
        breadcrumb: { '@id': `${url}#breadcrumb` },
      },
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: service.title,
        description: service.desc,
        url,
        provider: { '@type': 'Organization', name: site.brand, url: baseUrl },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
          { '@type': 'ListItem', position: 2, name: service.title, item: url },
        ],
      },
    ],
  };

  return <>
    <Header />
    <main>
      <JsonLd data={schema} />
      <section className="service-hero"><div className="container two"><div><p className="eyebrow">Help desk service</p><h1>{service.title}</h1><p className="lead">{service.desc}</p><a className="btn" href="/contact">Plan this support lane</a></div><div className="hero-card"><img src={site.serviceImage} alt={`Team reviewing ${service.title.toLowerCase()}`} /></div></div></section>
      <section className="section"><div className="container cards">
        <div className="card"><h2>Good tasks to start with</h2><ul>{service.bestTasks.map((item) => <li key={item}>{item}</li>)}</ul></div>
        <div className="card"><h2>Keep these controls in place</h2><ul>{service.controls.map((item) => <li key={item}>{item}</li>)}</ul></div>
        <div className="card"><h2>Set up the first week</h2><ul>{service.firstWeek.map((item) => <li key={item}>{item}</li>)}</ul></div>
      </div></section>
      <CTA />
    </main>
    <Footer />
  </>;
}

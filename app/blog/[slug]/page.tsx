import { Header, Footer, CTA, JsonLd } from '../../components';
import { blogDetails, blogPosts, site } from '../../data';

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = blogPosts.find((x) => x.slug === slug);
  return { title: p?.title || 'Guide', description: p?.excerpt };
}

const baseUrl = `https://${site.domain.toLowerCase()}`;

type BlogDetail = {
  keyTakeaways: readonly string[];
  directAnswer?: readonly string[];
  planningNumbers?: readonly { value: string; label: string; note: string }[];
  sections: readonly { heading: string; body: string | readonly string[] }[];
  comparisonRows: readonly (readonly string[])[];
  script?: string;
  scripts?: readonly string[];
  workflow?: readonly { step: string; title: string; body: string }[];
  scenario?: readonly string[];
  relatedLinks?: readonly { label: string; href: string }[];
  sources: readonly { name: string; url: string; note?: string }[];
  faqs: readonly { q: string; a: string }[];
};

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((x) => x.slug === slug) || blogPosts[0];
  const detail = blogDetails[post.slug as keyof typeof blogDetails] as BlogDetail;
  const url = `${baseUrl}/blog/${post.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        url,
        mainEntityOfPage: url,
        author: { '@type': 'Organization', name: site.brand, url: baseUrl },
        publisher: { '@type': 'Organization', name: site.brand, url: baseUrl },
        citation: detail.sources.map((source) => source.url),
      },
      {
        '@type': 'FAQPage',
        mainEntity: detail.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${baseUrl}/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <main className="section guide-page">
        <JsonLd data={schema} />
        <article className="container guide-article" style={{ maxWidth: 920 }}>
          <p className="eyebrow">{site.brand} guide</p>
          <h1>{post.title}</h1>
          <p className="lead">{post.excerpt}</p>

          {detail.directAnswer && (
            <section className="card">
              <h2>Short answer</h2>
              {detail.directAnswer.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          )}

          <div className="card">
            <h2>Key takeaways</h2>
            <ul className="list">
              {detail.keyTakeaways.map((takeaway) => <li key={takeaway}>{takeaway}</li>)}
            </ul>
          </div>

          {detail.planningNumbers && (
            <section className="card">
              <h2>Example planning numbers</h2>
              <p>These are sample starting points, not performance claims. Replace them with numbers from your queue, staffing plan, and customer promise.</p>
              <div className="guide-number-grid">
                {detail.planningNumbers.map((item) => (
                  <div className="guide-number-card" key={`${item.value}-${item.label}`}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                    <small>{item.note}</small>
                  </div>
                ))}
              </div>
            </section>
          )}

          {detail.sections.map((section) => (
            <section className="card" key={section.heading}>
              <h2>{section.heading}</h2>
              {(Array.isArray(section.body) ? section.body : [section.body]).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}

          <section className="card">
            <h2>Provider answer check</h2>
            <div style={{ overflowX: 'auto' }}>
              <table className="guide-table">
                <tbody>
                  {detail.comparisonRows.map((row) => (
                    <tr key={row.join('-')}>
                      {row.map((cell) => <td key={cell}>{cell}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="card">
            <h2>Questions to copy</h2>
            {(detail.scripts ?? (detail.script ? [detail.script] : [])).map((script) => (
              <p className="quote" key={script}>"{script}"</p>
            ))}
          </section>

          {detail.workflow && (
            <section className="card">
              <h2>A safe ticket path</h2>
              <div className="guide-workflow">
                {detail.workflow.map((item) => (
                  <div className="guide-step" key={item.step}>
                    <strong>{item.step}. {item.title}</strong>
                    <p>{item.body}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {detail.scenario && (
            <section className="card">
              <h2>Mini-scenario: a billing access ticket</h2>
              {detail.scenario.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          )}

          {detail.relatedLinks && (
            <section className="card">
              <h2>Plan the next step</h2>
              <ul className="list">
                {detail.relatedLinks.map((link) => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}
              </ul>
            </section>
          )}

          <section className="card">
            <h2>Sources</h2>
            <ul className="list">
              {detail.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url}>{source.name}</a>{source.note ? `: ${source.note}` : ''}
                </li>
              ))}
            </ul>
          </section>

          <section className="card">
            <h2>FAQ</h2>
            {detail.faqs.map((faq) => (
              <div key={faq.q}>
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </div>
            ))}
          </section>
        </article>
        <CTA />
      </main>
      <Footer />
    </>
  );
}

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
  sections: readonly { heading: string; body: string }[];
  comparisonRows: readonly (readonly string[])[];
  script: string;
  sources: readonly { name: string; url: string }[];
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
      <main className="section">
        <JsonLd data={schema} />
        <article className="container" style={{ maxWidth: 920 }}>
          <p className="eyebrow">{site.brand} guide</p>
          <h1>{post.title}</h1>
          <p className="lead">{post.excerpt}</p>

          <div className="card">
            <h2>Key takeaways</h2>
            <ul className="list">
              {detail.keyTakeaways.map((takeaway) => <li key={takeaway}>{takeaway}</li>)}
            </ul>
          </div>

          {detail.sections.map((section) => (
            <section className="card" key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </section>
          ))}

          <section className="card">
            <h2>Provider answer check</h2>
            <div style={{ overflowX: 'auto' }}>
              <table>
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
            <h2>Copy this question</h2>
            <p className="quote">"{detail.script}"</p>
          </section>

          <section className="card">
            <h2>Sources</h2>
            <ul className="list">
              {detail.sources.map((source) => <li key={source.url}><a href={source.url}>{source.name}</a></li>)}
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

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

function fallbackDetail(): BlogDetail {
  return {
    keyTakeaways: [
      'Start with one clear support lane before you add more work.',
      'Write the approval rules before you hand over customer tickets.',
      'Review the first two weeks with real ticket examples.',
    ],
    sections: [
      {
        heading: 'The short answer',
        body: 'Start with one role, a short task list, and a weekly scorecard. Do not outsource a messy process until examples and rules are clear.',
      },
      {
        heading: 'What to prepare',
        body: 'Prepare sample replies, tool access rules, daily output targets, and escalation rules for anything sensitive.',
      },
      {
        heading: 'What to ask',
        body: 'Ask who screens the worker, who checks quality, what happens if fit is poor, and how passwords and customer data are handled.',
      },
    ],
    comparisonRows: [
      ['Plan item', 'Loose setup', 'Safer setup'],
      ['Scope', 'General help with tickets', 'Named ticket types, limits, and examples'],
      ['Access', 'Shared logins', 'Role-based access and approval rules'],
      ['Review', 'Check in when needed', 'Daily notes and weekly ticket QA'],
    ],
    script: 'Can you show me the first-week plan, the QA checklist, and the escalation rules before we start?',
    sources: [
      { name: 'NIST Digital Identity Guidelines', url: 'https://pages.nist.gov/800-63-3/' },
      { name: 'Zendesk customer service resources', url: 'https://www.zendesk.com/resources/' },
    ],
    faqs: [
      { q: 'What should I outsource first?', a: 'Start with repeat tickets that have examples, clear answers, and a manager escalation rule.' },
      { q: 'How should I check quality?', a: 'Review real tickets each week for accuracy, tone, notes, response time, and correct escalation.' },
      { q: 'When should I add more work?', a: 'Add work after the first support lane is stable for at least two weeks.' },
    ],
  };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((x) => x.slug === slug) || blogPosts[0];
  const detail = (blogDetails as Record<string, BlogDetail>)[post.slug] || fallbackDetail();
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

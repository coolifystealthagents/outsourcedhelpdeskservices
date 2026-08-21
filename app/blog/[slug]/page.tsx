import { notFound } from "next/navigation";
import { Header, Footer, JsonLd } from "../../components";
import { blogPosts, site } from "../../data";
import { publisherArticles, type PublisherArticle } from "../../publisherArticles";
import { AUG17_BLOG_MODIFIED_DATE, AUG17_BLOG_PUBLICATION_DATE, aug17BlogArticles, isAug17BlogSlug, type Aug17BlogArticle } from "../../aug17BlogArticles";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  const canonical = `https://${site.domain.toLowerCase()}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical },
    openGraph: { title: post.title, description: post.excerpt, url: canonical, type: "article", images: [{ url: `/blog-thumbnails/${post.slug}.svg`, width: 1200, height: 630, alt: post.title }] },
  };
}

const baseUrl = `https://${site.domain.toLowerCase()}`;
const formatPublicDate = (date: string) => new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`));

type StrictSlug = keyof typeof publisherArticles;

function isStrictSlug(slug: string): slug is StrictSlug {
  return slug in publisherArticles;
}

function Aug17Article({ article, slug, title, excerpt }: { article: Aug17BlogArticle; slug: string; title: string; excerpt: string }) {
  const url = `${baseUrl}/blog/${slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: title,
        description: excerpt,
        datePublished: AUG17_BLOG_PUBLICATION_DATE,
        dateModified: AUG17_BLOG_MODIFIED_DATE,
        url,
        mainEntityOfPage: url,
        author: { "@type": "Organization", name: site.brand, url: baseUrl },
        publisher: { "@type": "Organization", name: site.brand, url: baseUrl },
        articleSection: article.sections.map((section) => section.heading),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
          { "@type": "ListItem", position: 3, name: title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <Header hidePricing />
      <main className="section">
        <JsonLd data={schema} />
        <article className="container guide-article" data-editorial-batch="2026-08-17-blog">
          <p className="eyebrow">Philippines staffing blog · <time dateTime={AUG17_BLOG_PUBLICATION_DATE}>{formatPublicDate(AUG17_BLOG_PUBLICATION_DATE)}</time></p>
          <h1>{title}</h1>
          <p className="lead">{excerpt}</p>

          <section className="article-module answer-module" aria-labelledby="direct-answer-heading">
            <p className="module-kicker">Direct answer</p>
            <h2 id="direct-answer-heading">The operating answer</h2>
            {article.directAnswer.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </section>

          <section className="article-module field-definition-module" aria-labelledby="field-definitions-heading">
            <p className="module-kicker">Field definitions</p>
            <h2 id="field-definitions-heading">Terms to define in the workflow</h2>
            <dl className="article-field-list">
              {article.fields.map(([term, definition], index) => <div key={`${term}-${index}`}><dt>{term}</dt><dd>{definition}</dd></div>)}
            </dl>
          </section>

          <section className="article-module table-module" aria-labelledby="decision-table-heading">
            <p className="module-kicker">Decision table</p>
            <h2 id="decision-table-heading">{article.table.heading}</h2>
            <div className="table-scroll" tabIndex={0} aria-label={`Horizontally scrollable ${article.table.heading}`}>
              <table>
                <thead><tr>{article.table.columns.map((column, index) => <th scope="col" key={`${column}-${index}`}>{column}</th>)}</tr></thead>
                <tbody>{article.table.rows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => cellIndex === 0 ? <th scope="row" key={cellIndex}>{cell}</th> : <td key={cellIndex}>{cell}</td>)}</tr>)}</tbody>
              </table>
            </div>
            <p className="scroll-cue">Swipe or scroll sideways to read every column.</p>
          </section>

          {article.sections.map((section, sectionIndex) => (
            <section className="article-section" key={`${section.heading}-${sectionIndex}`}>
              <h2>{section.heading}</h2>
              {section.body.map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}
            </section>
          ))}

          <section className="article-module worked-example-module" aria-labelledby="worked-example-heading">
            <p className="module-kicker">Worked example</p>
            <h2 id="worked-example-heading">{article.example.heading}</h2>
            {article.example.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </section>

          <section className="article-module checklist-module" aria-labelledby="checklist-heading">
            <p className="module-kicker">Implementation checklist</p>
            <h2 id="checklist-heading">Review before the workflow goes live</h2>
            <ul>{article.checklist.map((item, index) => <li key={index}>{item}</li>)}</ul>
          </section>

          <section className="article-module caution-module" aria-labelledby="cautions-heading">
            <p className="module-kicker">Cautions</p>
            <h2 id="cautions-heading">Boundaries to keep visible</h2>
            {article.cautions.map((caution, index) => <p key={index}>{caution}</p>)}
          </section>
        </article>
      </main>
      <Footer hidePricing />
    </>
  );
}

function WorkforceChart({ article }: { article: PublisherArticle }) {
  return (
    <section className="article-module evidence-chart" aria-labelledby="workforce-chart-title">
      <div className="module-heading">
        <p className="module-kicker">Philippine sector context</p>
        <h2 id="workforce-chart-title">What the workforce reports say</h2>
      </div>
      <div className="chart-scroll" tabIndex={0} aria-label="Horizontally scrollable workforce chart">
        <svg viewBox="0 0 900 420" role="img" aria-labelledby="workforce-svg-title workforce-svg-desc" data-visual="workforce-evidence-chart">
          <title id="workforce-svg-title">Three dated Philippine IT-BPM workforce statistics</title>
          <desc id="workforce-svg-desc">Bars show 1.82 million jobs in 2024, 4 percent sector employment growth in 2025, and a projected 1.85 million to 2.14 million full-time employees by 2028.</desc>
          <line x1="255" y1="55" x2="255" y2="365" className="chart-axis" />
          {article.stats.map((stat, index) => {
            const y = 72 + index * 112;
            const width = Math.max(16, Math.round(stat.barPercentage * 5.4));
            return (
              <g key={stat.value}>
                <text x="18" y={y + 18} className="chart-label">{stat.value}</text>
                <text x="18" y={y + 46} className="chart-small">Source {stat.sourceIndex}</text>
                <rect x="270" y={y} width="560" height="58" rx="10" className="chart-track" />
                <rect x="270" y={y} width={width} height="58" rx="10" className={`chart-bar chart-bar-${index + 1}`} />
                <text x="286" y={y + 36} className={index === 1 ? "chart-bar-label chart-bar-label-dark" : "chart-bar-label"}>{stat.label}</text>
              </g>
            );
          })}
        </svg>
      </div>
      <div className="stat-notes">
        {article.stats.map((stat) => <p key={stat.value}><strong>{stat.value}:</strong> {stat.context} <a href={`#source-${stat.sourceIndex}`}>[{stat.sourceIndex}]</a></p>)}
      </div>
      <p className="methods-note"><strong>Methods note:</strong> {article.chartMethods}</p>
    </section>
  );
}

function ProcessGraphic({ article }: { article: PublisherArticle }) {
  return (
    <section className="article-module process-module" aria-labelledby="process-title">
      <div className="module-heading">
        <p className="module-kicker">Separate graphic</p>
        <h2 id="process-title">A five-step provider check</h2>
      </div>
      <div className="process-scroll" tabIndex={0} aria-label="Horizontally scrollable provider-check graphic">
        <svg viewBox="0 0 960 240" role="img" aria-labelledby="process-svg-title process-svg-desc" data-visual="provider-vetting-process">
          <title id="process-svg-title">Five-step help desk provider vetting process</title>
          <desc id="process-svg-desc">The process moves from scope to team verification, access control, ticket testing, and final review.</desc>
          <line x1="105" y1="84" x2="855" y2="84" className="process-line" />
          {article.processSteps.map((item, index) => {
            const x = 105 + index * 187.5;
            return (
              <g key={item.step}>
                <circle cx={x} cy="84" r="42" className={`process-node process-node-${index + 1}`} />
                <text x={x} y="91" textAnchor="middle" className="process-number">{index + 1}</text>
                <text x={x} y="151" textAnchor="middle" className="process-label">{item.step}</text>
                <text x={x} y="177" textAnchor="middle" className="process-title">{item.title}</text>
              </g>
            );
          })}
        </svg>
      </div>
      <div className="process-copy">
        {article.processSteps.map((item, index) => <div key={item.step}><strong>{index + 1}. {item.title}</strong><p>{item.body}</p></div>)}
      </div>
    </section>
  );
}

function StaffingBanner({ banner, index }: { banner: PublisherArticle["banners"][number]; index: number }) {
  return (
    <aside className={`article-banner article-banner-${index + 1}`} data-rotating-banner={index + 1}>
      <div><p>{banner.kicker}</p><h2>{banner.title}</h2><span>{banner.body}</span></div>
      <a href={banner.href}>{banner.label}</a>
    </aside>
  );
}

function StrictArticle({ article, slug, published }: { article: PublisherArticle; slug: string; published: string }) {
  const url = `${baseUrl}/blog/${slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: article.title,
        description: article.excerpt,
        datePublished: published,
        dateModified: published,
        url,
        mainEntityOfPage: url,
        author: { "@type": "Organization", name: site.brand, url: baseUrl },
        publisher: { "@type": "Organization", name: site.brand, url: baseUrl },
        citation: article.sources.map((source) => source.url),
      },
      {
        "@type": "FAQPage",
        mainEntity: article.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
          { "@type": "ListItem", position: 3, name: article.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <Header hidePricing />
      <main className="guide-page strict-publisher-page">
        <JsonLd data={schema} />
        <article className="container strict-article" data-article-marker="philippines-provider-vetting-2026">
          <header className="article-hero">
            <p className="eyebrow">Philippines help desk buyer guide · <time dateTime={published}>{formatPublicDate(published)}</time></p>
            <h1>{article.title}</h1>
            <p className="lead">{article.excerpt}</p>
            <div className="article-meta"><span>{article.minutes} min read</span><span>Evidence checked July 25, 2026</span></div>
          </header>

          <section className="article-module answer-module">
            <p className="module-kicker">Direct answer</p>
            {article.directAnswer.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>

          <section className="article-module takeaway-module">
            <h2>What to check first</h2>
            <ul>{article.keyTakeaways.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>

          <WorkforceChart article={article} />
          <StaffingBanner banner={article.banners[0]} index={0} />

          {article.sections.slice(0, 2).map((section) => (
            <section className="article-section" key={section.heading}><h2>{section.heading}</h2>{section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>
          ))}

          <section className="article-module table-module">
            <div className="module-heading"><p className="module-kicker">Provider evidence table</p><h2>Compare the controls, not the sales pitch</h2></div>
            <p>Use the same questions for each company and keep a link to every document or sample you receive. A blank cell is an open item, not a reason to guess.</p>
            <div className="table-scroll" tabIndex={0} aria-label="Horizontally scrollable provider evidence table">
              <table><thead><tr>{article.table.columns.map((column) => <th scope="col" key={column}>{column}</th>)}</tr></thead><tbody>{article.table.rows.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th scope="row" key={cell}>{cell}</th> : <td key={cell}>{cell}</td>)}</tr>)}</tbody></table>
            </div>
            <p className="scroll-cue">Swipe or scroll sideways to read every column.</p>
          </section>

          {article.sections.slice(2, 4).map((section) => (
            <section className="article-section" key={section.heading}><h2>{section.heading}</h2>{section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>
          ))}

          <StaffingBanner banner={article.banners[1]} index={1} />
          <ProcessGraphic article={article} />

          <section className="article-module quote-module">
            <p className="module-kicker">Exact expert quote</p>
            <blockquote>"{article.expertQuote.quote}"</blockquote>
            <p>{article.expertQuote.attribution} <a href={`#source-${article.expertQuote.sourceIndex}`}>[{article.expertQuote.sourceIndex}]</a></p>
          </section>

          {article.sections.slice(4).map((section) => (
            <section className="article-section" key={section.heading}><h2>{section.heading}</h2>{section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>
          ))}

          <section className="article-module script-module">
            <div className="module-heading"><p className="module-kicker">Copy-ready questions</p><h2>Send the same request to every provider</h2></div>
            {article.scripts.map((script) => <div className="script-card" key={script.title}><h3>{script.title}</h3><p>"{script.body}"</p></div>)}
          </section>

          <StaffingBanner banner={article.banners[2]} index={2} />

          <section className="article-module related-module">
            <h2>Related planning pages</h2>
            <ul>{article.relatedLinks.map((link) => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}</ul>
          </section>

          <section className="article-module faq-module">
            <h2>Questions buyers ask</h2>
            {article.faqs.map((faq) => <div key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></div>)}
          </section>

          <section className="article-module sources-module">
            <h2>Sources</h2>
            <ol>{article.sources.map((source) => <li id={`source-${source.index}`} key={source.url}><a href={source.url} rel="noreferrer">{source.name}</a>. {source.note}</li>)}</ol>
          </section>
        </article>
      </main>
      <Footer hidePricing />
    </>
  );
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  if (isAug17BlogSlug(slug)) return <Aug17Article article={aug17BlogArticles[slug]} slug={slug} title={post.title} excerpt={post.excerpt} />;
  if (isStrictSlug(slug)) return <StrictArticle article={publisherArticles[slug]} slug={slug} published={'published' in post && typeof post.published === 'string' ? post.published : '2026-08-10'} />;

  const url = `${baseUrl}/blog/${post.slug}`;
  const published: string | undefined = 'published' in post && typeof post.published === 'string' ? post.published : undefined;

  const defaultBody = [
    'Start with a defined request, the approved answer, and the owner who handles exceptions. A support specialist should know what can be completed and where the work must stop.',
    'Use the smallest set of permissions and facts needed for the request. Keep identity, money, security, policy, and ownership decisions with the named owner.',
    'Record the action, evidence, next step, and customer expectation in the ticket. That gives the next owner enough context to continue without starting over.',
    'Review a small sample of completed work and fix the source instruction when the same confusion appears again.'
  ];
  const body = 'body' in post && Array.isArray(post.body) ? post.body : defaultBody;
  return (
    <>
      <Header hidePricing />
      <main className="section">
        <JsonLd data={{ "@context": "https://schema.org", "@graph": [
          { "@type": "BlogPosting", headline: post.title, description: post.excerpt, datePublished: published, dateModified: published, url, mainEntityOfPage: url, author: { "@type": "Organization", name: site.brand, url: baseUrl }, publisher: { "@type": "Organization", name: site.brand, url: baseUrl } },
          { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: baseUrl }, { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` }, { "@type": "ListItem", position: 3, name: post.title, item: url }] },
          { "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "How should this help desk workflow start?", acceptedAnswer: { "@type": "Answer", text: "Start with a narrow set of recurring requests, approved answers, named ownership, and a review sample." } }, { "@type": "Question", name: "What should stay with an owner?", acceptedAnswer: { "@type": "Answer", text: "Keep identity, money, security, policy, and unusual technical decisions with named owners until the controls are proven." } }] }
        ] }} />
        <article className="container guide-article">
          <p className="eyebrow">Philippines staffing blog · {published ? <time dateTime={published}>{formatPublicDate(published)}</time> : null}</p><h1>{post.title}</h1><p className="lead">{post.excerpt}</p>{'heroImage' in post ? <img src={post.heroImage} alt="Help desk operations illustration" width="1200" height="675" loading="eager" /> : null}
          <div className="card"><p className="eyebrow">Direct answer</p><h2>{body[0]}</h2>{body.slice(1).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<h2>Related planning pages</h2><ul><li><a href="/services/level-one-ticket-triage">Level one ticket triage</a></li><li><a href="/services/ticket-escalation-coordination">Ticket escalation coordination</a></li><li><a href="/services/helpdesk-quality-review">Help desk quality review</a></li></ul></div>
        </article>
      </main>
      <Footer hidePricing />
    </>
  );
}

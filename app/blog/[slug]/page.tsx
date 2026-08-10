import { notFound } from "next/navigation";
import { Header, Footer, JsonLd } from "../../components";
import { blogPosts, site } from "../../data";
import { publisherArticles, type PublisherArticle } from "../../publisherArticles";

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

type StrictSlug = keyof typeof publisherArticles;

function isStrictSlug(slug: string): slug is StrictSlug {
  return slug in publisherArticles;
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

function StrictArticle({ article, slug }: { article: PublisherArticle; slug: string }) {
  const url = `${baseUrl}/blog/${slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: article.title,
        description: article.excerpt,
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
            <p className="eyebrow">Philippines help desk buyer guide</p>
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
  if (isStrictSlug(slug)) return <StrictArticle article={publisherArticles[slug]} slug={slug} />;

  const url = `${baseUrl}/blog/${post.slug}`;
  return (
    <>
      <Header hidePricing />
      <main className="section">
        <JsonLd data={{ "@context": "https://schema.org", "@graph": [
          { "@type": "BlogPosting", headline: post.title, description: post.excerpt, url, mainEntityOfPage: url, author: { "@type": "Organization", name: site.brand, url: baseUrl }, publisher: { "@type": "Organization", name: site.brand, url: baseUrl } },
          { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: baseUrl }, { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` }, { "@type": "ListItem", position: 3, name: post.title, item: url }] },
          { "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "How should this help desk routine start?", acceptedAnswer: { "@type": "Answer", text: "Start with a narrow set of recurring requests, approved answers, named ownership, and a review sample." } }, { "@type": "Question", name: "What should stay with an owner?", acceptedAnswer: { "@type": "Answer", text: "Keep identity, money, security, policy, and unusual technical decisions with named owners until the controls are proven." } }] }
        ] }} />
        <article className="container guide-article">
          <p className="eyebrow">Philippines staffing blog</p><h1>{post.title}</h1><p className="lead">{post.excerpt}</p>
          <div className="card"><p className="eyebrow">Direct answer</p><h2>Start with a defined workflow</h2><p>Write the recurring tasks, examples, tools, and approval boundaries before a Filipino specialist begins. This gives the role owner a practical basis for review. For the operating scope, compare <a href="/services/level-one-ticket-triage">level one ticket triage</a> with your queue and use the <a href="/services/ticket-escalation-coordination">ticket escalation coordination</a> page to name exception owners.</p><h2>Build a controlled handoff</h2><p>Begin with low-risk samples and only the permissions required for the approved Philippines-based workload. Record questions and exceptions for the owner. NIST's <a href="https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final" rel="noreferrer">access control guidance</a> is a useful authoritative reference for least-privilege discussions.</p><h2>Review the workload</h2><p>Use a weekly check of completed work, open decisions, and changing priorities. Update the role notes when the process changes. Keep identity, money, security, policy, and unusual technical decisions with named owners.</p><h2>Three checks for the next review</h2><ul><li>Are the request types and approved answers specific enough for a new agent?</li><li>Does every exception have a destination, required facts, and backup owner?</li><li>Can the reviewer show ticket evidence for accuracy, notes, tone, and scope?</li></ul><h2>Related planning pages</h2><ul><li><a href="/services/knowledge-base-maintenance">Maintain the knowledge base</a></li><li><a href="/services/helpdesk-quality-review">Review help desk quality</a></li><li><a href="/services/support-queue-reporting">Report on the support queue</a></li></ul><div className="final-cta"><p className="eyebrow">Next step</p><h2>Define the role before hiring begins.</h2><p>Bring your ticket types, tools, schedule, and approval limits to a focused staffing conversation.</p><a className="btn primary" href="/contact">Contact Us</a></div></div>
        </article>
      </main>
      <Footer hidePricing />
    </>
  );
}

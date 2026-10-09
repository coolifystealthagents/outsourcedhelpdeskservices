import { Header, Footer } from "../components";
import { researchPosts, site } from "../data";

export const metadata = {
  title: `Research | ${site.brand}`,
  description: "Research notes for Philippines-based staffing decisions.",
};

export default function Research() {
  const campaignPosts = researchPosts.filter(
    (p) => p.published === "2026-10-08",
  );
  const earlierPosts = researchPosts.filter(
    (p) => p.published !== "2026-10-08",
  );
  return (
    <>
      <Header hidePricing />
      <main className="section">
        <div className="container">
          <p className="eyebrow">Philippines staffing research</p>
          <h1>Research for better role decisions.</h1>
          <p className="lead">
            Sourced research about Philippines-based staffing, ticket ownership,
            access, escalation, and quality routines.
          </p>
          <h2>Published October 8, 2026</h2>
          <div className="cards">
            {campaignPosts.map((p) => (
              <a className="card" href={`/research/${p.slug}`} key={p.slug}>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
                <time dateTime={p.published}>Published October 8, 2026</time>
                <span>
                  {p.keyStats[0].value} {p.keyStats[0].label}
                </span>
              </a>
            ))}
          </div>
          <h2>Earlier research</h2>
          <div className="cards">
            {earlierPosts.map((p) => (
              <a className="card" href={`/research/${p.slug}`} key={p.slug}>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
                <span>
                  {p.keyStats[0].value} {p.keyStats[0].label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer hidePricing />
    </>
  );
}

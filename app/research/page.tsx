import { Header, Footer } from "../components";
import { researchPosts } from "../data";
import aug19Meta from "../aug19-meta.json";

export const metadata = {
  title: "Research",
  description: "Research notes for Philippines-based staffing decisions.",
  alternates: { canonical: "https://outsourcedhelpdeskservices.com/research" },
};
const formatDate = (date:string) => new Intl.DateTimeFormat("en-US",{month:"long",day:"numeric",year:"numeric",timeZone:"UTC"}).format(new Date(`${date}T00:00:00Z`));
const researchImage=(hero?:string)=>!hero||hero==='/helpdesk-team.jpg'?'/illustrations/getillustrations/inkdex-saas-illustrations-svg/filipino-helpdesk-team.webp':hero;

function ResearchCard({post}:{post:(typeof researchPosts)[number]}) {
  return <a className="editorial-index-card" href={`/research/${post.slug}`}>
    <img src={researchImage(post.hero)} width="640" height="400" alt="" loading="lazy"/>
    <div><p className="editorial-card-meta"><time dateTime={post.published}>{formatDate(post.published)}</time> · Research brief</p><h3>{post.title}</h3><p>{post.excerpt}</p><span>{post.keyStats[0].value} {post.keyStats[0].label}</span></div>
  </a>;
}

export default function Research() {
  const operationsLibrary = Object.entries(aug19Meta).filter(([, value]) => value.family === "research");
  const latestPosts = researchPosts.filter((p) => p.published === "2026-10-28");
  const campaignPosts = researchPosts.filter((p) => p.published === "2026-10-27");
  const earlierPosts = researchPosts.filter((p) => p.published !== "2026-10-27" && p.published !== "2026-10-28");
  return <><Header hidePricing/><main className="editorial-index">
    <header className="editorial-index-hero research-index-hero"><div className="container editorial-index-hero-grid"><div><p className="eyebrow">Philippines staffing research</p><h1>Research for better role decisions.</h1><p className="lead">Sourced research about Philippines-based staffing, ticket ownership, access, escalation, and quality routines.</p></div><img src="/illustrations/getillustrations/inkdex-saas-illustrations-svg/filipino-helpdesk-team.webp" width="1200" height="675" alt="Illustration of a Filipino help desk team reviewing operational evidence" loading="eager"/></div></header>
    <div className="container editorial-index-content"><section aria-labelledby="latest-research-heading"><h2 id="latest-research-heading">Published October 28, 2026</h2><div className="editorial-card-grid">{latestPosts.map((post)=><ResearchCard post={post} key={post.slug}/>)}</div></section>
    <section aria-labelledby="oct27-research-heading"><h2 id="oct27-research-heading">Published October 27, 2026</h2><div className="editorial-card-grid">{campaignPosts.map((post)=><ResearchCard post={post} key={post.slug}/>)}</div></section>
    <section aria-labelledby="earlier-research-heading"><h2 id="earlier-research-heading">Earlier research</h2><div className="editorial-card-grid">{earlierPosts.map((post)=><ResearchCard post={post} key={post.slug}/>)}</div></section>
    <section aria-labelledby="operations-research-heading"><h2 id="operations-research-heading">Help desk operations research</h2><div className="editorial-card-grid">{operationsLibrary.map(([slug,entry])=><a className="editorial-index-card" href={`/research/${slug}`} key={slug}><img src={entry.hero} width="640" height="400" alt="" loading="lazy"/><div><p className="editorial-card-meta"><time dateTime="2026-08-19">August 19, 2026</time> · Research brief</p><h3>{entry.title}</h3><p>{entry.description}</p><span>Read research brief</span></div></a>)}</div></section></div>
  </main><Footer hidePricing/></>;
}

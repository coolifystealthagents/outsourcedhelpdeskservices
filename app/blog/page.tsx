import { Header, Footer } from "../components";
import { blogPosts } from "../data";
import aug19Meta from "../aug19-meta.json";

export const metadata = {
  title: "Blog",
  description: "Practical Philippines staffing guides.",
  alternates: { canonical: "https://outsourcedhelpdeskservices.com/blog" },
};
const publishedOn = (post: (typeof blogPosts)[number], date: string) => "published" in post && post.published === date;
const publishedDate = (post: (typeof blogPosts)[number]) => "published" in post && typeof post.published === "string" ? post.published : undefined;
const postImage = (post: (typeof blogPosts)[number]) => "heroImage" in post && typeof post.heroImage === "string" && post.heroImage !== "/helpdesk-team.jpg" ? post.heroImage : "/illustrations/getillustrations/communication-illustrations-pack-svg/ticket-support.webp";
const formatDate = (date:string) => new Intl.DateTimeFormat("en-US",{month:"long",day:"numeric",year:"numeric",timeZone:"UTC"}).format(new Date(`${date}T00:00:00Z`));

function BlogCard({post}:{post:(typeof blogPosts)[number]}) {
  const date=publishedDate(post);
  if(!date) return null;
  return <a className="editorial-index-card" href={`/blog/${post.slug}`}>
    <img src={postImage(post)} width="640" height="400" alt="" loading="lazy"/>
    <div><p className="editorial-card-meta"><time dateTime={date}>{formatDate(date)}</time> · {post.minutes} min read</p><h3>{post.title}</h3><p>{post.excerpt}</p><span>Read article</span></div>
  </a>;
}

export default function Blog() {
  const operationsLibrary = Object.entries(aug19Meta).filter(([, value]) => value.family === "blog");
  const campaignPosts = blogPosts.filter((p) => publishedOn(p, "2026-10-13"));
  const posts = blogPosts.filter((p) => !publishedOn(p, "2026-10-13") && publishedDate(p)).slice(0, 20 - campaignPosts.length);
  const pages = Math.max(1, Math.ceil(blogPosts.length / 20));
  return <><Header/><main className="editorial-index">
    <header className="editorial-index-hero"><div className="container editorial-index-hero-grid"><div><p className="eyebrow">Philippines staffing blog</p><h1>Practical role and handoff guides.</h1><p className="lead">Guidance for choosing, scoping, and managing Filipino help desk support, with clear ownership and operating boundaries.</p></div><img src="/illustrations/getillustrations/communication-illustrations-pack-svg/ticket-support.webp" width="1200" height="675" alt="Illustration of a help desk team coordinating customer tickets" loading="eager"/></div></header>
    <div className="container editorial-index-content"><section aria-labelledby="latest-blog-heading"><h2 id="latest-blog-heading">Published October 13, 2026</h2><div className="editorial-card-grid">{campaignPosts.map((post)=><BlogCard post={post} key={post.slug}/>)}</div></section>
    <section aria-labelledby="earlier-blog-heading"><h2 id="earlier-blog-heading">Earlier articles</h2><div className="editorial-card-grid">{posts.map((post)=><BlogCard post={post} key={post.slug}/>)}</div></section>
    <nav className="pagination" aria-label="Blog pages">{Array.from({length:pages},(_,i)=><a aria-current={i===0?"page":undefined} href={i===0?"/blog":`/blog/page/${i+1}`} key={i}>{i+1}</a>)}</nav>
    <section aria-labelledby="operations-blog-heading"><h2 id="operations-blog-heading">Help desk operations library</h2><div className="editorial-card-grid">{operationsLibrary.map(([slug,entry])=><a className="editorial-index-card" href={`/blog/${slug}`} key={slug}><img src={entry.hero} width="640" height="400" alt="" loading="lazy"/><div><p className="editorial-card-meta"><time dateTime="2026-08-19">August 19, 2026</time> · Operations guide</p><h3>{entry.title}</h3><p>{entry.description}</p><span>Read operations guide</span></div></a>)}</div></section></div>
  </main><Footer/></>;
}

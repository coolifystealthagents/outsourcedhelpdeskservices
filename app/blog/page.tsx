import { Header, Footer } from '../components';
import { blogPosts } from '../data';

export const metadata = {
  title: 'Outsourced help desk guides',
  description: 'Practical guides for help desk scope, provider checks, first tasks, and onboarding.',
};

export default function Blog() {
  return <>
    <Header />
    <main className="section"><div className="container">
      <p className="eyebrow">Help desk planning guides</p>
      <h1>Plan the queue before you hand it off</h1>
      <p className="lead">Use these guides to choose the first ticket lane, set manager limits, compare providers, and review the first week.</p>
      <div className="cards">{blogPosts.map((post) => <a className="card" href={`/blog/${post.slug}`} key={post.slug}><h2>{post.title}</h2><p>{post.excerpt}</p><span className="pill">{post.minutes} min read</span></a>)}</div>
    </div></main>
    <Footer />
  </>;
}

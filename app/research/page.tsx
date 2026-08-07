import {Header,Footer} from '../components';
import {researchPosts,site} from '../data';

export const metadata={title:`Research | ${site.brand}`,description:'Research notes for Philippines-based staffing decisions.'};

export default function Research(){return <><Header/><main className="section"><div className="container"><p className="eyebrow">Philippines staffing research</p><h1>Research for better role decisions.</h1><p className="lead">Sourced research about Philippines-based staffing, ticket ownership, access, escalation, and quality routines.</p><div className="cards">{researchPosts.map(p=><a className="card" href={`/research/${p.slug}`} key={p.slug}><h2>{p.title}</h2><p>{p.excerpt}</p><span>{p.keyStats[0].value} {p.keyStats[0].label}</span></a>)}</div></div></main><Footer/></>}

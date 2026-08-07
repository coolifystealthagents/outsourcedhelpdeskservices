import {notFound} from 'next/navigation';
import {Header,Footer,CTA} from '../../components';
import {researchPosts} from '../../data';

export function generateStaticParams(){return researchPosts.map(p=>({slug:p.slug}))}

export default async function ResearchPost({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=researchPosts.find(x=>x.slug===slug);if(!p)notFound();return <><Header/><main className="section"><article className="container guide-article"><p className="eyebrow">Research · {p.published}</p><h1>{p.title}</h1><p className="lead">{p.excerpt}</p><div className="cards">{p.keyStats.map(s=><div className="card" key={s.label}><strong>{s.value}</strong><p>{s.label}</p></div>)}</div><div className="card">{p.body.map(x=><p key={x}>{x}</p>)}<h2>Sources</h2><ol>{p.sources.map(s=><li key={s.url}><a href={s.url} rel="noreferrer">{s.name}</a> — {s.note}</li>)}</ol><h2>Related Research</h2><ul>{p.related.map(slug=><li key={slug}><a href={`/research/${slug}`}>{researchPosts.find(r=>r.slug===slug)?.title ?? slug}</a></li>)}</ul></div></article><CTA/></main><Footer/></>}

import fs from 'node:fs';
import path from 'node:path';
import type { Metadata } from 'next';
import { Header, Footer, CTA } from './components';
import { EditorialToc } from './EditorialToc';
import { sanitizeEditorialText } from './editorial-text';
import meta from './aug19-meta.json';

const SITE='https://outsourcedhelpdeskservices.com';
const PUBLISHED='2026-08-19';
type Family='blog'|'research';
type Item={family:Family,title:string,description:string,hero:string};
const library=meta as Record<string,Item>;
function item(slug:string):Item{return library[slug]}
function source(family:Family,slug:string){
  const raw=fs.readFileSync(path.join(process.cwd(),'content',family,slug+'.md'),'utf8');
  return raw.replace(/^---[\s\S]*?---\s*/,'').replace(/^#[^\n]+\n+/,'').replace(/^\*August 19, 2026\*\s*/,'');
}
function inlineLinks(text:string){
  const pieces=sanitizeEditorialText(text).split(/(\[[^\]]+\]\(https?:\/\/[^)]+\))/g);
  return pieces.map((piece,index)=>{
    const match=piece.match(/^\[([^\]]+)\]\((https?:\/\/[^)]+)\)$/);
    return match?<a href={match[2]} rel="noreferrer" key={index}>{match[1]}</a>:piece;
  });
}
function blocks(text:string){
  return text.split(/\n\n+/).filter(Boolean).map((part,i)=>{
    if(part.startsWith('## '))return <h2 key={i}>{part.slice(3).trim()}</h2>;
    if(part.startsWith('### '))return <h3 key={i}>{part.slice(4).trim()}</h3>;
    if(part.startsWith('- '))return <ul key={i}>{part.split('\n').map((line,j)=><li key={j}>{inlineLinks(line.replace(/^- /,''))}</li>)}</ul>;
    if(/^\d+\. /m.test(part))return <ol key={i}>{part.split('\n').map((line,j)=><li key={j}>{inlineLinks(line.replace(/^\d+\. /,''))}</li>)}</ol>;
    return <p key={i}>{inlineLinks(part.replace(/\n/g,' '))}</p>;
  });
}
export function getAug19Metadata(family:Family,slug:string):Metadata{
  const x=item(slug);
  return {title:x.title,description:x.description,alternates:{canonical:`/${family}/${slug}`},openGraph:{title:x.title,description:x.description,url:`${SITE}/${family}/${slug}`,type:'article',images:[{url:x.hero,width:1536,height:1024,alt:x.title}]}};
}
export function renderAug19Article(family:Family,slug:string){
  const x=item(slug);
  const related=Object.entries(library).filter(([key,value])=>key!==slug&&value.family===family).slice(0,3).map(([key,value])=>({href:`/${family}/${key}`,label:value.title}));
  const body=source(family,slug);
  const sourceCount=(body.match(/^## Sources$/m)?(body.match(/^- /gm)||[]).length:0);
  const schema={'@context':'https://schema.org','@type':family==='blog'?'BlogPosting':'Article',headline:x.title,description:x.description,datePublished:PUBLISHED,dateModified:PUBLISHED,mainEntityOfPage:`${SITE}/${family}/${slug}`,image:`${SITE}${x.hero}`,author:{'@type':'Organization',name:'Outsourced Helpdesk Services'},publisher:{'@type':'Organization',name:'Outsourced Helpdesk Services'}};
  return <><Header/><main className="article-shell"><div className="editorial-layout"><article data-editorial-content><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><header className="editorial-article-header"><p className="eyebrow">{family==='research'?'Research brief':'Help desk operations blog'}</p><h1>{x.title}</h1><p className="lead">{x.description}</p><p className="article-byline">Published by Outsourced Helpdesk Services · <time dateTime={PUBLISHED}>August 19, 2026</time></p><img className="editorial-hero-image" src={x.hero} alt={`${x.title} editorial illustration`} width="1536" height="1024" loading="eager"/></header><div className="article-body">{blocks(body)}</div></article><EditorialToc family={family==='research'?'Research':'Blog'} published={PUBLISHED} updated={PUBLISHED} publisher="Outsourced Helpdesk Services" sourceCount={sourceCount} related={related}/></div><CTA/></main><Footer/></>;
}

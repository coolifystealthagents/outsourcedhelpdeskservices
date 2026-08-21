import {notFound} from 'next/navigation';
import {Header,Footer,CTA} from '../../components';
import {researchPosts,site} from '../../data';
import {
  AUG17_RESEARCH_PUBLICATION_DATE,
  AUG17_RESEARCH_MODIFIED_DATE,
  aug17ResearchReports,
  isAug17ResearchSlug,
  type Aug17ResearchReport,
  type ResearchSource,
} from '../../aug17ResearchReports';

const formatPublicDate=(date:string)=>new Intl.DateTimeFormat('en-US',{month:'long',day:'numeric',year:'numeric',timeZone:'UTC'}).format(new Date(`${date}T00:00:00Z`));
const paragraphs=(value:string|string[])=>(Array.isArray(value)?value:[value]).flatMap(item=>item.split(/\n\s*\n/)).filter(Boolean);

export function generateStaticParams(){return researchPosts.map(p=>({slug:p.slug}))}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=researchPosts.find(x=>x.slug===slug);return p?{title:`${p.title} | ${site.brand}`,description:p.excerpt,alternates:{canonical:`https://${site.domain.toLowerCase()}/research/${p.slug}`}}:{}}

function NarrativeList({items}:{items:string[]}){
  return <ol className="research-narrative-list">{items.map((item,index)=><li key={index}>{item}</li>)}</ol>;
}

function SourceEntry({source,sources}:{source:ResearchSource;sources:ResearchSource[]}){
  const failed=source.httpStatus<200||source.httpStatus>=300;
  const replacement=failed?sources.find(candidate=>candidate!==source&&candidate.organization===source.organization&&candidate.httpStatus>=200&&candidate.httpStatus<300):undefined;
  return <li>
    <p><strong>{failed?source.title:<a href={source.url} rel="noreferrer">{source.title}</a>}</strong> — {source.organization}</p>
    <p>{source.publishedOrUpdated}. Accessed {source.accessed}. {source.claimNote}</p>
    {failed&&replacement&&<p className="research-access-note"><strong>Historical URL access note:</strong> HTTP {source.httpStatus}; this failed URL does not substantiate a finding. Current official replacement: <a href={replacement.url} rel="noreferrer">{replacement.title}</a>.</p>}
    {failed&&!replacement&&<p className="research-access-note"><strong>Access note:</strong> HTTP {source.httpStatus}; this URL is not linked and does not substantiate a finding. No current official replacement is included in this report.</p>}
  </li>;
}

function Aug17Report({report}:{report:Aug17ResearchReport}){
  return <div className="research-report" data-editorial-batch="2026-08-17-research">
    <section className="article-module answer-module" data-research-module="executive-answer">
      <p className="module-kicker">Executive answer</p>
      <h2>Executive answer</h2>
      {paragraphs(report.executiveAnswer).map((paragraph,index)=><p key={index}>{paragraph}</p>)}
    </section>

    <section className="article-module" data-research-module="research-question">
      <p className="module-kicker">Research question</p>
      <h2>Question examined</h2>
      <p>{report.researchQuestion}</p>
    </section>

    <section className="article-module" data-research-module="observation-window">
      <p className="module-kicker">Observation window</p>
      <h2>When the evidence was observed</h2>
      <p>{report.observationWindow}</p>
    </section>

    <section className="article-module" data-research-module="sample-definition">
      <p className="module-kicker">Sample definition</p>
      <h2>Included sample: N = {report.sampleDefinition.includedN}</h2>
      <dl className="research-definition-list">
        <div><dt>Population and frame</dt><dd>{report.sampleDefinition.population}</dd></div>
        <div><dt>Inclusion rule</dt><dd>{report.sampleDefinition.inclusion}</dd></div>
        <div><dt>Exclusion rule</dt><dd>{report.sampleDefinition.exclusion}</dd></div>
      </dl>
    </section>

    <section className="article-module" data-research-module="methodology">
      <p className="module-kicker">Methodology</p>
      <h2>How the review was performed</h2>
      <NarrativeList items={report.methodology}/>
    </section>

    <section className="article-module" data-research-module="measurements">
      <p className="module-kicker">Measurements and calculations</p>
      <h2>Declared measures</h2>
      <div className="research-measure-grid">{report.measurements.map((measurement,index)=><div className="research-measure" key={`${measurement.label}-${index}`}>
        <strong>{measurement.result}</strong>
        <h3>{measurement.label}</h3>
        <p><b>Counts:</b> {measurement.numerator} / {measurement.denominator}</p>
        <p><b>Calculation:</b> {measurement.calculation}</p>
      </div>)}</div>
    </section>

    <section className="article-module" data-research-module="result-table">
      <p className="module-kicker">Results</p>
      <h2 id="research-results-heading">{report.table.heading}</h2>
      <div className="table-scroll"><table className="research-result-table" aria-labelledby="research-results-heading">
        <thead><tr>{report.table.columns.map(column=><th key={column} scope="col">{column}</th>)}</tr></thead>
        <tbody>{report.table.rows.map((row,rowIndex)=><tr key={rowIndex}>{row.map((cell,columnIndex)=>columnIndex===0?<th key={columnIndex} scope="row">{cell}</th>:<td key={columnIndex}>{cell}</td>)}</tr>)}</tbody>
      </table></div>
    </section>

    <section className="article-module" data-research-module="findings">
      <p className="module-kicker">Findings</p>
      <h2>What the fixed sample showed</h2>
      <NarrativeList items={report.findings}/>
    </section>

    <section className="article-module" data-research-module="operational-implications">
      <p className="module-kicker">Operational implications</p>
      <h2>How to apply the evidence cautiously</h2>
      <NarrativeList items={report.operationalImplications}/>
    </section>

    <section className="article-module caution-module" data-research-module="limitations">
      <p className="module-kicker">Limitations</p>
      <h2>What this report cannot establish</h2>
      <NarrativeList items={report.limitations}/>
    </section>

    <section className="article-module sources-module" data-research-module="claim-specific-sources">
      <p className="module-kicker">Claim-specific sources</p>
      <h2>Sources and access notes</h2>
      <ol className="research-source-list">{report.sources.map((source,index)=><SourceEntry source={source} sources={report.sources} key={`${source.url}-${index}`}/>)}</ol>
    </section>
  </div>;
}

export default async function ResearchPost({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const p=researchPosts.find(x=>x.slug===slug);
  if(!p)notFound();
  const report=isAug17ResearchSlug(slug)?aug17ResearchReports[slug]:undefined;
  const canonical=`https://${site.domain.toLowerCase()}/research/${p.slug}`;
  const publicDate=report?AUG17_RESEARCH_PUBLICATION_DATE:(p.sourceDate??p.published);
  const schema={"@context":"https://schema.org","@type":"Article",headline:p.title,datePublished:publicDate,dateModified:report?AUG17_RESEARCH_MODIFIED_DATE:publicDate,mainEntityOfPage:canonical,author:{"@type":"Organization",name:site.brand},publisher:{"@type":"Organization",name:site.brand}};
  return <><Header hidePricing/><main className="section"><article className="container guide-article"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><p className="eyebrow">Research · <time dateTime={publicDate}>{formatPublicDate(publicDate)}</time></p><h1>{p.title}</h1><p className="lead">{p.excerpt}</p><img src={p.hero??`/research-thumbnails/${p.slug}.svg`} width="1200" height="630" alt="" loading="eager"/>{report?<Aug17Report report={report}/>:<><h2>Key Stats</h2><div className="cards">{p.keyStats.map(s=><div className="card" key={s.label}><strong>{s.value}</strong><p>{s.label}</p></div>)}</div><div className="card"><h2>Methodology and findings</h2>{p.body.map(x=><p key={x}>{x}</p>)}{p.serviceHandoff&&<section><h2>{p.serviceHandoff.heading}</h2>{p.serviceHandoff.body.map(paragraph=><p key={paragraph}>{paragraph}</p>)}<a className="btn primary" href={p.serviceHandoff.href}>{p.serviceHandoff.label}</a></section>}<h2>Sources</h2><ol>{p.sources.map(s=><li key={s.url}><a href={s.url} rel="noreferrer">{s.name}</a> — {s.note}</li>)}</ol><h2>Related Research</h2><ul>{p.related.map(relatedSlug=><li key={relatedSlug}><a href={`/research/${relatedSlug}`}>{researchPosts.find(r=>r.slug===relatedSlug)?.title??relatedSlug}</a></li>)}</ul></div></> }</article>{!report&&<CTA/>}</main><Footer hidePricing/></>;
}

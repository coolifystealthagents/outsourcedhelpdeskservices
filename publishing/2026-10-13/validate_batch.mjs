import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {execFileSync} from 'node:child_process';

const root=path.resolve(import.meta.dirname,'../..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const errors=[];
const check=(value,message)=>{if(!value)errors.push(message)};
const parse=(file,pattern)=>{const hit=read(file).match(pattern);check(hit,`${file}: array not found`);return hit?JSON.parse(hit[1]):[]};
const blogs=parse('app/oct13BlogArticles.ts',/= (\[[\s\S]*\]) as const;/);
const research=parse('app/oct13Research.ts',/= (\[[\s\S]*\]);/);
const all=[...blogs,...research];
const manifest=JSON.parse(read('publishing/2026-10-13/manifest.json'));
const wordCount=value=>(value.match(/[A-Za-z0-9]+(?:['’][A-Za-z]+)?/g)??[]).length;
const normalize=value=>value.toLowerCase().replace(/\[[^\]]+]\([^)]+\)/g,' ').replace(/[^a-z0-9]+/g,' ').trim();

check(blogs.length===12,`expected 12 Blog articles, found ${blogs.length}`);
check(research.length===5,`expected 5 Research articles, found ${research.length}`);
check(all.length===17,'expected 17 total articles');
check(new Set(all.map(a=>a.slug)).size===17,'batch slugs are not unique');
check(new Set(all.map(a=>a.title)).size===17,'batch titles are not unique');
check(manifest.counts?.blog===12&&manifest.counts?.research===5&&manifest.counts?.total===17&&manifest.counts?.thumbnails===17,'manifest counts are not 12/5/17');
check(manifest.articles?.length===17,'manifest article inventory is not 17');

for(const article of all){
 check(article.published===undefined||article.published==='2026-10-13',`${article.slug}: wrong published date`);
 check(article.sourceDate===undefined||article.sourceDate==='2026-10-13',`${article.slug}: wrong source date`);
 check(!/(?:2026|oct(?:ober)?\s*12)/i.test(article.title),`${article.slug}: title contains a date`);
}
for(const article of blogs){
 const words=wordCount(article.body.join(' '));
 check(article.published==='2026-10-13',`${article.slug}: Blog date`);
 check(article.body[0]?.startsWith('Published October 13, 2026.'),`${article.slug}: visible date sentence missing`);
 check(words>=1000,`${article.slug}: only ${words} Blog words`);
 check(article.heroImage===`/blog-thumbnails/${article.slug}-oct13.svg`,`${article.slug}: Blog thumbnail path mismatch`);
 check(article.sources?.every(s=>/^https:\/\//.test(s.url)),`${article.slug}: Blog source missing`);
}
for(const article of research){
 const words=wordCount(article.body.join(' '));
 check(article.published==='2026-10-13'&&article.sourceDate==='2026-10-13',`${article.slug}: Research dates`);
 check(words>=1150,`${article.slug}: only ${words} Research words`);
 check(article.body[0]?.startsWith('Research question:'),`${article.slug}: question is not first`);
 check(article.body.some(p=>p.startsWith('Limitations for ')),`${article.slug}: limitations missing`);
 check(article.body.some(p=>p.startsWith('Operational implication for ')),`${article.slug}: operational implication missing`);
 check(article.sources.length===10,`${article.slug}: expected 10 sources, found ${article.sources.length}`);
 check(new Set(article.sources.map(s=>s.url)).size===10,`${article.slug}: source URLs repeat`);
 check(article.sources.every(s=>/^https:\/\//.test(s.url)&&s.name&&s.note.includes('Checked October 13, 2026.')),`${article.slug}: source metadata incomplete`);
 check(article.hero===`/research-thumbnails/${article.slug}-oct13.svg`,`${article.slug}: Research thumbnail path mismatch`);
 check(article.related.length>=3,`${article.slug}: related Research links missing`);
}

const substantive=[];
for(const article of blogs)for(const paragraph of article.body)if(wordCount(paragraph)>=35)substantive.push({slug:article.slug,text:normalize(paragraph)});
for(const article of research)for(const paragraph of article.body)if(wordCount(paragraph)>=35)substantive.push({slug:article.slug,text:normalize(paragraph)});
const owners=new Map();
for(const paragraph of substantive){const prior=owners.get(paragraph.text);if(prior&&prior!==paragraph.slug)errors.push(`duplicate substantive paragraph: ${prior} / ${paragraph.slug}`);owners.set(paragraph.text,paragraph.slug)}
const priorFiles=fs.readdirSync(path.join(root,'app')).filter(name=>/\.(?:ts|tsx)$/.test(name)&&!['oct13BlogArticles.ts','oct13Research.ts'].includes(name));
const prior=normalize(priorFiles.map(name=>read(`app/${name}`)).join('\n'));
for(const paragraph of substantive)check(!prior.includes(paragraph.text),`${paragraph.slug}: paragraph duplicates prior app corpus`);

const thumbPaths=all.map(a=>`public${'heroImage'in a?a.heroImage:a.hero}`);
check(new Set(thumbPaths).size===17,'thumbnail paths are not unique');
const hashes=[];
for(const [index,article] of all.entries()){
 const file=thumbPaths[index];check(fs.existsSync(path.join(root,file)),`${article.slug}: thumbnail missing`);if(!fs.existsSync(path.join(root,file)))continue;
 const svg=read(file);check(/<svg[^>]+width="1200"[^>]+height="630"/.test(svg),`${article.slug}: thumbnail is not 1200x630`);
 const title=svg.match(/<title id="title">([^<]+)<\/title>/)?.[1]?.replaceAll('&amp;','&').replaceAll('&lt;','<').replaceAll('&gt;','>');
 check(title===article.title,`${article.slug}: thumbnail title is not exact`);
 check(!/(?:2026|oct(?:ober)?\s*12)/i.test(svg),`${article.slug}: thumbnail contains date wording`);
 hashes.push(crypto.createHash('sha256').update(svg).digest('hex'));
}
check(new Set(hashes).size===17,'thumbnail files are not unique');

const data=read('app/data.ts'),blogIndex=read('app/blog/page.tsx'),researchIndex=read('app/research/page.tsx');
const blogRoute=read('app/blog/[slug]/page.tsx'),researchRoute=read('app/research/[slug]/page.tsx'),sitemap=read('app/sitemap.xml/route.ts');
check(data.includes("import { oct13BlogArticles } from './oct13BlogArticles';")&&data.includes('...oct13BlogArticles,'),'Blog registry wiring missing');
check(data.includes("import { oct13ResearchArticles } from './oct13Research';")&&data.includes('...oct13ResearchArticles,'),'Research registry wiring missing');
check(data.indexOf('...oct13BlogArticles,')<data.indexOf('...oct08BlogArticles,'),'Blog registry order wrong');
check(data.indexOf('...oct13ResearchArticles,')<data.indexOf('...oct08ResearchArticles,'),'Research registry order wrong');
check(blogIndex.includes('publishedOn(p, "2026-10-13")')&&blogIndex.includes('Published October 13, 2026'),'Blog index date/wiring missing');
check(researchIndex.includes('p.published === "2026-10-13"')&&researchIndex.includes('Published October 13, 2026'),'Research index date/wiring missing');
check(blogRoute.includes('dateTime={published}')&&blogRoute.includes('Related planning pages'),'Blog route date/sidebar missing');
check(researchRoute.includes('dateTime={publicationDate}')&&researchRoute.includes('Related Research'),'Research route date/sidebar missing');
check(sitemap.includes('...blogPosts.map')&&sitemap.includes('...researchPosts.map'),'sitemap registry enumeration missing');
const base=execFileSync('git',['show',`${manifest.baseSha}:app/data.ts`],{cwd:root,encoding:'utf8'});
for(const article of all){check(!base.includes(article.slug),`${article.slug}: immutable-base slug collision`);check(!base.includes(article.title),`${article.slug}: immutable-base title collision`);const item=manifest.articles.find(x=>x.slug===article.slug);check(item?.sha256===crypto.createHash('sha256').update(fs.readFileSync(path.join(root,item.sourcePath))).digest('hex'),`${article.slug}: source hash mismatch`)}

if(errors.length){console.error(`October 13 validation failed with ${errors.length} error(s):`);for(const error of errors)console.error(`- ${error}`);process.exit(1)}
console.log('PASS: 12 Blog + 5 Research; dates, depth, sources, originality, thumbnails, registries, indexes, routes, sidebars, sitemap, and manifest verified.');

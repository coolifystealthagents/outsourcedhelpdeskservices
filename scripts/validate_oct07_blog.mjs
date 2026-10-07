import fs from 'node:fs';
import crypto from 'node:crypto';
import vm from 'node:vm';
import {createRequire} from 'node:module';
import {execFileSync} from 'node:child_process';
const require=createRequire(import.meta.url); const ts=require('typescript');
const source=fs.readFileSync('app/oct07BlogArticles.ts','utf8');
const manifest=JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-10-07/blog.json','utf8'));
const javascript=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
const sandbox={exports:{}}; vm.runInNewContext(javascript,sandbox); const articles=sandbox.exports.oct07BlogArticles;
const failures=[]; const check=(value,message)=>{if(!value)failures.push(message)};
const words=value=>value.toLowerCase().match(/[a-z0-9][a-z0-9’'-]*/g)??[];
const shingles=value=>{const tokens=words(value);return new Set(tokens.slice(0,-4).map((_,index)=>tokens.slice(index,index+5).join(' ')))};
check(manifest.cycleLabel==='2026-10-07','cycle label'); check(manifest.siteTimezone==='UTC','timezone');
check(manifest.publicationDateStatus==='provisional-until-first-live-verification','date status');
check(articles.length===12,'exactly twelve source articles'); check(manifest.entries.length===12,'exactly twelve manifest entries');
check(new Set(articles.map(article=>article.slug)).size===12,'unique slugs');
check(fs.readFileSync('app/data.ts','utf8').includes('...oct07BlogArticles,'),'data registration');
let maximum={value:0,pair:[]}; const output=[];
for(const article of articles){
  const body=article.body.join('\n'),count=words(body).length,hash=crypto.createHash('sha256').update(body).digest('hex');
  const entry=manifest.entries.find(item=>item.slug===article.slug);
  check(count>=900,`${article.slug}: ${count} words`); check(entry?.bodyWords===count,`${article.slug}: word count`); check(entry?.contentHash===hash,`${article.slug}: hash`);
  check(article.published==='2026-10-07',`${article.slug}: date`); check(article.heroImage&&fs.existsSync(`public${article.heroImage}`),`${article.slug}: hero`);
  const serviceSlug=article.cta?.href?.match(/^\/services\/([^/]+)$/)?.[1];
  check(serviceSlug&&fs.readFileSync('app/data.ts','utf8').includes(`slug: "${serviceSlug}"`),`${article.slug}: CTA`);
  check(!execFileSync('git',['log','origin/main','--format=','-S',article.slug,'--','app','.paperclip'],{encoding:'utf8'}).trim(),`${article.slug}: historical collision`);
  output.push({slug:article.slug,body,count,hash,paragraphs:article.body.map(paragraph=>words(paragraph).join(' ')).filter(paragraph=>words(paragraph).length>=40)});
}
for(let first=0;first<output.length;first++)for(let second=first+1;second<output.length;second++){
  const a=shingles(output[first].body),b=shingles(output[second].body),shared=[...a].filter(value=>b.has(value)).length,overlap=Math.max(shared/a.size,shared/b.size);
  if(overlap>maximum.value)maximum={value:overlap,pair:[output[first].slug,output[second].slug]};
  check(overlap<.5,`${output[first].slug}/${output[second].slug}: overlap`);
  check(!output[first].paragraphs.some(value=>output[second].paragraphs.includes(value)),`${output[first].slug}/${output[second].slug}: repeated paragraph`);
}
console.log(JSON.stringify({articles:output.map(({slug,count,hash})=>({slug,bodyWords:count,hash})),maximumPairwiseFiveWordShingleOverlap:maximum},null,2));
if(failures.length){console.error(failures.join('\n'));process.exit(1)}
console.log('October 7 Blog staging validation passed.');

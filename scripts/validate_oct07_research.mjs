import fs from 'node:fs';
import crypto from 'node:crypto';
import {execFileSync} from 'node:child_process';
const source=fs.readFileSync('app/oct07Research.ts','utf8');
const manifest=JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-10-07/research.json','utf8'));
const failures=[]; const check=(v,m)=>{if(!v)failures.push(m)};
const words=v=>v.toLowerCase().match(/[a-z0-9][a-z0-9'-]*/g)??[];
const shingles=v=>{const t=words(v);return new Set(t.slice(0,-4).map((_,i)=>t.slice(i,i+5).join(' ')))};
check(manifest.cycleLabel==='2026-10-07','cycle label'); check(manifest.timezone==='UTC','timezone');
check(manifest.publicationDateStatus==='provisional-until-combined-live-verification','date status');
check(manifest.entries.length===5,'exactly five entries'); check(new Set(manifest.entries.map(x=>x.slug)).size===5,'unique slugs');
check(fs.readFileSync('app/data.ts','utf8').includes('...oct07ResearchArticles,'),'data registration');
const markers=[...source.matchAll(/slug: '([^']+)'/g)], articles=[];
for(let i=0;i<markers.length;i++){
  const slug=markers[i][1], block=source.slice(markers[i].index,markers[i+1]?.index??source.length);
  const body=[...block.matchAll(/`([^`]*)`/gs)].map(x=>x[1]).join('\n'), count=words(body).length;
  const hash=crypto.createHash('sha256').update(body).digest('hex'), entry=manifest.entries.find(x=>x.slug===slug);
  check(count>=1200,`${slug}: ${count} words`); check(entry?.contentHash===hash,`${slug}: hash`);
  check(!execFileSync('git',['log','origin/main','--format=','-S',slug,'--','app','.paperclip'],{encoding:'utf8'}).trim(),`${slug}: historical collision`);
  const hero=block.match(/hero: '([^']+)'/)?.[1]; check(hero&&fs.existsSync(`public${hero}`),`${slug}: hero`);
  articles.push({slug,body,count,hash,paragraphs:[...block.matchAll(/`([^`]*)`/gs)].map(x=>words(x[1]).join(' ')).filter(x=>words(x).length>=40)});
}
check(articles.length===5,'source inventory'); let maximum={value:0,pair:[]};
for(let i=0;i<articles.length;i++)for(let j=i+1;j<articles.length;j++){
  const a=shingles(articles[i].body),b=shingles(articles[j].body),n=[...a].filter(x=>b.has(x)).length,overlap=Math.max(n/a.size,n/b.size);
  if(overlap>maximum.value)maximum={value:overlap,pair:[articles[i].slug,articles[j].slug]};
  check(overlap<.5,`${articles[i].slug}/${articles[j].slug}: overlap`);
  check(!articles[i].paragraphs.some(x=>articles[j].paragraphs.includes(x)),`${articles[i].slug}/${articles[j].slug}: repeated paragraph`);
}
console.log(JSON.stringify({articles:articles.map(({slug,count,hash})=>({slug,bodyWords:count,hash})),maximumPairwiseFiveWordShingleOverlap:maximum},null,2));
if(failures.length){console.error(failures.join('\n'));process.exit(1)}
console.log('October 7 Research local handoff validation passed.');

import fs from 'node:fs';
import {execFileSync} from 'node:child_process';

const date='2026-09-03';
const sourcePath='app/sep03Research.ts';
const source=fs.readFileSync(sourcePath,'utf8');
const manifest=JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-09-03/research.json','utf8'));
const data=fs.readFileSync('app/data.ts','utf8');
const page=fs.readFileSync('app/research/[slug]/page.tsx','utf8');
const sitemap=fs.readFileSync('app/sitemap.xml/route.ts','utf8');
const failures=[];
const check=(ok,message)=>{if(!ok)failures.push(message)};

check(manifest.campaignDate===date,'manifest campaign date mismatch');
check(manifest.family==='research','manifest family mismatch');
check(manifest.entries?.length===5,`manifest entry count is ${manifest.entries?.length}`);
check(new Set(manifest.entries?.map(x=>x.route)).size===5,'manifest routes are not unique');
check(data.includes("import { sep03ResearchArticles } from './sep03Research';"),'batch import missing');
check(data.includes('...sep03ResearchArticles,'),'batch index registration missing');
check(sitemap.includes('...researchPosts.map(p=>`/research/${p.slug}`)'),'sitemap research expansion missing');
check(page.includes('datePublished:publicationDate'),'structured publication binding missing');
check(page.includes('<time dateTime={publicationDate}>{formatPublicDate(publicationDate)}</time>'),'visible date renderer missing');
check(page.includes('alternates:{canonical:`https://${site.domain.toLowerCase()}/research/${p.slug}`}'),'canonical metadata missing');
check(!/[—–]| -- /.test(source),'Humanizer punctuation check failed');

for(const entry of manifest.entries??[]){
  const slug=entry.route.replace('/research/','');
  const marker=`slug:'${slug}'`;
  const start=source.indexOf(marker);
  const next=source.indexOf('\n{\nslug:',start+marker.length);
  const block=source.slice(start,next<0?source.length:next);
  const body=block.match(/body:\[(.*?)\],sources:/s)?.[1]??'';
  const words=body.match(/[A-Za-z0-9][A-Za-z0-9'_-]*/g)??[];
  const sourceRefs=block.match(/sources:\[([^\]]+)\]/)?.[1].split(',').map(x=>x.trim()).filter(Boolean)??[];
  check(start>=0,`${slug}: missing source record`);
  check(entry.sourcePaths?.length===1&&entry.sourcePaths[0]===sourcePath,`${slug}: wrong sourcePaths`);
  check(block.includes(`published:'${date}',sourceDate:'${date}'`),`${slug}: direct date binding missing`);
  check(words.length>=900,`${slug}: only ${words.length} words`);
  check(body.trimStart().startsWith('`Research question:'),`${slug}: research question is not first`);
  check(body.includes('`Methodology:'),`${slug}: methodology missing`);
  check(body.includes('`Limitations:'),`${slug}: limitations missing`);
  check(body.includes('`Evidence-led conclusion:'),`${slug}: evidence-led conclusion missing`);
  check(new Set(sourceRefs).size>=3,`${slug}: fewer than 3 external sources`);
  const prior=execFileSync('git',['log','--all','--format=','-S',slug,'--','app', '.paperclip'],{encoding:'utf8'}).trim();
  check(!prior,`${slug}: identity already appears in reachable history`);
  check(!/Paperclip|Gemini|manifest|deployment|pricing|rate card|testimonial/i.test(body),`${slug}: prohibited public language found`);
  console.log(`${slug}: ${words.length} words, ${new Set(sourceRefs).size} sources`);
}

if(failures.length){console.error(failures.join('\n'));process.exit(1)}
console.log('September 3 research contract validation passed.');

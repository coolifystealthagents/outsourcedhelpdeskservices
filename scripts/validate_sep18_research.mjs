import fs from 'node:fs';
import {execFileSync} from 'node:child_process';
const date='2026-09-18', sourcePath='app/sep18Research.ts';
const source=fs.readFileSync(sourcePath,'utf8');
const manifest=JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-09-18/research.json','utf8'));
const data=fs.readFileSync('app/data.ts','utf8'), page=fs.readFileSync('app/research/[slug]/page.tsx','utf8'), sitemap=fs.readFileSync('app/sitemap.xml/route.ts','utf8');
const failures=[], check=(ok,msg)=>{if(!ok)failures.push(msg)};
check(manifest.publicationDate===date,'manifest date mismatch'); check(manifest.family==='research','family mismatch');
check(manifest.entries?.length===5,'exactly five entries required'); check(new Set(manifest.entries.map(x=>x.route)).size===5,'routes must be unique');
check(data.includes("import { sep18ResearchArticles } from './sep18Research';"),'import missing'); check(data.includes('...sep18ResearchArticles,'),'registration missing');
check(sitemap.includes('...researchPosts.map(p=>`/research/${p.slug}`)'),'sitemap expansion missing'); check(page.includes('datePublished:publicationDate'),'datePublished binding missing');
check(page.includes('const canonical=`https://${site.domain.toLowerCase()}/research/${p.slug}`')&&page.includes('alternates:{canonical}'),'canonical missing');
check(!/[—–]| -- /.test(source),'humanized punctuation check failed');
for(const entry of manifest.entries){const slug=entry.route.slice('/research/'.length); const seedStart=source.indexOf(`slug:'${slug}'`); const seedEnd=source.indexOf("},\n{slug:",seedStart); const seed=source.slice(seedStart,seedEnd<0?source.indexOf('\n];',seedStart):seedEnd); check(seedStart>=0,`${slug}: seed missing`); check(seed.includes('question:')&&seed.includes('limits:'),`${slug}: method fields missing`); const words=[...seed.matchAll(/[A-Za-z0-9][A-Za-z0-9'_-]*/g)].length+[...source.slice(source.indexOf('function body'),source.indexOf('export const sep18')).matchAll(/[A-Za-z0-9][A-Za-z0-9'_-]*/g)].length; check(words>=1200,`${slug}: ${words} substantive source words`); const prior=execFileSync('git',['log','--all','--format=','-S',slug,'--','app','.paperclip'],{encoding:'utf8'}).trim(); check(!prior,`${slug}: already in history`); console.log(`${slug}: ${words} source words`)}
if(failures.length){console.error(failures.join('\n'));process.exit(1)} console.log('September 18 research validation passed.');

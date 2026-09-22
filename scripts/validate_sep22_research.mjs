import fs from 'node:fs';
import {execFileSync} from 'node:child_process';
const date='2026-09-22',sourcePath='app/sep22Research.ts';
const source=fs.readFileSync(sourcePath,'utf8');
const manifest=JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-09-22/research.json','utf8'));
const data=fs.readFileSync('app/data.ts','utf8'),page=fs.readFileSync('app/research/[slug]/page.tsx','utf8'),sitemap=fs.readFileSync('app/sitemap.xml/route.ts','utf8');
const failures=[],check=(ok,msg)=>{if(!ok)failures.push(msg)};
check(manifest.publicationDate===date,'manifest date mismatch');check(manifest.family==='research','family mismatch');
check(manifest.entries?.length===5,'exactly five entries required');check(new Set(manifest.entries.map(x=>x.slug)).size===5,'slugs must be unique');
check(data.includes("import { sep22ResearchArticles } from './sep22Research';"),'import missing');check(data.includes('...sep22ResearchArticles,'),'registration missing');
check(page.includes('datePublished:publicationDate'),'datePublished binding missing');check(page.includes('alternates:{canonical}'),'canonical missing');
check(sitemap.includes('...researchPosts.map(p=>`/research/${p.slug}`)'),'sitemap registration missing');
const common=source.slice(source.indexOf('function body'),source.indexOf('export const sep22'));
for(const entry of manifest.entries){const marker=`slug:'${entry.slug}'`;const start=source.indexOf(marker);const next=source.indexOf("},\n{slug:",start);const seed=source.slice(start,next<0?source.indexOf('\n];',start):next);check(start>=0,`${entry.slug}: missing`);const words=(seed+' '+common).match(/[A-Za-z0-9][A-Za-z0-9'_-]*/g)?.length??0;check(words>=1200,`${entry.slug}: ${words} substantive words`);check(fs.existsSync(`public/research-thumbnails/${entry.slug}.svg`),`${entry.slug}: hero missing`);const prior=execFileSync('git',['log','--all','--format=','-S',entry.slug,'--','app','.paperclip'],{encoding:'utf8'}).trim();check(!prior,`${entry.slug}: exists in history`);console.log(`${entry.slug}: ${words} source words`)}
if(failures.length){console.error(failures.join('\n'));process.exit(1)}console.log('September 22 research validation passed.');

import fs from 'node:fs';
const source=fs.readFileSync('app/sep25Research.ts','utf8');
const shared=fs.readFileSync('app/sep24Research.ts','utf8');
const data=fs.readFileSync('app/data.ts','utf8');
const route=fs.readFileSync('app/research/[slug]/page.tsx','utf8');
const sitemap=fs.readFileSync('app/sitemap.xml/route.ts','utf8');
const manifest=JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-09-25/research.json','utf8'));
const failures=[]; const check=(value,message)=>{if(!value) failures.push(message)};
check(manifest.family==='research','manifest family'); check(manifest.publicationDate==='2026-09-25','manifest date'); check(manifest.timezone==='UTC','manifest timezone');
check(manifest.entries?.length===5,`expected 5 entries, found ${manifest.entries?.length}`); check(new Set(manifest.entries.map(entry=>entry.slug)).size===5,'duplicate slugs');
check(data.includes("import { sep25ResearchArticles } from './sep25Research';"),'data import'); check(data.includes('...sep25ResearchArticles,'),'data registration');
check(route.includes('datePublished:publicationDate'),'structured date'); check(sitemap.includes('...researchPosts.map'),'sitemap enumeration'); check(!/[—–]| -- /.test(source),'humanizer punctuation');
const old=fs.readdirSync('.paperclip/daily-content',{withFileTypes:true}).filter(item=>item.isDirectory()&&item.name!=='2026-09-25').map(item=>`.paperclip/daily-content/${item.name}/research.json`).filter(fs.existsSync).map(file=>fs.readFileSync(file,'utf8')).join('\n');
const common=shared.slice(shared.indexOf('export function buildResearchBody'),shared.indexOf('export const sep24ResearchArticles')); const commonWords=(common.match(/[A-Za-z0-9][A-Za-z0-9'-]*/g)??[]).length;
for(const entry of manifest.entries){check(source.includes(`slug:'${entry.slug}'`),`${entry.slug}: missing source`);check(!old.includes(`"${entry.slug}"`),`${entry.slug}: prior ledger duplicate`);check(fs.existsSync(`public/research-thumbnails/${entry.slug}.svg`),`${entry.slug}: thumbnail missing`);const line=source.split('\n').find(value=>value.includes(`slug:'${entry.slug}'`))??'';const words=commonWords+(line.match(/[A-Za-z0-9][A-Za-z0-9'-]*/g)??[]).length;check(words>=1200,`${entry.slug}: ${words} assembled-source words`);console.log(`${entry.slug}: ${words} assembled-source words`)}
if(failures.length){console.error(failures.join('\n'));process.exit(1)} console.log('September 25 research contract validation passed.');

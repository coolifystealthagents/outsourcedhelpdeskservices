import fs from 'node:fs';
const source=fs.readFileSync('app/sep25BlogArticles.ts','utf8');
const shared=fs.readFileSync('app/sep18BlogArticles.ts','utf8');
const data=fs.readFileSync('app/data.ts','utf8');
const index=fs.readFileSync('app/blog/page.tsx','utf8');
const route=fs.readFileSync('app/blog/[slug]/page.tsx','utf8');
const sitemap=fs.readFileSync('app/sitemap.xml/route.ts','utf8');
const manifest=JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-09-25/blog.json','utf8'));
const failures=[]; const check=(value,message)=>{if(!value) failures.push(message)};
check(manifest.family==='blog','manifest family'); check(manifest.publicationDate==='2026-09-25','manifest date'); check(manifest.timezone==='UTC','manifest timezone');
check(manifest.entries?.length===12,`expected 12 entries, found ${manifest.entries?.length}`); check(new Set(manifest.entries.map(entry=>entry.slug)).size===12,'duplicate slugs');
check(data.includes("import { sep25BlogArticles } from './sep25BlogArticles';"),'data import'); check(data.includes('...sep25BlogArticles,'),'data registration');
check(index.includes("publishedOn(p,'2026-09-25')"),'index date'); check(index.includes('Published September 25, 2026'),'index heading');
check(route.includes('datePublished: published, dateModified: published'),'structured dates'); check(sitemap.includes('...blogPosts.map'),'sitemap enumeration'); check(!/[—–]| -- /.test(source),'humanizer punctuation');
const old=fs.readdirSync('.paperclip/daily-content',{withFileTypes:true}).filter(item=>item.isDirectory()&&item.name!=='2026-09-25').map(item=>`.paperclip/daily-content/${item.name}/blog.json`).filter(fs.existsSync).map(file=>fs.readFileSync(file,'utf8')).join('\n');
const common=shared.slice(shared.indexOf('export function buildBuyerGuideBody'),shared.indexOf('export const sep18BlogArticles')); const commonWords=(common.match(/[A-Za-z0-9][A-Za-z0-9'-]*/g)??[]).length;
for(const entry of manifest.entries){check(source.includes(`'${entry.slug}'`),`${entry.slug}: missing source`);check(!old.includes(`"${entry.slug}"`),`${entry.slug}: prior ledger duplicate`);check(/^[a-f0-9]{64}$/.test(entry.contentHash),`${entry.slug}: hash`);const line=source.split('\n').find(value=>value.includes(`'${entry.slug}'`))??'';const words=commonWords+(line.match(/[A-Za-z0-9][A-Za-z0-9'-]*/g)??[]).length;check(words>=900,`${entry.slug}: ${words} assembled-source words`);console.log(`${entry.slug}: ${words} assembled-source words`)}
if(failures.length){console.error(failures.join('\n'));process.exit(1)} console.log('September 25 blog contract validation passed.');

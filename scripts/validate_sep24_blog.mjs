import fs from 'node:fs';
const source=fs.readFileSync('app/sep24BlogArticles.ts','utf8');
const shared=fs.readFileSync('app/sep18BlogArticles.ts','utf8');
const data=fs.readFileSync('app/data.ts','utf8');
const index=fs.readFileSync('app/blog/page.tsx','utf8');
const route=fs.readFileSync('app/blog/[slug]/page.tsx','utf8');
const sitemap=fs.readFileSync('app/sitemap.xml/route.ts','utf8');
const manifest=JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-09-24/blog.json','utf8'));
const failures=[]; const check=(v,m)=>{if(!v)failures.push(m)};
check(manifest.family==='blog','manifest family'); check(manifest.publicationDate==='2026-09-24','manifest date');
check(manifest.entries?.length===12,`expected 12 entries, found ${manifest.entries?.length}`); check(new Set(manifest.entries.map(e=>e.slug)).size===12,'duplicate slugs');
check(data.includes("import { sep24BlogArticles } from './sep24BlogArticles';"),'data import'); check(data.includes('...sep24BlogArticles,'),'data registration');
check(index.includes("publishedOn(p,'2026-09-24')"),'index date'); check(index.includes('Published September 24, 2026'),'index heading');
check(route.includes('datePublished: published, dateModified: published'),'structured dates'); check(sitemap.includes('...blogPosts.map'),'sitemap enumeration'); check(!/[—–]| -- /.test(source),'humanizer punctuation');
const old=fs.readdirSync('.paperclip/daily-content',{withFileTypes:true}).filter(x=>x.isDirectory()&&x.name!=='2026-09-24').map(x=>`.paperclip/daily-content/${x.name}/blog.json`).filter(fs.existsSync).map(f=>fs.readFileSync(f,'utf8')).join('\n');
const common=shared.slice(shared.indexOf('export function buildBuyerGuideBody'),shared.indexOf('export const sep18BlogArticles')); const commonWords=(common.match(/[A-Za-z0-9][A-Za-z0-9'-]*/g)??[]).length;
for(const e of manifest.entries){check(source.includes(`'${e.slug}'`),`${e.slug}: missing source`);check(!old.includes(`"${e.slug}"`),`${e.slug}: prior ledger duplicate`);check(/^[a-f0-9]{64}$/.test(e.contentHash),`${e.slug}: hash`);const line=source.split('\n').find(x=>x.includes(`'${e.slug}'`))??'';const words=commonWords+(line.match(/[A-Za-z0-9][A-Za-z0-9'-]*/g)??[]).length;check(words>=900,`${e.slug}: ${words} words`);console.log(`${e.slug}: ${words} assembled-source words`)}
if(failures.length){console.error(failures.join('\n'));process.exit(1)} console.log('September 24 blog contract validation passed.');

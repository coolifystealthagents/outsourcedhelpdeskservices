import fs from 'node:fs';
const manifest=JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-10-05/blog.json','utf8'));
const source=fs.readFileSync('app/oct05BlogArticles.ts','utf8');
const data=fs.readFileSync('app/data.ts','utf8');
const index=fs.readFileSync('app/blog/page.tsx','utf8');
const route=fs.readFileSync('app/blog/[slug]/page.tsx','utf8');
const failures=[];const check=(v,m)=>{if(!v)failures.push(m)};
check(manifest.family==='blog','family');check(manifest.siteTimezone==='UTC','timezone');
check(manifest.entries.length===12,'entry count');check(new Set(manifest.entries.map(e=>e.slug)).size===12,'unique slugs');
check(data.includes("import { oct05BlogArticles } from './oct05BlogArticles';"),'data import');
check(data.includes('...oct05BlogArticles,'),'data registration');
check(index.includes("publishedOn(p,'2026-10-05')"),'index date');
check(index.includes('Published October 5, 2026'),'index heading');
check(route.includes('datePublished: published'),'structured publication date');
for(const entry of manifest.entries){check(entry.bodyWords>=900,`${entry.slug}: ${entry.bodyWords} words`);check(/^[a-f0-9]{64}$/.test(entry.contentHash),`${entry.slug}: hash`);check(source.includes(`"slug": "${entry.slug}"`),`${entry.slug}: source registration`);check(fs.existsSync(`public${entry.hero}`),`${entry.slug}: hero`)}
if(failures.length){console.error(failures.join('\n'));process.exit(1)}
console.log(JSON.stringify({articles:manifest.entries.map(({slug,bodyWords,contentHash})=>({slug,bodyWords,contentHash}))},null,2));
console.log('October 5 Blog source validation passed.');

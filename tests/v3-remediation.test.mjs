import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, readdirSync } from 'node:fs';

const read=(path)=>readFileSync(new URL(`../${path}`,import.meta.url),'utf8');

test('V3 navigation, attribution, and approved assets are wired',()=>{
  const components=read('app/components.tsx');
  assert.match(components,/Home<\/a><a href="\/services">Services<\/a><a href="\/contact-us">Contact Us/);
  assert.match(components,/Powered by StealthAgents/);
  assert.match(components,/brand\/stealth-agents-logo\.png/);
  assert.ok(existsSync(new URL('../public/brand/stealth-agents-logo.png',import.meta.url)));
  assert.ok(existsSync(new URL('../public/brand/stealth-agents-team-bacolod.jpg',import.meta.url)));
});

test('all exact first party reviews power an automatic control free marquee',()=>{
  const reviews=read('app/reviews.ts');
  const records=(reviews.match(/name:/g)||[]).length;
  assert.equal(records,14);
  const marquee=read('app/ReviewsMarquee.tsx');
  assert.match(marquee,/Stealth Agents reviews/);
  assert.doesNotMatch(marquee,/<button|controls/);
  assert.match(read('app/globals.css'),/@keyframes reviews-marquee/);
  assert.match(read('app/reviews-provenance.json'),/Approved first-party client review register/);
  assert.match(marquee,/reviews-provenance\.json/);
});

test('contact flow and private route rules are explicit',()=>{
  assert.match(read('app/contact/page.tsx'),/permanentRedirect\('\/contact-us'\)/);
  assert.match(read('app/contact-us/StandardContactForm.tsx'),/window\.location\.assign\("\/thank-you"\)/);
  assert.match(read('app/thank-you/page.tsx'),/thanks-whats-next/);
  assert.ok(existsSync(new URL('../app/thanks-whats-next/page.tsx',import.meta.url)));
  const sitemap=read('app/sitemap.xml/route.ts');
  assert.doesNotMatch(sitemap,/'\/contact'/);
  assert.doesNotMatch(sitemap,/'\/thank-you'/);
});

test('service template contains the complete operating guide contract',()=>{
  const page=read('app/services/[slug]/page.tsx');
  for(const heading of ['Audience and problem','Scope','Required inputs','Workflow','Deliverables','boundaries','Quality controls','examples','Frequently asked questions','Related services']) assert.match(page,new RegExp(heading,'i'));
  assert.match(page,/service-hero-image/);
  assert.match(read('app/data.ts'),/export const services = \[/);
});

test('security, canonical redirect, branded errors, and editorial toc exist',()=>{
  const config=read('next.config.mjs');
  for(const header of ['Content-Security-Policy','X-Content-Type-Options','Referrer-Policy','Permissions-Policy','Strict-Transport-Security']) assert.match(config,new RegExp(header));
  assert.match(config,/www\.outsourcedhelpdeskservices\.com/);
  assert.match(read('middleware.ts'),/x-forwarded-proto/);
  assert.match(read('middleware.ts'),/NextResponse\.redirect\(destination, 308\)/);
  assert.match(read('app/layout.tsx'),/icons:\s*\{\s*icon:\s*'\/icon\.svg'/);
  assert.match(read('app/not-found.tsx'),/Ticket not found/);
  assert.match(read('app/blog/[slug]/page.tsx'),/EditorialToc/);
  assert.match(read('app/research/[slug]/page.tsx'),/EditorialToc/);
});

test('editorial, service, title, registry, identity, and punctuation gates stay enforced',()=>{
  for(const path of ['app/blog/page.tsx','app/research/page.tsx']) {
    const source=read(path);
    assert.match(source,/editorial-index-hero/);
    assert.match(source,/editorial-index-card/);
    assert.match(source,/<time/);
    assert.match(source,/<img/);
  }
  assert.match(read('app/aug19-content.tsx'),/EditorialToc/);
  assert.match(read('app/blog/[slug]/page.tsx'),/renderArticleText/);
  assert.match(read('app/blog/[slug]/page.tsx'),/editorial-hero-image/);
  assert.match(read('app/research/[slug]/page.tsx'),/editorial-hero-image/);
  assert.match(read('app/services/page.tsx'),/service-hero-image/);
  const serviceContent=read('app/services/[slug]/service-content.ts');
  for(const slug of ['level-one-ticket-triage','email-helpdesk-support','chat-helpdesk-support','account-access-support','password-reset-coordination','saas-user-support','ecommerce-customer-helpdesk','knowledge-base-maintenance','ticket-escalation-coordination','bug-report-documentation','helpdesk-quality-review','support-queue-reporting']) assert.match(serviceContent,new RegExp(`'${slug}'`));
  assert.equal(read('app/icon.svg'),read('public/logo.svg'));
  const registry=JSON.parse(read('design-registry.json'));
  for(const field of ['domain','industry','audience','designFamily','heroComposition','typeCharacter','paletteFamily','shapeGrammar','imageTreatment','sectionRhythm','navigationTreatment','motionSignature','density','signatureElement']) assert.ok(registry[field],`missing design registry field ${field}`);
  assert.doesNotMatch(read('app/services/page.tsx'),/Services \| \$\{site\.brand\}/);
  assert.match(read('app/editorial-text.ts'),/sanitizeEditorialText/);
  const appRoot=new URL('../app/',import.meta.url);
  for(const relative of readdirSync(appRoot,{recursive:true,encoding:'utf8'}).filter(path=>/\.(?:ts|tsx|json)$/.test(path))) {
    const source=readFileSync(new URL(relative,appRoot),'utf8');
    assert.doesNotMatch(source,/[—–]/,`${relative} contains forbidden dash punctuation`);
  }
});

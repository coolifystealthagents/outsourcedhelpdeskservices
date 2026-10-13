import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

const contactForm = read('app/contact-us/StandardContactForm.tsx');
const acrClient = read('app/acr-client.tsx');
const contactApi = read('app/api/contact/route.ts');
const packageJson = JSON.parse(read('package.json'));
const contactUs = read('app/contact-us/page.tsx');
const contact = read('app/contact/page.tsx');
const thankYou = read('app/thank-you/page.tsx');
const researchPost = read('app/research/[slug]/page.tsx');
const researchValidator = read('scripts/validate_aug17_research.mjs');
const blogPost = read('app/blog/[slug]/page.tsx');
const researchIndex = read('app/research/page.tsx');
const blogIndex = read('app/blog/page.tsx');
const blogPagination = read('app/blog/page/[page]/page.tsx');
const sitemap = read('app/sitemap.xml/route.ts');
const aug21Blog = read('app/aug21BlogArticles.ts');

const unsupportedProof = /TestimonialsRail|Sarah Jacoby|Alex Behrens|George Assi|featured on Forbes|top rated virtual assistant|35\+ different industries/i;

test('failed authoritative lead delivery never redirects to the thank-you page', () => {
  const catchStart = contactForm.indexOf('    } catch {');
  const catchEnd = contactForm.indexOf('    } finally {', catchStart);
  assert.ok(catchStart >= 0 && catchEnd > catchStart, 'expected a catch block that reports submission failure');
  const catchBlock = contactForm.slice(catchStart + '    } catch {'.length, catchEnd);
  assert.doesNotMatch(catchBlock, /trackLead|location\.assign\("\/thank-you"\)/);
  assert.match(contactForm, /if \(!response\.ok\) throw new Error/);
});

test('React-managed contact forms are excluded from the global submit handler', () => {
  assert.match(contactForm, /data-acr-managed=["']true["']/);
  assert.match(acrClient, /form\.dataset\.acrManaged===['"]true['"]/);
});

test('authoritative lead ingestion preserves the visitor-selected referral', () => {
  assert.match(contactApi, /text\(form,['"]referral['"],300\)/);
  assert.match(contactApi, /text\(form,['"]howTheyHeard['"],300\)/);
  assert.match(contactApi, /referral\|\|howTheyHeard\|\|source/);
});

test('Other referral attribution includes the required visitor explanation', () => {
  assert.match(contactApi, /text\(form,['"]referralSpecify['"],300\)/);
  assert.match(contactApi, /referral===['"]Other['"].*referralSpecify/);
});

test('the standard npm test command includes audit remediation regressions', () => {
  assert.match(packageJson.scripts.test, /tests\/audit-remediation\.test\.mjs/);
});

test('public contact and thank-you routes do not render unverified testimonials or claims', () => {
  assert.doesNotMatch(contactUs, unsupportedProof);
  assert.doesNotMatch(contact, unsupportedProof);
  assert.doesNotMatch(thankYou, unsupportedProof);
});

test('contact page uses the licensed help-desk illustration instead of the generic office photo', () => {
  assert.doesNotMatch(contactUs, /helpdesk-team\.jpg/);
  assert.match(contactUs, /illustrations\/getillustrations\/inkdex-saas-illustrations-svg\/filipino-helpdesk-team\.webp/);
});

test('research heroes use a present licensed fallback and hide unresolved related slugs', () => {
  assert.match(researchPost, /filipino-helpdesk-team\.webp|ticket-support\.webp/);
  assert.match(researchPost, /relatedResearch/);
  assert.match(researchPost, /researchPosts\.some/);
  assert.doesNotMatch(researchPost, /p\.hero\?\?`\/research-thumbnails\/\$\{p\.slug\}\.svg`/);
  assert.match(researchValidator, /researchHero\(p\.hero\)/);
});

test('legacy generic photo assignments are replaced at blog and research render boundaries', () => {
  assert.match(blogPost, /const blogHero=/);
  assert.match(blogPost, /hero===['"]\/helpdesk-team\.jpg['"]/);
  assert.match(blogPost, /blogHero\(/);
  assert.match(researchPost, /hero===['"]\/helpdesk-team\.jpg['"]/);
});

test('the reasonable-clarification article points to its existing queue-named hero', () => {
  assert.match(aug21Blog, /\.\.\.hero\(['"]queue-reasonable-clarification['"]/);
});

test('sitemap includes the canonical consultation route but excludes private or redirect aliases', () => {
  assert.match(sitemap, /['"]\/contact-us['"]/);
  for (const route of ['/thank-you', '/pricing', '/cancellation']) {
    assert.doesNotMatch(sitemap, new RegExp(`['"]${route}['"]`));
  }
});

test('all audited static and pagination pages declare page-specific canonical metadata', () => {
  for (const [name, path] of [
    ['home', 'app/page.tsx'],
    ['services', 'app/services/page.tsx'],
    ['contact', 'app/contact/page.tsx'],
    ['privacy', 'app/privacy/page.tsx'],
    ['terms', 'app/terms/page.tsx'],
    ['cancellation policy', 'app/cancellation-policy/page.tsx'],
    ['blog index', 'app/blog/page.tsx'],
    ['research index', 'app/research/page.tsx'],
  ]) {
    assert.match(read(path), /alternates\s*:\s*\{\s*canonical:/, `${name} needs a canonical`);
  }
  assert.match(blogPagination, /generateMetadata/);
  assert.match(blogPagination, /alternates\s*:\s*\{\s*canonical/);
});

test('pagination titles rely on the root title template without duplicating the brand', () => {
  assert.match(blogPagination, /title:\s*`Blog page \$\{page\}`/);
  assert.doesNotMatch(blogPagination, /title:\s*`Blog page \$\{page\}\s*\|/);
});

test('duplicate cancellation route permanently redirects to the canonical policy', () => {
  const cancellation = read('app/cancellation/page.tsx');
  assert.match(cancellation, /permanentRedirect\(["']\/cancellation-policy["']\)/);
});

test('blog and research indexes expose the static operations-library routes', () => {
  assert.match(blogIndex, /aug19Meta/);
  assert.match(blogIndex, /family\s*===\s*["']blog["']/);
  assert.match(researchIndex, /aug19Meta/);
  assert.match(researchIndex, /family\s*===\s*["']research["']/);
});

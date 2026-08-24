import assert from 'node:assert/strict';
import {readdirSync, readFileSync} from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const publicationDate = '2026-08-17';
const modifiedDate = '2026-08-18';
const expected = [
  ['research-demand-evidence-gap.json', 'helpdesk-article-demand-evidence-gap-research'],
  ['research-claim-traceability.json', 'helpdesk-article-claim-traceability-research'],
  ['research-methodology-scope.json', 'helpdesk-article-methodology-scope-research'],
  ['research-citation-freshness.json', 'helpdesk-article-citation-freshness-research'],
  ['research-contradiction-review.json', 'helpdesk-article-contradiction-review-research'],
  ['research-audience-fit.json', 'helpdesk-article-audience-fit-research'],
  ['research-translation-risk.json', 'helpdesk-article-translation-risk-research'],
  ['research-knowledge-transfer.json', 'helpdesk-article-knowledge-transfer-research'],
  ['research-public-internal-boundary.json', 'helpdesk-article-public-internal-boundary-research'],
  ['research-maintenance-burden.json', 'helpdesk-article-maintenance-burden-research'],
];
const requiredReportKeys = [
  'executiveAnswer',
  'findings',
  'limitations',
  'measurements',
  'methodology',
  'observationWindow',
  'operationalImplications',
  'researchQuestion',
  'sampleDefinition',
  'sources',
  'table',
].sort();
const renderedModules = [
  'executive-answer',
  'research-question',
  'observation-window',
  'sample-definition',
  'methodology',
  'measurements',
  'result-table',
  'findings',
  'operational-implications',
  'limitations',
  'claim-specific-sources',
];

const read = (relativePath) => readFileSync(path.join(root, relativePath), 'utf8');
const nonemptyString = (value) => typeof value === 'string' && value.trim().length > 0;
const collectStrings = (value) => {
  if (typeof value === 'string') return [value];
  if (Array.isArray(value)) return value.flatMap(collectStrings);
  if (value && typeof value === 'object') return Object.values(value).flatMap(collectStrings);
  return [];
};
const wordCount = (value) => (collectStrings(value).join(' ').match(/[\p{L}\p{N}]+(?:[’'-][\p{L}\p{N}]+)*/gu) || []).length;
const positiveMatrixCell = (value) => value === 1 || typeof value === 'string' && (/^1(?:\b|\s|\s*[—-])/u.test(value.trim()) || /^pass\b/i.test(value.trim()));
const editorialFiles = readdirSync(path.join(root, 'app/editorial')).filter((name) => /^research-.*\.json$/.test(name)).sort();
assert.deepEqual(editorialFiles, expected.map(([file]) => file).sort(), 'Research editorial inputs must be exactly the 10 approved files');

const reports = [];
for (const [file, expectedSlug] of expected) {
  const payload = JSON.parse(read(`app/editorial/${file}`));
  assert.deepEqual(Object.keys(payload), [expectedSlug], `${file}: expected exactly the approved route slug`);
  const report = payload[expectedSlug];
  reports.push([expectedSlug, report]);

  assert.deepEqual(Object.keys(report).sort(), requiredReportKeys, `${expectedSlug}: top-level schema changed`);
  assert.ok(nonemptyString(report.executiveAnswer) || Array.isArray(report.executiveAnswer) && report.executiveAnswer.length > 0 && report.executiveAnswer.every(nonemptyString), `${expectedSlug}: executive answer is missing`);
  assert.ok(nonemptyString(report.researchQuestion), `${expectedSlug}: research question is missing`);
  assert.ok(nonemptyString(report.observationWindow), `${expectedSlug}: observation window is missing`);
  assert.deepEqual(Object.keys(report.sampleDefinition).sort(), ['exclusion', 'includedN', 'inclusion', 'population'], `${expectedSlug}: sample schema changed`);
  assert.ok(Number.isInteger(report.sampleDefinition.includedN) && report.sampleDefinition.includedN > 0, `${expectedSlug}: included N must be a positive integer`);
  for (const key of ['population', 'inclusion', 'exclusion']) assert.ok(nonemptyString(report.sampleDefinition[key]), `${expectedSlug}: sample ${key} is missing`);

  for (const key of ['methodology', 'findings', 'operationalImplications', 'limitations']) {
    assert.ok(Array.isArray(report[key]) && report[key].length > 0 && report[key].every(nonemptyString), `${expectedSlug}: ${key} must contain narrative evidence`);
  }

  assert.ok(Array.isArray(report.measurements) && report.measurements.length > 0, `${expectedSlug}: measurements are missing`);
  for (const measurement of report.measurements) {
    assert.deepEqual(Object.keys(measurement).sort(), ['calculation', 'denominator', 'label', 'numerator', 'result'], `${expectedSlug}: measurement schema changed`);
    assert.ok(nonemptyString(measurement.label) && nonemptyString(measurement.calculation) && nonemptyString(measurement.result), `${expectedSlug}: measurement copy is incomplete`);
    assert.ok(Number.isInteger(measurement.numerator) && measurement.numerator >= 0, `${expectedSlug}: measurement numerator must be a non-negative integer`);
    assert.ok(Number.isInteger(measurement.denominator) && measurement.denominator > 0, `${expectedSlug}: measurement denominator must be a positive integer`);
    assert.ok(measurement.numerator <= measurement.denominator, `${expectedSlug}: measurement counts do not reconcile`);
    const percentage = /^(\d+(?:\.(\d+))?)%$/.exec(measurement.result);
    if (percentage) {
      const precision = percentage[2]?.length ?? 0;
      const calculated = Number(((measurement.numerator / measurement.denominator) * 100).toFixed(precision));
      assert.equal(Number(percentage[1]), calculated, `${expectedSlug}: displayed percentage does not reconcile with its counts`);
    }
  }

  assert.deepEqual(Object.keys(report.table).sort(), ['columns', 'heading', 'rows'], `${expectedSlug}: result-table schema changed`);
  assert.ok(nonemptyString(report.table.heading), `${expectedSlug}: result-table heading is missing`);
  assert.ok(Array.isArray(report.table.columns) && report.table.columns.length >= 2 && report.table.columns.every(nonemptyString), `${expectedSlug}: result-table columns are incomplete`);
  assert.ok(Array.isArray(report.table.rows) && report.table.rows.length >= report.sampleDefinition.includedN, `${expectedSlug}: result-table rows must reconcile to at least N=${report.sampleDefinition.includedN}`);
  for (const row of report.table.rows) {
    assert.ok(Array.isArray(row) && row.length === report.table.columns.length, `${expectedSlug}: a result row does not match the column count`);
    assert.ok(row.every((cell) => nonemptyString(cell) || typeof cell === 'number' && Number.isFinite(cell)), `${expectedSlug}: a result cell is empty or invalid`);
  }

  const includedRows = report.table.rows.length === report.sampleDefinition.includedN
    ? report.table.rows
    : report.table.rows.filter((row) => row.some((cell) => typeof cell === 'string' && /\bincluded\b/i.test(cell) && !/\bexcluded\b/i.test(cell)));
  assert.equal(includedRows.length, report.sampleDefinition.includedN, `${expectedSlug}: displayed matrix does not identify exactly N included rows`);
  let matrixChecks = 0;
  for (const measurement of report.measurements) {
    if (measurement.denominator !== report.sampleDefinition.includedN) continue;
    const code = /\(([A-Z]\d)\)/.exec(measurement.label)?.[1];
    let columnIndex = code ? report.table.columns.findIndex((column) => column.includes(code)) : -1;
    const semanticColumnHints = [
      [/direct passage support/i, /direct support/i],
      [/preserving source scope/i, /scope preserved/i],
      [/identifiable issuing authority/i, /authority identifiable/i],
      [/identifiable source version|date marker/i, /currency identifiable/i],
    ];
    if (columnIndex < 0) {
      const hint = semanticColumnHints.find(([labelPattern]) => labelPattern.test(measurement.label))?.[1];
      if (hint) columnIndex = report.table.columns.findIndex((column) => hint.test(column));
    }
    if (columnIndex < 0 && /complete|all four|all five/i.test(measurement.label)) {
      columnIndex = report.table.columns.findIndex((column) => /complete|all four|five-field/i.test(column));
    }
    if (columnIndex < 0) continue;
    const matrixNumerator = includedRows.filter((row) => positiveMatrixCell(row[columnIndex])).length;
    assert.equal(measurement.numerator, matrixNumerator, `${expectedSlug}: ${measurement.label} numerator conflicts with the displayed matrix`);
    matrixChecks += 1;
  }
  assert.ok(matrixChecks >= 4, `${expectedSlug}: fewer than four full-sample measurements are reconciled from the displayed matrix`);

  assert.ok(Array.isArray(report.sources) && report.sources.length > 0, `${expectedSlug}: claim-specific sources are missing`);
  for (const source of report.sources) {
    assert.deepEqual(Object.keys(source).sort(), ['accessed', 'claimNote', 'httpStatus', 'organization', 'publishedOrUpdated', 'title', 'url'], `${expectedSlug}: source schema changed`);
    for (const key of ['title', 'organization', 'url', 'publishedOrUpdated', 'accessed', 'claimNote']) assert.ok(nonemptyString(source[key]), `${expectedSlug}: source ${key} is missing`);
    assert.match(source.url, /^https:\/\//, `${expectedSlug}: source URL must use HTTPS`);
    assert.ok(Number.isInteger(source.httpStatus) && source.httpStatus >= 100 && source.httpStatus <= 599, `${expectedSlug}: source HTTP status is invalid`);
  }

  const routeSpecificContent = Object.fromEntries(Object.entries(report).filter(([key]) => key !== 'sources'));
  assert.ok(wordCount(routeSpecificContent) >= 900, `${expectedSlug}: only ${wordCount(routeSpecificContent)} route-specific words excluding source metadata`);
  let publicCopy = collectStrings(routeSpecificContent).join('\n').replaceAll(/\bpricing material\b/gi, 'excluded material');
  const prohibited = [
    ['company pricing', /(?:[$€£]\s?\d|\b(?:pricing|prices?|rate cards?|hourly rates?|monthly rates?|annual rates?|rates? (?:start|starting|from|are))\b)/i],
    ['pricing or sales CTA', /\b(?:contact us|get started|book (?:a )?(?:call|demo)|schedule (?:a )?(?:call|demo)|request (?:a )?(?:quote|consultation)|buy now|sign up|CTA)\b/i],
    ['internal production mechanics', /\b(?:paperclip|git(?:hub)?|worktree|deploy(?:ment|ed|ing)?|content[- ]production|build pipeline|validation script)\b/i],
  ];
  for (const [label, pattern] of prohibited) assert.ok(!pattern.test(publicCopy), `${expectedSlug}: prohibited ${label} found`);
}

assert.equal(new Set(reports.map(([slug]) => slug)).size, 10, 'Research routes must contain exactly 10 unique slugs');
assert.equal(new Set(reports.map(([, report]) => JSON.stringify(report))).size, 10, 'Every Research route must have a route-specific record');

const integration = read('app/aug17ResearchReports.ts');
for (const [file, slug] of expected) {
  assert.ok(integration.includes(`./editorial/${file}`), `typed integration does not import ${file}`);
  assert.ok(integration.includes('satisfies Record<string, Aug17ResearchReport>'), 'typed report contract is missing');
  assert.ok(integration.includes('isAug17ResearchSlug'), `${slug}: route type guard is missing`);
}
assert.ok(integration.includes(`AUG17_RESEARCH_PUBLICATION_DATE = '${publicationDate}'`), 'Research publication date constant changed');
assert.ok(integration.includes(`AUG17_RESEARCH_MODIFIED_DATE = '${modifiedDate}'`), 'Research modification date constant changed');

const dataSource = read('app/data.ts');
assert.ok(dataSource.includes('...aug17ValidatedResearchBatch'), 'approved Research metadata batch is not in production researchPosts');
for (const [, slug] of expected) {
  const datedRecord = new RegExp(`slug: '${slug}'[^\\n]*published: '${publicationDate}'[^\\n]*sourceDate: '${publicationDate}'`).test(dataSource);
  assert.ok(datedRecord, `${slug}: production metadata must preserve visible/source date ${publicationDate}`);
}

const route = read('app/research/[slug]/page.tsx');
assert.ok(route.includes('isAug17ResearchSlug(slug)') && route.includes('aug17ResearchReports[slug]'), 'structured reports are not reachable from the production Research route');
assert.ok(route.includes('report?AUG17_RESEARCH_PUBLICATION_DATE'), 'August 17 date is not selected deterministically');
assert.ok(route.includes('datePublished:publicDate') && route.includes('dateModified:report?AUG17_RESEARCH_MODIFIED_DATE:publicDate'), 'truthful JSON-LD publication and modification dates are not rendered');
assert.ok(route.includes('<time dateTime={publicDate}>'), 'visible semantic date is not rendered');
assert.ok(route.includes('<Header hidePricing/>') && route.includes('<Footer hidePricing/>'), 'Research report Header and Footer must use hidePricing');
assert.ok(route.includes('{!report&&<CTA/>}'), 'CTA must be excluded from August 17 reports without changing legacy Research rendering');
assert.ok(route.includes('rel="noreferrer"'), 'external Research sources must render with rel=noreferrer');
assert.ok(route.includes('failed?source.title:<a'), 'failed source URLs must never render as links');
assert.ok(route.includes('this failed URL does not substantiate a finding'), 'paired historical failures need an explicit evidence disclaimer');
assert.ok(route.includes('scope="row"') && route.includes('aria-labelledby="research-results-heading"'), 'evidence tables need row headers and an accessible programmatic name');
assert.ok(route.includes('p.hero??`/research-thumbnails/${p.slug}.svg`') && route.includes('width="1200" height="630" alt="" loading="eager"'), 'Research hero image treatment changed');
for (const moduleName of renderedModules) assert.ok(route.includes(`data-research-module="${moduleName}"`), `production route does not render ${moduleName}`);

const indexRoute = read('app/research/page.tsx');
assert.ok(indexRoute.includes('<Header hidePricing/>') && indexRoute.includes('<Footer hidePricing/>'), 'Research index Header and Footer must use hidePricing');

console.log(`August 17 Research contract passed: ${reports.length} exact unique routes, >=900 route-specific words, positive N with reconciled rows/calculations, all modules, ${publicationDate} visible/JSON-LD dates, hidePricing, source-access safeguards, and prohibited-copy checks`);

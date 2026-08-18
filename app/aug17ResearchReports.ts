import audienceFit from './editorial/research-audience-fit.json';
import citationFreshness from './editorial/research-citation-freshness.json';
import claimTraceability from './editorial/research-claim-traceability.json';
import contradictionReview from './editorial/research-contradiction-review.json';
import demandEvidenceGap from './editorial/research-demand-evidence-gap.json';
import knowledgeTransfer from './editorial/research-knowledge-transfer.json';
import maintenanceBurden from './editorial/research-maintenance-burden.json';
import methodologyScope from './editorial/research-methodology-scope.json';
import publicInternalBoundary from './editorial/research-public-internal-boundary.json';
import translationRisk from './editorial/research-translation-risk.json';

export const AUG17_RESEARCH_PUBLICATION_DATE = '2026-08-17' as const;
export const AUG17_RESEARCH_MODIFIED_DATE = '2026-08-18' as const;

export type ResearchMeasurement = {
  label: string;
  numerator: number;
  denominator: number;
  calculation: string;
  result: string;
};

export type ResearchSource = {
  title: string;
  organization: string;
  url: string;
  publishedOrUpdated: string;
  accessed: string;
  claimNote: string;
  httpStatus: number;
};

export type Aug17ResearchReport = {
  executiveAnswer: string | string[];
  researchQuestion: string;
  observationWindow: string;
  sampleDefinition: {
    population: string;
    includedN: number;
    inclusion: string;
    exclusion: string;
  };
  methodology: string[];
  measurements: ResearchMeasurement[];
  table: {
    heading: string;
    columns: string[];
    rows: Array<Array<string | number>>;
  };
  findings: string[];
  operationalImplications: string[];
  limitations: string[];
  sources: ResearchSource[];
};

export const aug17ResearchReports = {
  ...demandEvidenceGap,
  ...claimTraceability,
  ...methodologyScope,
  ...citationFreshness,
  ...contradictionReview,
  ...audienceFit,
  ...translationRisk,
  ...knowledgeTransfer,
  ...publicInternalBoundary,
  ...maintenanceBurden,
} satisfies Record<string, Aug17ResearchReport>;

export type Aug17ResearchSlug = keyof typeof aug17ResearchReports;

export function isAug17ResearchSlug(slug: string): slug is Aug17ResearchSlug {
  return Object.prototype.hasOwnProperty.call(aug17ResearchReports, slug);
}

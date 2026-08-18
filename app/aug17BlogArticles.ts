import batchA from './editorial/aug17-blog-articles-a.json';
import batchB1 from './editorial/aug17-blog-articles-b1.json';
import batchB2 from './editorial/aug17-blog-articles-b2.json';

export const AUG17_BLOG_PUBLICATION_DATE = '2026-08-17' as const;

export type Aug17BlogArticle = {
  directAnswer: string[];
  fields: string[][];
  table: {
    heading: string;
    columns: string[];
    rows: string[][];
  };
  sections: Array<{
    heading: string;
    body: string[];
  }>;
  example: {
    heading: string;
    body: string[];
  };
  checklist: string[];
  cautions: string[];
};

export const aug17BlogArticles = {
  ...batchA,
  ...batchB1,
  ...batchB2,
} satisfies Record<string, Aug17BlogArticle>;

export type Aug17BlogSlug = keyof typeof aug17BlogArticles;

export function isAug17BlogSlug(slug: string): slug is Aug17BlogSlug {
  return Object.prototype.hasOwnProperty.call(aug17BlogArticles, slug);
}

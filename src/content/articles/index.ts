import type { Article } from './types';

import { buildingTrustInPractice } from './building-trust-in-practice';
import { propertySaleAgreementChecklist } from './property-sale-agreement-checklist';
import { whyDueDiligenceMatters } from './why-due-diligence-matters';

export type { Article };

export const articles: Article[] = [
  propertySaleAgreementChecklist,
  whyDueDiligenceMatters,
  buildingTrustInPractice,
];

export const getArticleBySlug = (slug: string) =>
  articles.find((article) => article.slug === slug);
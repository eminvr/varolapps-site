import type { RouteKey } from '../i18n/routes'

export type LegalLink = {
  label: string
  to: string
}

export type LegalFaq = {
  question: string
  answer: string
}

export type LegalSectionData = {
  id: string
  title: string
  paragraphs?: string[]
  bullets?: string[]
  links?: LegalLink[]
  faqs?: LegalFaq[]
}

export type LegalPageData = {
  eyebrow: string
  title: string
  description: string
  routeKey: RouteKey
  seoTitle: string
  seoDescription: string
  ogTitle?: string
  ogDescription?: string
  updatedAt: string
  sections: LegalSectionData[]
  contactEmail?: string
}

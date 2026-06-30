export const siteConfig = {
  name: 'Varol Apps',
  url: 'https://varolapps.com',
  defaultDescription: 'Simple, useful apps by Varol Apps.',
  defaultOgImage: '/og-image.svg',
} as const

export const routePaths = {
  home: '/',
  evlio: '/apps/evlio',
  evlioPrivacy: '/apps/evlio/privacy',
  evlioTerms: '/apps/evlio/terms',
  evlioSupport: '/apps/evlio/support',
  evlioDeleteAccount: '/apps/evlio/delete-account',
  privacy: '/privacy',
  terms: '/terms',
  support: '/support',
  deleteAccount: '/delete-account',
} as const

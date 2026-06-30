import { defaultLocale, type Locale } from './config'
import { siteConfig } from '../utils/site'

export const localizedRoutes = {
  home: '/',
  evlio: '/apps/evlio',
  privacy: '/privacy',
  terms: '/terms',
  support: '/support',
  deleteAccount: '/delete-account',
  evlioPrivacy: '/apps/evlio/privacy',
  evlioTerms: '/apps/evlio/terms',
  evlioSupport: '/apps/evlio/support',
  evlioDeleteAccount: '/apps/evlio/delete-account',
} as const

export type RouteKey = keyof typeof localizedRoutes

export const getLocaleFromPath = (pathname: string): Locale => (pathname === '/en' || pathname.startsWith('/en/') ? 'en' : defaultLocale)

export const stripLocalePrefix = (pathname: string) => {
  if (pathname === '/en') {
    return '/'
  }

  if (pathname.startsWith('/en/')) {
    return pathname.replace(/^\/en/, '')
  }

  return pathname
}

export const localizePath = (path: string, locale: Locale) => {
  if (locale === defaultLocale) {
    return path
  }

  return path === '/' ? '/en' : `/en${path}`
}

export const routePath = (key: RouteKey, locale: Locale) => localizePath(localizedRoutes[key], locale)

export const switchLocalePath = (pathname: string, targetLocale: Locale) => localizePath(stripLocalePrefix(pathname), targetLocale)

export const canonicalUrl = (path: string, locale: Locale) => new URL(localizePath(path, locale), siteConfig.url).toString()

export const alternateUrls = (path: string) => [
  { hrefLang: 'tr', href: canonicalUrl(path, 'tr') },
  { hrefLang: 'en', href: canonicalUrl(path, 'en') },
  { hrefLang: 'x-default', href: canonicalUrl(path, defaultLocale) },
]

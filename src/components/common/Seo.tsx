import { useEffect } from 'react'
import type { Locale } from '../../i18n/config'
import { siteConfig } from '../../utils/site'

type SeoProps = {
  title: string
  description: string
  canonical: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  locale?: Locale
  alternates?: {
    hrefLang: string
    href: string
  }[]
}

const absoluteUrl = (pathOrUrl: string) => {
  if (pathOrUrl.startsWith('http')) {
    return pathOrUrl
  }

  return new URL(pathOrUrl, siteConfig.url).toString()
}

const upsertMeta = (selector: string, attribute: 'name' | 'property', key: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

const upsertCanonical = (href: string) => {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', 'canonical')
    document.head.appendChild(element)
  }

  element.setAttribute('href', href)
}

const upsertAlternates = (alternates: NonNullable<SeoProps['alternates']>) => {
  document.head.querySelectorAll('link[data-seo-alternate="true"]').forEach((element) => element.remove())

  alternates.forEach((alternate) => {
    const element = document.createElement('link')
    element.setAttribute('rel', 'alternate')
    element.setAttribute('hrefLang', alternate.hrefLang)
    element.setAttribute('href', alternate.href)
    element.setAttribute('data-seo-alternate', 'true')
    document.head.appendChild(element)
  })
}

export function Seo({
  title,
  description,
  canonical,
  ogTitle = title,
  ogDescription = description,
  ogImage = siteConfig.defaultOgImage,
  locale,
  alternates = [],
}: SeoProps) {
  useEffect(() => {
    const pageTitle = title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`
    const canonicalUrl = absoluteUrl(canonical)
    const imageUrl = absoluteUrl(ogImage)

    document.title = pageTitle
    if (locale) {
      document.documentElement.lang = locale
    }

    upsertMeta('meta[name="description"]', 'name', 'description', description)
    upsertMeta('meta[property="og:type"]', 'property', 'og:type', 'website')
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', ogTitle)
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', ogDescription)
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl)
    upsertMeta('meta[property="og:image"]', 'property', 'og:image', imageUrl)
    upsertCanonical(canonicalUrl)
    upsertAlternates(alternates)
  }, [alternates, canonical, description, locale, ogDescription, ogImage, ogTitle, title])

  return null
}

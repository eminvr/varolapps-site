export const supportedLocales = ['tr', 'en'] as const
export type Locale = (typeof supportedLocales)[number]

export const defaultLocale: Locale = 'tr'
export const localeLabels: Record<Locale, string> = {
  tr: 'TR',
  en: 'EN',
}

export const isLocale = (value: string): value is Locale => supportedLocales.includes(value as Locale)

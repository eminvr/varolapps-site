import { defaultLocale, type Locale } from './config'
import { en } from './translations/en'
import { tr } from './translations/tr'

export type Translation = typeof tr

export const dictionary: Record<Locale, Translation> = {
  tr,
  en,
}

export const getDictionary = (locale: Locale) => dictionary[locale] ?? dictionary[defaultLocale]

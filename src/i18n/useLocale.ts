import { useMemo } from 'react'
import { useLocation } from 'react-router'
import type { Locale } from './config'
import { getLocaleFromPath, routePath, switchLocalePath, type RouteKey } from './routes'
import { getDictionary } from './dictionary'

const storageKey = 'varolapps.locale'

export const getStoredLocalePreference = (): Locale | null => {
  if (typeof window === 'undefined') {
    return null
  }

  const value = window.localStorage.getItem(storageKey)
  return value === 'tr' || value === 'en' ? value : null
}

export const setStoredLocalePreference = (locale: Locale) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(storageKey, locale)
  }
}

export function useLocale() {
  const location = useLocation()
  const locale = getLocaleFromPath(location.pathname)

  return useMemo(
    () => ({
      locale,
      t: getDictionary(locale),
      path: (key: RouteKey) => routePath(key, locale),
      switchPath: (targetLocale: Locale) => switchLocalePath(location.pathname, targetLocale),
    }),
    [locale, location.pathname],
  )
}

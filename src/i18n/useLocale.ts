import { useEffect, useMemo } from 'react'
import { useLocation } from 'react-router'
import type { Locale } from './config'
import { getLocaleFromPath, routePath, switchLocalePath, type RouteKey } from './routes'
import { getDictionary } from './dictionary'

const storageKey = 'varolapps.locale'

export function useLocale() {
  const location = useLocation()
  const locale = getLocaleFromPath(location.pathname)

  useEffect(() => {
    localStorage.setItem(storageKey, locale)
  }, [locale])

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

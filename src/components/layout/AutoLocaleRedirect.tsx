import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { defaultLocale, type Locale } from '../../i18n/config'
import { localizePath } from '../../i18n/routes'
import { getStoredLocalePreference } from '../../i18n/useLocale'

const browserLocale = (): Locale => {
  if (typeof navigator === 'undefined') {
    return defaultLocale
  }

  return navigator.language.toLowerCase().startsWith('en') ? 'en' : defaultLocale
}

export function AutoLocaleRedirect() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname !== '/') {
      return
    }

    const preferredLocale = getStoredLocalePreference() ?? browserLocale()

    if (preferredLocale === 'en') {
      navigate(localizePath('/', preferredLocale), { replace: true })
    }
  }, [location.pathname, navigate])

  return null
}

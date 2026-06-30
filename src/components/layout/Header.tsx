import { NavLink } from 'react-router'
import { localeLabels, supportedLocales } from '../../i18n/config'
import { useLocale } from '../../i18n/useLocale'

const linkClassName = ({ isActive }: { isActive: boolean }) =>
  [
    'rounded px-3 py-2 text-sm font-medium transition-colors',
    isActive ? 'text-neutral-950' : 'text-neutral-600 hover:text-neutral-950',
  ].join(' ')

export function Header() {
  const { locale, path, switchPath, t } = useLocale()
  const links = [
    { label: t.common.nav.brand, to: path('home'), key: 'home' },
    { label: t.common.nav.evlio, to: path('evlio'), key: 'evlio' },
    { label: t.common.nav.support, to: path('support'), key: 'support' },
  ] as const

  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <NavLink className="text-base font-semibold text-neutral-950" to={path('home')}>
          {t.common.nav.brand}
        </NavLink>
        <div className="flex flex-wrap items-center gap-3">
          <nav aria-label="Main navigation" className="flex flex-wrap gap-1">
            {links.map((link) => (
              <NavLink className={linkClassName} key={link.key} to={link.to}>
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex rounded-full border border-neutral-200 bg-neutral-50 p-1" aria-label="Language selector">
            {supportedLocales.map((option) => (
              <NavLink
                className={[
                  'rounded-full px-3 py-1 text-xs font-semibold transition-colors',
                  locale === option ? 'bg-white text-neutral-950 shadow-sm' : 'text-neutral-500 hover:text-neutral-950',
                ].join(' ')}
                key={option}
                to={switchPath(option)}
              >
                {localeLabels[option]}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

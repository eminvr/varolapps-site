import { Link } from 'react-router'
import { useLocale } from '../../i18n/useLocale'
import { siteConfig } from '../../utils/site'

export function Footer() {
  const { path, t } = useLocale()
  const footerLinks = [
    { label: t.common.nav.privacy, to: path('privacy') },
    { label: t.common.nav.terms, to: path('terms') },
    { label: t.common.nav.support, to: path('support') },
    { label: t.common.nav.deleteAccount, to: path('deleteAccount') },
  ] as const

  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-6 text-sm text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} {siteConfig.name}</p>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-4 gap-y-2">
          {footerLinks.map((link) => (
            <Link className="hover:text-neutral-950" key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}

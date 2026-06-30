import { Link } from 'react-router'
import { routePaths, siteConfig } from '../../utils/site'

const footerLinks = [
  { label: 'Privacy', to: routePaths.privacy },
  { label: 'Terms', to: routePaths.terms },
  { label: 'Support', to: routePaths.support },
  { label: 'Delete Account', to: routePaths.deleteAccount },
] as const

export function Footer() {
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

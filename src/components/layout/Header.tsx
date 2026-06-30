import { NavLink } from 'react-router'
import { evlioApp } from '../../data/apps'
import { routePaths } from '../../utils/site'

const navigationLinks = [
  { label: 'Varol Apps', to: routePaths.home },
  { label: evlioApp.name, to: evlioApp.path },
  { label: 'Support', to: routePaths.support },
] as const

const linkClassName = ({ isActive }: { isActive: boolean }) =>
  [
    'rounded px-3 py-2 text-sm font-medium transition-colors',
    isActive ? 'text-neutral-950' : 'text-neutral-600 hover:text-neutral-950',
  ].join(' ')

export function Header() {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <NavLink className="text-base font-semibold text-neutral-950" to={routePaths.home}>
          Varol Apps
        </NavLink>
        <nav aria-label="Main navigation" className="flex flex-wrap gap-1">
          {navigationLinks.map((link) => (
            <NavLink className={linkClassName} key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

import { Link } from 'react-router'
import { useLocale } from '../../i18n/useLocale'
import { EvlioSection } from './EvlioSection'
import { EvlioSectionIntro } from './EvlioSectionIntro'

export function EvlioTrustLinks() {
  const { path, t } = useLocale()
  const links = [
    { label: t.evlio.trust.links.privacy, to: path('evlioPrivacy') },
    { label: t.evlio.trust.links.terms, to: path('evlioTerms') },
    { label: t.evlio.trust.links.support, to: path('evlioSupport') },
    { label: t.evlio.trust.links.deleteAccount, to: path('evlioDeleteAccount') },
    { label: t.evlio.trust.links.faq, to: path('evlioFaq') },
  ] as const

  return (
    <EvlioSection className="pt-8">
      <div className="rounded-[2rem] border border-neutral-200 bg-gradient-to-b from-white to-neutral-50 p-6 shadow-sm sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <EvlioSectionIntro title={t.evlio.trust.title} description={t.evlio.trust.description} />
          <div className="grid gap-3 sm:grid-cols-2">
            {links.map((link) => (
              <Link
                className="rounded-2xl border border-neutral-200 bg-white px-4 py-4 text-sm font-semibold text-neutral-950 shadow-sm transition hover:border-neutral-300 hover:bg-neutral-50"
                key={link.to}
                to={link.to}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </EvlioSection>
  )
}

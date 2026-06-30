import { Link } from 'react-router'
import { useLocale } from '../../i18n/useLocale'
import { EvlioSection } from './EvlioSection'

export function EvlioCta() {
  const { path, t } = useLocale()

  return (
    <EvlioSection className="pb-20 sm:pb-28">
      <div className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-neutral-950 px-6 py-12 text-white shadow-[0_30px_90px_rgba(15,23,42,0.18)] sm:px-10 sm:py-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-normal sm:text-4xl">
            {t.evlio.cta.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-neutral-300 sm:text-lg">
            {t.evlio.cta.description}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 shadow-sm transition hover:bg-neutral-100"
              to={path('evlioSupport')}
            >
              {t.evlio.cta.support}
            </Link>
            <Link
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              to={path('evlioDeleteAccount')}
            >
              {t.evlio.cta.deleteAccount}
            </Link>
          </div>
        </div>
      </div>
    </EvlioSection>
  )
}

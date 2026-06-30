import { Link } from 'react-router'
import { useLocale } from '../../i18n/useLocale'
import { HomeSection } from './HomeSection'

export function HomeCta() {
  const { path, t } = useLocale()

  return (
    <HomeSection className="pb-20 sm:pb-28">
      <div className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-neutral-950 px-6 py-12 text-white shadow-[0_30px_90px_rgba(15,23,42,0.18)] sm:px-10 sm:py-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-normal sm:text-4xl">
            {t.home.cta.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-neutral-300 sm:text-lg">
            {t.home.cta.description}
          </p>
          <Link
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 shadow-sm transition hover:bg-neutral-100"
            to={path('evlio')}
          >
            {t.home.cta.button}
          </Link>
        </div>
      </div>
    </HomeSection>
  )
}

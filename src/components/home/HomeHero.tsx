import { Link } from 'react-router'
import heroImage from '../../assets/home-hero.png'
import { useLocale } from '../../i18n/useLocale'

export function HomeHero() {
  const { path, t } = useLocale()

  return (
    <section className="relative isolate overflow-hidden border-b border-neutral-200 bg-white">
      <img
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-70"
        decoding="async"
        fetchPriority="high"
        src={heroImage}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.92)_45%,rgba(255,255,255,0.7)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-white to-transparent" />

      <div className="mx-auto flex min-h-[calc(100svh-76px)] w-full max-w-6xl items-center px-6 py-20 sm:min-h-[680px] sm:py-28">
        <div className="max-w-4xl">
          <p className="inline-flex rounded-full border border-neutral-200 bg-white/80 px-4 py-2 text-sm font-medium text-neutral-600 shadow-sm backdrop-blur">
            {t.home.hero.eyebrow}
          </p>
          <h1 className="mt-8 max-w-4xl text-5xl font-semibold tracking-normal text-neutral-950 sm:text-6xl lg:text-7xl">
            {t.home.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600 sm:text-xl">
            {t.home.hero.description}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800"
              to={path('evlio')}
            >
              {t.home.hero.primaryCta}
            </Link>
            <Link
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white/80 px-6 py-3 text-sm font-semibold text-neutral-950 shadow-sm backdrop-blur transition hover:border-neutral-400 hover:bg-white"
              to={path('support')}
            >
              {t.home.hero.secondaryCta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

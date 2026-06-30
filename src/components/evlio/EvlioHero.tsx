import { useLocale } from '../../i18n/useLocale'
import { EvlioPhoneMockup } from './EvlioPhoneMockup'

export function EvlioHero() {
  const { t } = useLocale()

  return (
    <section className="relative isolate overflow-hidden border-b border-neutral-200 bg-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_18%,rgba(186,230,253,0.42),transparent_34%),radial-gradient(circle_at_85%_70%,rgba(209,250,229,0.48),transparent_34%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-36 bg-gradient-to-t from-white to-transparent" />

      <div className="mx-auto grid min-h-[calc(100svh-76px)] w-full max-w-6xl items-center gap-12 px-6 py-20 sm:min-h-[680px] lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="inline-flex rounded-full border border-neutral-200 bg-white/80 px-4 py-2 text-sm font-medium text-neutral-600 shadow-sm backdrop-blur">
            {t.evlio.hero.eyebrow}
          </p>
          <h1 className="mt-8 max-w-3xl text-5xl font-semibold tracking-normal text-neutral-950 sm:text-6xl lg:text-7xl">
            {t.evlio.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600 sm:text-xl">
            {t.evlio.hero.description}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <button
              className="inline-flex cursor-not-allowed items-center justify-center rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white opacity-75 shadow-sm"
              disabled
              type="button"
            >
              {t.evlio.hero.appStore}
            </button>
            <button
              className="inline-flex cursor-not-allowed items-center justify-center rounded-full border border-neutral-300 bg-white/80 px-6 py-3 text-sm font-semibold text-neutral-700 opacity-75 shadow-sm backdrop-blur"
              disabled
              type="button"
            >
              {t.evlio.hero.googlePlay}
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-sky-100 to-emerald-100 blur-3xl" />
          <EvlioPhoneMockup />
        </div>
      </div>
    </section>
  )
}

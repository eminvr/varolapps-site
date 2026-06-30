import { useLocale } from '../../i18n/useLocale'
import { EvlioSection } from './EvlioSection'
import { EvlioSectionIntro } from './EvlioSectionIntro'

export function EvlioHowItWorks() {
  const { t } = useLocale()

  return (
    <EvlioSection className="pt-8">
      <div className="rounded-[2rem] border border-neutral-200 bg-gradient-to-b from-neutral-50 to-white p-6 sm:p-10">
        <EvlioSectionIntro title={t.evlio.howItWorks.title} />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {t.evlio.howItWorks.steps.map((step, index) => (
            <article className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm" key={step.title}>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-950 text-sm font-semibold text-white">
                {index + 1}
              </span>
              <h3 className="mt-6 text-lg font-semibold text-neutral-950">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </EvlioSection>
  )
}

import { useLocale } from '../../i18n/useLocale'
import { EvlioSection } from './EvlioSection'
import { EvlioSectionIntro } from './EvlioSectionIntro'

export function EvlioFeatures() {
  const { t } = useLocale()

  return (
    <EvlioSection>
      <EvlioSectionIntro align="center" title={t.evlio.features.title} />
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {t.evlio.features.items.map((feature) => (
          <article
            className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)]"
            key={feature.title}
          >
            <div className="mb-5 h-10 w-10 rounded-2xl bg-gradient-to-br from-sky-100 to-emerald-100" />
            <h3 className="text-lg font-semibold text-neutral-950">{feature.title}</h3>
            <p className="mt-3 text-sm leading-6 text-neutral-600">{feature.description}</p>
          </article>
        ))}
      </div>
    </EvlioSection>
  )
}

import { useLocale } from '../../i18n/useLocale'
import { HomeSection } from './HomeSection'
import { SectionIntro } from './SectionIntro'

export function StudioSection() {
  const { t } = useLocale()

  return (
    <HomeSection className="pt-8">
      <SectionIntro align="center" title={t.home.studio.title} />
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {t.home.studio.features.map((feature) => (
          <article
            className="rounded-3xl border border-neutral-200 bg-gradient-to-b from-white to-neutral-50 p-6 shadow-sm"
            key={feature.title}
          >
            <h3 className="text-lg font-semibold text-neutral-950">{feature.title}</h3>
            <p className="mt-3 text-sm leading-6 text-neutral-600">{feature.description}</p>
          </article>
        ))}
      </div>
    </HomeSection>
  )
}

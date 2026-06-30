import { useLocale } from '../../i18n/useLocale'
import { EvlioPhoneMockup } from './EvlioPhoneMockup'
import { EvlioSection } from './EvlioSection'
import { EvlioSectionIntro } from './EvlioSectionIntro'

export function EvlioScreenshots() {
  const { t } = useLocale()

  return (
    <EvlioSection>
      <EvlioSectionIntro
        align="center"
        description={t.evlio.screenshots.description}
        title={t.evlio.screenshots.title}
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {t.evlio.screenshots.items.map((screen) => (
          <article
            className="rounded-[2rem] border border-neutral-200 bg-gradient-to-b from-white to-neutral-50 p-5 text-center shadow-sm"
            key={screen}
          >
            <EvlioPhoneMockup title={screen} variant="compact" />
            <h3 className="mt-6 text-lg font-semibold text-neutral-950">{screen}</h3>
          </article>
        ))}
      </div>
    </EvlioSection>
  )
}

import { useLocale } from '../../i18n/useLocale'
import { EvlioSection } from './EvlioSection'
import { EvlioSectionIntro } from './EvlioSectionIntro'

export function EvlioFaq() {
  const { t } = useLocale()

  return (
    <EvlioSection className="pt-8">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <EvlioSectionIntro title={t.evlio.faq.title} />
        <div className="divide-y divide-neutral-200 rounded-3xl border border-neutral-200 bg-white shadow-sm">
          {t.evlio.faq.items.map((faq) => (
            <article className="p-6" key={faq.question}>
              <h3 className="text-base font-semibold text-neutral-950">{faq.question}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </EvlioSection>
  )
}

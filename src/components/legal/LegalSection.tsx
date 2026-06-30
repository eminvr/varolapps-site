import { Link } from 'react-router'
import { localizePath } from '../../i18n/routes'
import { useLocale } from '../../i18n/useLocale'
import type { LegalSectionData } from '../../types/legal'

type LegalSectionProps = {
  section: LegalSectionData
}

export function LegalSection({ section }: LegalSectionProps) {
  const { locale } = useLocale()

  return (
    <section className="scroll-mt-28 border-b border-neutral-200 py-10 last:border-b-0" id={section.id}>
      <h2 className="text-2xl font-semibold tracking-normal text-neutral-950">{section.title}</h2>

      {section.paragraphs?.map((paragraph) => (
        <p className="mt-4 text-base leading-8 text-neutral-600" key={paragraph}>
          {paragraph}
        </p>
      ))}

      {section.bullets ? (
        <ul className="mt-5 space-y-3">
          {section.bullets.map((bullet) => (
            <li className="flex gap-3 text-base leading-7 text-neutral-600" key={bullet}>
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-950" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {section.links ? (
        <div className="mt-6 grid gap-3">
          {section.links.map((link) => (
            <Link
              className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm font-semibold text-neutral-950 transition hover:border-neutral-300 hover:bg-white"
              key={link.to}
              to={localizePath(link.to, locale)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      ) : null}

      {section.faqs ? (
        <div className="mt-6 divide-y divide-neutral-200 rounded-3xl border border-neutral-200 bg-neutral-50">
          {section.faqs.map((faq) => (
            <article className="p-5" key={faq.question}>
              <h3 className="text-base font-semibold text-neutral-950">{faq.question}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600">{faq.answer}</p>
            </article>
          ))}
        </div>
      ) : null}
    </section>
  )
}

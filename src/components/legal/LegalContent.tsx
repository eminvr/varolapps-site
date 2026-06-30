import type { LegalSectionData } from '../../types/legal'
import { LegalSection } from './LegalSection'

type LegalContentProps = {
  sections: LegalSectionData[]
}

export function LegalContent({ sections }: LegalContentProps) {
  return (
    <article className="rounded-3xl border border-neutral-200 bg-white px-6 shadow-sm sm:px-8">
      {sections.map((section) => (
        <LegalSection key={section.id} section={section} />
      ))}
    </article>
  )
}

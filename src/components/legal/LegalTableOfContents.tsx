import type { LegalSectionData } from '../../types/legal'

type LegalTableOfContentsProps = {
  sections: LegalSectionData[]
  label: string
}

export function LegalTableOfContents({ sections, label }: LegalTableOfContentsProps) {
  return (
    <nav
      aria-label="Table of contents"
      className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm lg:sticky lg:top-24"
    >
      <p className="text-sm font-semibold text-neutral-950">{label}</p>
      <ol className="mt-4 space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <a className="text-sm leading-6 text-neutral-600 hover:text-neutral-950" href={`#${section.id}`}>
              {section.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

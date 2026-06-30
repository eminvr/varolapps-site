import type { LegalSectionData } from '../../types/legal'
import { ContactCard } from './ContactCard'
import { LegalTableOfContents } from './LegalTableOfContents'

type LegalSidebarProps = {
  sections: LegalSectionData[]
  contactEmail?: string
  contactDescription: string
  contactTitle: string
  tocLabel: string
}

export function LegalSidebar({ sections, contactDescription, contactEmail, contactTitle, tocLabel }: LegalSidebarProps) {
  return (
    <div>
      <LegalTableOfContents label={tocLabel} sections={sections} />
      {contactEmail ? <ContactCard description={contactDescription} email={contactEmail} title={contactTitle} /> : null}
    </div>
  )
}

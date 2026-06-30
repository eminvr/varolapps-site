import { Seo } from '../components/common/Seo'
import { PagePlaceholder } from '../components/ui/PagePlaceholder'
import { routePaths } from '../utils/site'

export function TermsPage() {
  return (
    <>
      <Seo
        canonical={routePaths.terms}
        description="Terms of service placeholder for Varol Apps."
        title="Terms"
      />
      <PagePlaceholder
        description="Terms content will be added in a later iteration."
        eyebrow="Legal"
        title="Terms"
      />
    </>
  )
}

import { Seo } from '../components/common/Seo'
import { PagePlaceholder } from '../components/ui/PagePlaceholder'
import { routePaths } from '../utils/site'

export function SupportPage() {
  return (
    <>
      <Seo
        canonical={routePaths.support}
        description="Support placeholder for Varol Apps."
        title="Support"
      />
      <PagePlaceholder
        description="Support details will be added in a later iteration."
        eyebrow="Help"
        title="Support"
      />
    </>
  )
}

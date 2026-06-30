import { Seo } from '../components/common/Seo'
import { PagePlaceholder } from '../components/ui/PagePlaceholder'
import { routePaths } from '../utils/site'

export function PrivacyPage() {
  return (
    <>
      <Seo
        canonical={routePaths.privacy}
        description="Privacy policy placeholder for Varol Apps."
        title="Privacy"
      />
      <PagePlaceholder
        description="Privacy policy content will be added in a later iteration."
        eyebrow="Legal"
        title="Privacy"
      />
    </>
  )
}

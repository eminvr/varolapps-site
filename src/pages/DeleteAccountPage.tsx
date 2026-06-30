import { Seo } from '../components/common/Seo'
import { PagePlaceholder } from '../components/ui/PagePlaceholder'
import { routePaths } from '../utils/site'

export function DeleteAccountPage() {
  return (
    <>
      <Seo
        canonical={routePaths.deleteAccount}
        description="Delete account instructions placeholder for Varol Apps."
        title="Delete Account"
      />
      <PagePlaceholder
        description="Account deletion instructions will be added in a later iteration."
        eyebrow="Account"
        title="Delete Account"
      />
    </>
  )
}

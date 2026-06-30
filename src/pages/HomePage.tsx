import { Seo } from '../components/common/Seo'
import { PagePlaceholder } from '../components/ui/PagePlaceholder'
import { routePaths, siteConfig } from '../utils/site'

export function HomePage() {
  return (
    <>
      <Seo
        canonical={routePaths.home}
        description={siteConfig.defaultDescription}
        title="Home"
      />
      <PagePlaceholder
        description="This is the first iteration scaffold for the Varol Apps website."
        eyebrow="Placeholder"
        title="Varol Apps"
      />
    </>
  )
}

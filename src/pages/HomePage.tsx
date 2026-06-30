import { Seo } from '../components/common/Seo'
import { AppsSection } from '../components/home/AppsSection'
import { HomeCta } from '../components/home/HomeCta'
import { HomeHero } from '../components/home/HomeHero'
import { StudioSection } from '../components/home/StudioSection'
import { routePaths } from '../utils/site'

export function HomePage() {
  return (
    <>
      <Seo
        canonical={routePaths.home}
        description="Varol Apps develops simple, modern and useful mobile applications. Discover Evlio and upcoming apps."
        title="Varol Apps | Modern Mobile Applications"
      />
      <HomeHero />
      <AppsSection />
      <StudioSection />
      <HomeCta />
    </>
  )
}

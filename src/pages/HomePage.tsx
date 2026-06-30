import { Seo } from '../components/common/Seo'
import { AppsSection } from '../components/home/AppsSection'
import { HomeCta } from '../components/home/HomeCta'
import { HomeHero } from '../components/home/HomeHero'
import { StudioSection } from '../components/home/StudioSection'
import { alternateUrls, canonicalUrl, localizedRoutes } from '../i18n/routes'
import { useLocale } from '../i18n/useLocale'

export function HomePage() {
  const { locale, t } = useLocale()

  return (
    <>
      <Seo
        alternates={alternateUrls(localizedRoutes.home)}
        canonical={canonicalUrl(localizedRoutes.home, locale)}
        description={t.home.seo.description}
        locale={locale}
        title={t.home.seo.title}
      />
      <HomeHero />
      <AppsSection />
      <StudioSection />
      <HomeCta />
    </>
  )
}

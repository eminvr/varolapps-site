import { Seo } from '../components/common/Seo'
import { EvlioCta } from '../components/evlio/EvlioCta'
import { EvlioFaq } from '../components/evlio/EvlioFaq'
import { EvlioFeatures } from '../components/evlio/EvlioFeatures'
import { EvlioHero } from '../components/evlio/EvlioHero'
import { EvlioHowItWorks } from '../components/evlio/EvlioHowItWorks'
import { EvlioScreenshots } from '../components/evlio/EvlioScreenshots'
import { alternateUrls, canonicalUrl, localizedRoutes } from '../i18n/routes'
import { useLocale } from '../i18n/useLocale'

export function EvlioPage() {
  const { locale, t } = useLocale()

  return (
    <>
      <Seo
        alternates={alternateUrls(localizedRoutes.evlio)}
        canonical={canonicalUrl(localizedRoutes.evlio, locale)}
        description={t.evlio.seo.description}
        locale={locale}
        ogDescription={t.evlio.seo.ogDescription}
        ogTitle={t.evlio.seo.title}
        title={t.evlio.seo.title}
      />
      <EvlioHero />
      <EvlioFeatures />
      <EvlioHowItWorks />
      <EvlioScreenshots />
      <EvlioFaq />
      <EvlioCta />
    </>
  )
}

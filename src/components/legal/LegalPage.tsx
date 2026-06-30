import { Seo } from '../common/Seo'
import { alternateUrls, canonicalUrl, localizedRoutes } from '../../i18n/routes'
import { useLocale } from '../../i18n/useLocale'
import type { LegalPageData } from '../../types/legal'
import { LegalContent } from './LegalContent'
import { LegalHero } from './LegalHero'
import { LegalSidebar } from './LegalSidebar'

type LegalPageProps = {
  page: LegalPageData
}

export function LegalPage({ page }: LegalPageProps) {
  const { locale, t } = useLocale()
  const basePath = localizedRoutes[page.routeKey]

  return (
    <>
      <Seo
        alternates={alternateUrls(basePath)}
        canonical={canonicalUrl(basePath, locale)}
        description={page.seoDescription}
        locale={locale}
        ogDescription={page.ogDescription}
        ogTitle={page.ogTitle}
        title={page.seoTitle}
      />
      <LegalHero
        description={page.description}
        eyebrow={page.eyebrow}
        title={page.title}
        updatedLabel={t.common.lastUpdated}
        updatedAt={page.updatedAt}
      />
      <section className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-12 sm:py-16 lg:grid-cols-[280px_1fr] lg:items-start">
        <LegalSidebar
          contactDescription={t.common.contactSupport}
          contactEmail={page.contactEmail}
          contactTitle={t.common.needHelp}
          sections={page.sections}
          tocLabel={t.common.onThisPage}
        />
        <LegalContent sections={page.sections} />
      </section>
    </>
  )
}

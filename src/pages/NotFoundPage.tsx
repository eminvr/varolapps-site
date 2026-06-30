import { Link } from 'react-router'
import { Seo } from '../components/common/Seo'
import { PagePlaceholder } from '../components/ui/PagePlaceholder'
import { canonicalUrl, localizedRoutes } from '../i18n/routes'
import { useLocale } from '../i18n/useLocale'

export function NotFoundPage() {
  const { locale, path, t } = useLocale()

  return (
    <>
      <Seo
        canonical={canonicalUrl(localizedRoutes.home, locale)}
        description={t.common.notFound.description}
        locale={locale}
        title={t.common.notFound.title}
      />
      <PagePlaceholder
        description={t.common.notFound.description}
        eyebrow="404"
        title={t.common.notFound.title}
      >
        <Link className="font-medium text-neutral-950 underline underline-offset-4" to={path('home')}>
          {t.common.notFound.action}
        </Link>
      </PagePlaceholder>
    </>
  )
}

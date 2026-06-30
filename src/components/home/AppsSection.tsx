import { apps } from '../../data/apps'
import { useLocale } from '../../i18n/useLocale'
import { AppCard } from './AppCard'
import { HomeSection } from './HomeSection'
import { SectionIntro } from './SectionIntro'

export function AppsSection() {
  const { t } = useLocale()

  return (
    <HomeSection>
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <SectionIntro
          description={t.home.apps.description}
          title={t.home.apps.title}
        />
        <div className="grid gap-5">
          {apps.map((app) => (
            <AppCard app={app} key={app.id} />
          ))}
        </div>
      </div>
    </HomeSection>
  )
}

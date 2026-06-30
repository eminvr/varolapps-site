import { apps } from '../../data/apps'
import { AppCard } from './AppCard'
import { HomeSection } from './HomeSection'
import { SectionIntro } from './SectionIntro'

export function AppsSection() {
  return (
    <HomeSection>
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <SectionIntro
          description="Varol Apps çatısı altında geliştirilen mobil ürünler."
          title="Uygulamalar"
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

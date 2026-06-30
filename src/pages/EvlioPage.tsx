import { Seo } from '../components/common/Seo'
import { PagePlaceholder } from '../components/ui/PagePlaceholder'
import { evlioApp } from '../data/apps'

export function EvlioPage() {
  return (
    <>
      <Seo
        canonical={evlioApp.path}
        description={evlioApp.description}
        title={evlioApp.name}
      />
      <PagePlaceholder
        description={evlioApp.description}
        eyebrow="App"
        title={evlioApp.name}
      />
    </>
  )
}

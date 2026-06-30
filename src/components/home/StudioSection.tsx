import { HomeSection } from './HomeSection'
import { SectionIntro } from './SectionIntro'

const studioFeatures = [
  {
    title: 'Minimal deneyim',
    description: 'Karmaşık süreçleri sade arayüzlerle daha yönetilebilir hale getiririz.',
  },
  {
    title: 'Mobile-first yaklaşım',
    description: 'Ürünleri en baştan telefon ekranı ve gerçek kullanım alışkanlıkları için tasarlarız.',
  },
  {
    title: 'Uzun vadeli yapı',
    description: 'Her uygulama, ileride büyüyebilecek temiz ve sürdürülebilir bir ürün mantığıyla geliştirilir.',
  },
] as const

export function StudioSection() {
  return (
    <HomeSection className="pt-8">
      <SectionIntro align="center" title="Basit, hızlı ve düşünülmüş ürünler." />
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {studioFeatures.map((feature) => (
          <article
            className="rounded-3xl border border-neutral-200 bg-gradient-to-b from-white to-neutral-50 p-6 shadow-sm"
            key={feature.title}
          >
            <h3 className="text-lg font-semibold text-neutral-950">{feature.title}</h3>
            <p className="mt-3 text-sm leading-6 text-neutral-600">{feature.description}</p>
          </article>
        ))}
      </div>
    </HomeSection>
  )
}

type LegalHeroProps = {
  eyebrow: string
  title: string
  description: string
  updatedAt: string
  updatedLabel: string
}

export function LegalHero({ eyebrow, title, description, updatedAt, updatedLabel }: LegalHeroProps) {
  return (
    <section className="border-b border-neutral-200 bg-gradient-to-b from-neutral-50 to-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
        <p className="inline-flex rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-600 shadow-sm">
          {eyebrow}
        </p>
        <h1 className="mt-8 max-w-4xl text-4xl font-semibold tracking-normal text-neutral-950 sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-neutral-600 sm:text-lg">{description}</p>
        <p className="mt-6 text-sm text-neutral-500">
          {updatedLabel}: {updatedAt}
        </p>
      </div>
    </section>
  )
}

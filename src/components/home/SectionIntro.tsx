type SectionIntroProps = {
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionIntro({ title, description, align = 'left' }: SectionIntroProps) {
  const isCentered = align === 'center'

  return (
    <div className={isCentered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <h2 className="text-3xl font-semibold tracking-normal text-neutral-950 sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-neutral-600 sm:text-lg">{description}</p>
      ) : null}
    </div>
  )
}

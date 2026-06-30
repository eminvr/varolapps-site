import type { ReactNode } from 'react'

type PagePlaceholderProps = {
  eyebrow?: string
  title: string
  description: string
  children?: ReactNode
}

export function PagePlaceholder({ eyebrow, title, description, children }: PagePlaceholderProps) {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-16 sm:py-20">
      {eyebrow ? (
        <p className="mb-3 text-sm font-medium uppercase tracking-wide text-neutral-500">{eyebrow}</p>
      ) : null}
      <h1 className="text-3xl font-semibold tracking-normal text-neutral-950 sm:text-4xl">{title}</h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600">{description}</p>
      {children ? <div className="mt-8 text-sm leading-6 text-neutral-600">{children}</div> : null}
    </section>
  )
}

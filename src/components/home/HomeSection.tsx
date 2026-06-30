import type { ReactNode } from 'react'

type HomeSectionProps = {
  children: ReactNode
  className?: string
}

export function HomeSection({ children, className = '' }: HomeSectionProps) {
  return (
    <section className={`mx-auto w-full max-w-6xl px-6 py-16 sm:py-24 ${className}`}>
      {children}
    </section>
  )
}

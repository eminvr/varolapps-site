type ContactCardProps = {
  email: string
  title: string
  description: string
}

export function ContactCard({ email, title, description }: ContactCardProps) {
  return (
    <aside className="mt-5 rounded-3xl border border-neutral-200 bg-neutral-950 p-5 text-white shadow-sm">
      <p className="text-sm font-semibold">{title}</p>
      <p className="mt-2 text-sm leading-6 text-neutral-300">{description}</p>
      <a className="mt-4 inline-flex text-sm font-semibold underline underline-offset-4" href={`mailto:${email}`}>
        {email}
      </a>
    </aside>
  )
}

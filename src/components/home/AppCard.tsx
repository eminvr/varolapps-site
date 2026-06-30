import { Link } from 'react-router'
import type { AppInfo } from '../../types/app'

const statusLabels: Record<AppInfo['status'], string> = {
  active: 'Yayında',
  'coming-soon': 'Yakında',
}

type AppCardProps = {
  app: AppInfo
}

export function AppCard({ app }: AppCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(15,23,42,0.12)]">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-sky-50 to-transparent" />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-950 text-xl font-semibold text-white shadow-sm">
            {app.name.charAt(0)}
          </div>
          <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            {statusLabels[app.status]}
          </span>
        </div>

        <h3 className="mt-8 text-2xl font-semibold tracking-normal text-neutral-950">{app.name}</h3>
        <p className="mt-3 max-w-xl text-base leading-7 text-neutral-600">{app.description}</p>

        <Link
          className="mt-8 inline-flex text-sm font-semibold text-neutral-950 underline decoration-neutral-300 underline-offset-4 transition group-hover:decoration-neutral-950"
          to={app.path}
        >
          Detayları Gör
        </Link>
      </div>
    </article>
  )
}

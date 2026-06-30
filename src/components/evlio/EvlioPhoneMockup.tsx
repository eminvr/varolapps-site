import { useLocale } from '../../i18n/useLocale'

type EvlioPhoneMockupProps = {
  title?: string
  variant?: 'hero' | 'compact'
}

export function EvlioPhoneMockup({ title = 'Evlio', variant = 'hero' }: EvlioPhoneMockupProps) {
  const isHero = variant === 'hero'
  const { t } = useLocale()

  return (
    <div
      className={[
        'relative mx-auto overflow-hidden rounded-[2.2rem] border border-neutral-200 bg-neutral-950 p-2 shadow-[0_30px_90px_rgba(15,23,42,0.2)]',
        isHero ? 'w-full max-w-[320px]' : 'w-full max-w-[260px]',
      ].join(' ')}
    >
      <div className="rounded-[1.8rem] bg-white p-4">
        <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-neutral-200" />
        <div className="rounded-3xl bg-gradient-to-br from-sky-50 via-white to-emerald-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">{title}</p>
          <h3 className="mt-2 text-xl font-semibold tracking-normal text-neutral-950">{t.evlio.mockup.title}</h3>
          <div className="mt-5 space-y-3">
            {t.evlio.mockup.items.map((item, index) => (
              <div className="rounded-2xl border border-white/80 bg-white/85 p-3 shadow-sm" key={item}>
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium text-neutral-950">{item}</p>
                    <div className="mt-2 h-1.5 w-24 rounded-full bg-neutral-200">
                      <div
                        className="h-1.5 rounded-full bg-neutral-950"
                        style={{ width: `${48 + index * 16}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-700">
                    {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 grid grid-cols-3 gap-2">
            <div className="h-16 rounded-2xl bg-white/80 shadow-sm" />
            <div className="h-16 rounded-2xl bg-white/80 shadow-sm" />
            <div className="h-16 rounded-2xl bg-white/80 shadow-sm" />
          </div>
        </div>
      </div>
    </div>
  )
}

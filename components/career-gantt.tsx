import { careerTimeline } from '@/lib/site-data'

const TODAY = 2026.75

export function CareerGantt() {
  const { start, end, rows, milestones } = careerTimeline
  const span = end - start
  const toPercent = (year: number) => ((year - start) / span) * 100
  const years = Array.from({ length: end - start }, (_, i) => start + i)

  return (
    <figure className="rounded-lg border border-foreground/80 bg-card">
      <figcaption className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-3 font-mono text-xs">
        <span className="font-medium uppercase tracking-widest">Career schedule</span>
        <span className="flex items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span aria-hidden="true" className="block h-2 w-4 rounded-sm bg-primary" />
            Rol
          </span>
          <span className="flex items-center gap-1.5">
            <span aria-hidden="true" className="block size-2 rotate-45 bg-marker ring-1 ring-foreground" />
            Sertifika
          </span>
        </span>
      </figcaption>

      <div className="overflow-x-auto">
        <div className="min-w-[44rem]">
          <div className="grid grid-cols-[10rem_1fr] sm:grid-cols-[14rem_1fr] border-b border-border font-mono text-xs text-muted-foreground">
            <div className="px-4 py-2">Rol / organisation</div>
            <div className="relative">
              {years.map((year) => (
                <span key={year} className="absolute top-2 pl-1" style={{ left: `${toPercent(year)}%` }}>
                  {"'" + String(year).slice(2)}
                </span>
              ))}
              <span
                className="absolute top-1.5 -translate-x-full rounded-l-sm bg-primary px-1.5 py-0.5 text-primary-foreground"
                style={{ left: `${toPercent(TODAY)}%` }}
              >
                Bugün
              </span>
            </div>
          </div>

          <ul>
            {rows.map((row, index) => {
              const rowEnd = row.end ?? TODAY
              return (
                <li key={row.role} className="grid grid-cols-[10rem_1fr] sm:grid-cols-[14rem_1fr] border-b border-border last:border-b-0">
                  <div className="flex flex-col px-4 py-3">
                    <span className="text-sm font-medium leading-snug">{row.role}</span>
                    <span className="font-mono text-xs text-muted-foreground">{row.org}</span>
                  </div>
                  <div className="relative">
                    {years.map((year) => (
                      <span
                        key={year}
                        aria-hidden="true"
                        className="absolute inset-y-0 border-l border-dashed border-border"
                        style={{ left: `${toPercent(year)}%` }}
                      />
                    ))}
                    <span
                      aria-hidden="true"
                      className="absolute inset-y-0 border-l-2 border-primary/70"
                      style={{ left: `${toPercent(TODAY)}%` }}
                    />
                    <div
                      className="absolute top-1/2 h-5 -translate-y-1/2"
                      style={{ left: `${toPercent(row.start)}%`, width: `${toPercent(rowEnd) - toPercent(row.start)}%` }}
                    >
                      <span
                        className={`animate-bar-grow block h-full rounded-sm ${row.end === null ? 'bg-primary' : 'bg-foreground/85'}`}
                        style={{ animationDelay: `${300 + index * 180}ms` }}
                      />
                    </div>
                    <span className="sr-only">
                      {`${Math.floor(row.start)} to ${row.end === null ? 'present' : Math.floor(row.end)}`}
                    </span>
                  </div>
                </li>
              )
            })}

            <li className="grid grid-cols-[10rem_1fr] sm:grid-cols-[14rem_1fr] border-t border-border">
              <div className="px-4 py-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">Milestones</div>
              <div className="relative h-14">
                {milestones.map((m, index) => (
                  <span
                    key={m.label}
                    className="animate-rise-in absolute top-2 flex -translate-x-1/2 flex-col items-center gap-1"
                    style={{ left: `${toPercent(m.at)}%`, animationDelay: `${1100 + index * 120}ms` }}
                  >
                    <span aria-hidden="true" className="block size-2.5 rotate-45 bg-marker ring-1 ring-foreground" />
                    <span className="whitespace-nowrap font-mono text-xs">{m.label}</span>
                  </span>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </figure>
  )
}

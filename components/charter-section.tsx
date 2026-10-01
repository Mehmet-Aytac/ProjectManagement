import { charter, profile } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

const principles = [
  'Yazılı hale getir. Bulunamayan bir karar, alınmamış bir karardır.',
  'Kötü haber önce gelsin. Riskleri cuma yerine pazartesi konuşmak daha ucuzdur.',
  'Plan ekibe hizmet eder; ekip plana değil.',
  'Tasarım, teslimatın bir parçasıdır; öncesindeki ayrı bir aşama değil.',
]

export function CharterSection() {
  return (
    <section id="charter" aria-labelledby="charter-title" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        id="charter-title"
        code="1.0"
        kicker="Kişisel yaklaşım"
        title="Ben kimim? Bir proje özeti yazar gibi anlatayım."
      />

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <dl className="overflow-hidden rounded-lg border border-foreground/80 bg-card">
          {charter.map((item) => (
            <div
              key={item.label}
              className="grid gap-1 border-b border-border px-5 py-4 last:border-b-0 sm:grid-cols-[8rem_1fr] sm:gap-6"
            >
              <dt className="font-mono text-xs uppercase tracking-widest text-primary sm:pt-1">{item.label}</dt>
              <dd className="text-pretty leading-relaxed">{item.value}</dd>
            </div>
          ))}
          <div className="grid gap-1 bg-secondary px-5 py-4 sm:grid-cols-[8rem_1fr] sm:gap-6">
            <dt className="font-mono text-xs uppercase tracking-widest text-primary sm:pt-1">Sonraki adım</dt>
            <dd className="leading-relaxed">{profile.availability}</dd>
          </div>
        </dl>

        <div className="flex flex-col gap-4">
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Çalışma ilkeleri</h3>
          <ul className="flex flex-col gap-3">
            {principles.map((principle) => (
              <li key={principle} className="flex gap-3 leading-relaxed">
                <span
                  aria-hidden="true"
                  className="mt-1.5 flex size-4 shrink-0 items-center justify-center rounded-sm border border-foreground"
                >
                  <span className="block size-2 rounded-[1px] bg-primary" />
                </span>
                <span className="text-pretty">{principle}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

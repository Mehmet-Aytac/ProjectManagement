import { charter, profile } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

const principles = [
  'Write it down. A decision nobody can find is a decision nobody made.',
  'Bad news travels first. Risks are cheaper on Monday than on Friday.',
  'The plan serves the team, not the other way around.',
  'Design is part of delivery, not a phase before it.',
]

export function CharterSection() {
  return (
    <section id="charter" aria-labelledby="charter-title" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        id="charter-title"
        code="1.0"
        kicker="Personal charter"
        title="Who I am, written the way I write a project brief."
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
            <dt className="font-mono text-xs uppercase tracking-widest text-primary sm:pt-1">Next window</dt>
            <dd className="leading-relaxed">{profile.availability}</dd>
          </div>
        </dl>

        <div className="flex flex-col gap-4">
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Working agreements</h3>
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

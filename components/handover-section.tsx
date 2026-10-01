import { ArrowUpRight, Mail } from 'lucide-react'
import { profile } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

export function HandoverSection() {
  const contacts = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { label: 'LinkedIn', value: profile.links.linkedin.replace('https://www.', ''), href: profile.links.linkedin },
    { label: 'GitHub', value: profile.links.github.replace('https://', ''), href: profile.links.github },
    { label: 'Based in', value: profile.location },
  ]

  return (
    <section id="handover" aria-labelledby="handover-title" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading id="handover-title" code="5.0" kicker="Handover & sign-off" title="Have a project that needs a steady hand?" />

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <div className="flex flex-col gap-6">
          <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            {"Whether it's a full product launch, a project that has drifted off schedule, or a website that needs a designer who also understands delivery — send me a short note. I reply within two working days."}
          </p>
          <a
            href={`mailto:${profile.email}?subject=${encodeURIComponent('New project')}`}
            className="inline-flex w-fit items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Mail className="size-4" aria-hidden="true" />
            Start a conversation
          </a>
        </div>

        <div className="rounded-lg border border-foreground/80 bg-card">
          <dl>
            {contacts.map((c) => (
              <div key={c.label} className="grid grid-cols-[6rem_1fr] gap-4 border-b border-border px-5 py-4">
                <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{c.label}</dt>
                <dd className="min-w-0 truncate">
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith('http') ? '_blank' : undefined}
                      rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="inline-flex items-center gap-1 underline-offset-4 hover:text-primary hover:underline"
                    >
                      {c.value}
                      {c.href.startsWith('http') ? <ArrowUpRight className="size-3.5" aria-hidden="true" /> : null}
                    </a>
                  ) : (
                    c.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
          <div className="grid grid-cols-2 gap-6 px-5 pb-5 pt-8 font-mono text-xs text-muted-foreground">
            <div className="flex flex-col gap-2">
              <span className="h-8 border-b border-foreground font-sans text-xl italic text-primary">{profile.name}</span>
              <span>Project lead</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="h-8 border-b border-dashed border-foreground" />
              <span>You — next project</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

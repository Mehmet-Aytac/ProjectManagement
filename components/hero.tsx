import Image from 'next/image'
import { ArrowDown, Download } from 'lucide-react'
import { asset } from '@/lib/asset'
import { profile } from '@/lib/site-data'
import { CareerGantt } from '@/components/career-gantt'

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="graph-paper border-b border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-5 pb-14 pt-10 md:pb-20 md:pt-16">
        <div className="grid gap-10 md:grid-cols-[1fr_17rem] md:items-end lg:grid-cols-[1fr_19rem]">
          <div className="animate-rise-in flex flex-col gap-6">
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              <span className="text-foreground">Project: {profile.name}</span>
              <span aria-hidden="true">/</span>
              <span>{profile.revision}</span>
              <span aria-hidden="true">/</span>
              <span className="rounded-sm bg-marker px-1.5 py-0.5 text-marker-foreground">Status: In progress</span>
            </p>

            <h1 id="hero-title" className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              I lead software projects from a blank whiteboard to a <span className="marker-highlight">shipped product</span>.
            </h1>

            <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">{profile.intro}</p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#deliverables"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                See my work
                <ArrowDown className="size-4" aria-hidden="true" />
              </a>
              <a
                href="#toolkit"
                className="inline-flex items-center gap-2 rounded-md border border-foreground px-5 py-3 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
              >
                <Download className="size-4" aria-hidden="true" />
                Free PM templates
              </a>
            </div>
          </div>

          <figure className="animate-rise-in relative mx-auto w-full max-w-72 md:max-w-none" style={{ animationDelay: '150ms' }}>
            <div className="-rotate-2 rounded-md border border-foreground/80 bg-card p-2 shadow-[6px_6px_0_0_var(--foreground)] transition-transform duration-500 hover:rotate-0">
              <span
                aria-hidden="true"
                className="absolute -top-3 left-1/2 z-10 h-6 w-20 -translate-x-1/2 rotate-3 bg-marker/80"
              />
              <Image
                src={asset('/images/portrait.png')}
                alt={`Portrait of ${profile.name} in front of a planning whiteboard`}
                width={600}
                height={750}
                priority
                className="aspect-[4/5] w-full rounded-sm object-cover"
              />
              <figcaption className="flex items-center justify-between px-1 pb-1 pt-2 font-mono text-xs text-muted-foreground">
                <span>Fig. 1 — The project lead</span>
                <span>{profile.location.split(' ·')[0]}</span>
              </figcaption>
            </div>
          </figure>
        </div>

        <CareerGantt />
      </div>
    </section>
  )
}

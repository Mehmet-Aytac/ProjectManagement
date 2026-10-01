import { ArrowDown, Download } from 'lucide-react'
import { profile } from '@/lib/site-data'
import { CareerGantt } from '@/components/career-gantt'

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="graph-paper border-b border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-5 pb-14 pt-10 md:pb-20 md:pt-16">
        <div className="grid gap-10 md:grid-cols-[1fr_17rem] md:items-end lg:grid-cols-[1fr_19rem]">
          <div className="animate-rise-in flex flex-col gap-6">
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              <span className="text-foreground">Proje: {profile.name}</span>
              <span aria-hidden="true">/</span>
              <span>{profile.revision}</span>
              <span aria-hidden="true">/</span>
              <span className="rounded-sm bg-marker px-1.5 py-0.5 text-marker-foreground">Durum: Hazırlanıyor</span>
            </p>

            <h1 id="hero-title" className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Yazılım temeli ve proje yönetimi eğitimiyle, fikirleri planlı ve anlaşılır işlere dönüştürüyorum.
            </h1>

            <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">{profile.intro}</p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#deliverables"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Çalışmalarımı gör
                <ArrowDown className="size-4" aria-hidden="true" />
              </a>
              <a
                href="#toolkit"
                className="inline-flex items-center gap-2 rounded-md border border-foreground px-5 py-3 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
              >
                <Download className="size-4" aria-hidden="true" />
                Ücretsiz proje şablonları
              </a>
            </div>
          </div>
        </div>

        <CareerGantt />
      </div>
    </section>
  )
}

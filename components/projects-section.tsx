'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { asset } from '@/lib/asset'
import { projects, type ProjectCategory } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const filters: Array<'Tümü' | ProjectCategory> = ['Tümü', 'Software', 'Web design']

export function ProjectsSection() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('Tümü')
  const visible = filter === 'Tümü' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="deliverables" aria-labelledby="deliverables-title" className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading
          id="deliverables-title"
          code="2.0"
          kicker="Çalışmalar"
          title="Geliştirdiğim yazılımlar ve tasarladığım web çalışmaları."
          description="Her çalışma; ne olduğunu, hangi kısmını üstlendiğimi ve ortaya çıkan sonucu açıkça anlatır."
        />

        <div role="group" aria-label="Çalışmaları filtrele" className="mt-10 flex flex-wrap gap-2">
          {filters.map((f) => {
            const count = f === 'Tümü' ? projects.length : projects.filter((p) => p.category === f).length
            return (
              <button
                key={f}
                type="button"
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
                className={cn(
                  'flex items-center gap-2 rounded-md border px-4 py-2 text-sm transition-colors',
                  filter === f
                    ? 'border-foreground bg-foreground text-background'
                    : 'border-border bg-background hover:border-foreground',
                )}
              >
                {f}
                <span className="font-mono text-xs opacity-70">{count}</span>
              </button>
            )
          })}
        </div>

        <ol className="mt-8 flex flex-col">
          {visible.map((project, index) => (
            <li key={project.code} className="border-t border-border py-10 first:border-t-0 first:pt-4">
              <article
                className={cn(
                  'grid gap-8 md:grid-cols-2 md:items-center md:gap-12',
                  index % 2 === 1 && 'md:[&>*:first-child]:order-2',
                )}
              >
                <div className="overflow-hidden rounded-md border border-foreground/80 bg-background">
                  <div className="flex items-center gap-1.5 border-b border-border px-3 py-2" aria-hidden="true">
                    <span className="size-2 rounded-full bg-border" />
                    <span className="size-2 rounded-full bg-border" />
                    <span className="size-2 rounded-full bg-border" />
                    <span className="ml-2 font-mono text-xs text-muted-foreground">{project.code.toLowerCase()}.preview</span>
                  </div>
                  <Image
                    src={asset(project.image)}
                    alt={project.imageAlt}
                    width={1200}
                    height={800}
                    className="aspect-[3/2] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>

                <div className="flex flex-col gap-5">
                  <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                    <span className="text-primary">{project.code}</span>
                    <span className="rounded-sm border border-border px-2 py-0.5 uppercase tracking-widest">{project.category === 'Software' ? 'Yazılım' : 'Web tasarımı'}</span>
                    <span className="text-muted-foreground">{project.period}</span>
                  </div>

                  <h3 className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">{project.title}</h3>

                  <p className="text-pretty leading-relaxed text-muted-foreground">{project.summary}</p>

                  <dl className="grid grid-cols-2 gap-4 border-y border-border py-4 text-sm">
                    <div className="flex flex-col gap-1">
                      <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Proje sahibi</dt>
                      <dd>{project.client}</dd>
                    </div>
                    <div className="flex flex-col gap-1">
                      <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Rolüm</dt>
                      <dd>{project.role}</dd>
                    </div>
                  </dl>

                  <p className="flex gap-3 text-pretty leading-relaxed">
                    <span className="mt-0.5 shrink-0 rounded-sm bg-marker px-1.5 font-mono text-xs leading-5 text-marker-foreground">
                      SONUÇ
                    </span>
                    {project.outcome}
                  </p>

                  <ul className="flex flex-wrap gap-2" aria-label="Araçlar ve teknoloji yığını">
                    {project.stack.map((tool) => (
                      <li key={tool} className="rounded-sm bg-secondary px-2 py-1 font-mono text-xs">
                        {tool}
                      </li>
                    ))}
                  </ul>

                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-fit items-center gap-1 text-sm font-medium text-primary underline-offset-4 hover:underline"
                    >
                      Çalışmayı görüntüle
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

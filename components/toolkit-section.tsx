import { Download } from 'lucide-react'
import { asset } from '@/lib/asset'
import { templates } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'
import { TemplatePreview } from '@/components/template-preview'

export function ToolkitSection() {
  return (
    <section id="toolkit" aria-labelledby="toolkit-title" className="border-y border-border bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="[&_header]:border-background [&_header_p]:text-background/70 [&_header_span]:text-marker">
          <SectionHeading
            id="toolkit-title"
            code="4.0"
            kicker="Project toolkit · free downloads"
            title="The templates I actually use on real projects."
            description="Gantt çizelgeleri, OKR, KPI, RACI, WBS ve daha fazlası. Excel, Google Sheets, Numbers veya Notion ile açabilirsiniz. Ücretsiz kullanın ve ihtiyacınıza göre uyarlayın."
          />
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((template) => (
            <li key={template.code}>
              <article className="group flex h-full flex-col gap-4 rounded-lg bg-card p-4 text-card-foreground transition-transform duration-300 hover:-translate-y-1">
                <TemplatePreview kind={template.kind} />

                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-lg font-semibold tracking-tight">
                    <span className="mr-2 font-mono text-sm font-normal text-primary">{template.code}</span>
                    {template.title}
                  </h3>
                  <span className="shrink-0 rounded-sm border border-border px-1.5 py-0.5 font-mono text-xs text-muted-foreground">
                    .{template.format === 'Markdown' ? 'md' : template.format.toLowerCase()}
                  </span>
                </div>

                <p className="flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">{template.description}</p>

                <ul className="flex flex-wrap gap-1.5" aria-label="Includes">
                  {template.includes.map((item) => (
                    <li key={item} className="rounded-sm bg-secondary px-2 py-0.5 font-mono text-xs">
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href={asset(template.file)}
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <Download className="size-4" aria-hidden="true" />
                  {template.title} indir
                </a>
              </article>
            </li>
          ))}

          <li className="flex flex-col justify-between gap-6 rounded-lg border border-dashed border-background/40 p-6 sm:col-span-2 lg:col-span-2">
            <p className="font-mono text-xs uppercase tracking-widest text-marker">Change request</p>
            <p className="text-pretty text-2xl font-semibold leading-snug tracking-tight">
              Need a template that isn&apos;t here — a stakeholder map, a sprint retro board, a budget tracker?
            </p>
            <a
              href="#handover"
              className="w-fit rounded-md border border-background px-4 py-2.5 text-sm font-medium transition-colors hover:bg-background hover:text-foreground"
            >
              Request one
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

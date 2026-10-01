import { ArrowUpRight } from 'lucide-react'
import { certifications } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

export function CredentialsSection() {
  const sorted = [...certifications].sort((a, b) => Number(b.year) - Number(a.year))

  return (
    <section id="credentials" aria-labelledby="credentials-title" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        id="credentials-title"
        code="3.0"
        kicker="Credentials register"
        title="Certified in the frameworks — fluent in the people."
        description="Every credential listed with its ID so you can verify it with the issuing body."
      />

      <div className="mt-10 overflow-hidden rounded-lg border border-foreground/80 bg-card">
        <div className="hidden grid-cols-[4rem_1fr_14rem_10rem_6rem] gap-4 border-b border-foreground/80 bg-secondary px-5 py-3 font-mono text-xs uppercase tracking-widest text-muted-foreground md:grid">
          <span>Year</span>
          <span>Credential</span>
          <span>Issuer</span>
          <span>Credential ID</span>
          <span className="text-right">Verify</span>
        </div>
        <ul>
          {sorted.map((cert) => (
            <li
              key={cert.credentialId}
              className="group grid gap-2 border-b border-border px-5 py-5 transition-colors last:border-b-0 hover:bg-background md:grid-cols-[4rem_1fr_14rem_10rem_6rem] md:items-center md:gap-4"
            >
              <span className="font-mono text-sm text-primary">{cert.year}</span>
              <span className="flex flex-wrap items-center gap-2">
                <span className="font-medium leading-snug">{cert.name}</span>
                <span className="rounded-sm border border-border px-1.5 py-0.5 font-mono text-xs text-muted-foreground">
                  {cert.status}
                </span>
              </span>
              <span className="text-sm text-muted-foreground">{cert.issuer}</span>
              <span className="font-mono text-xs">
                <span className="text-muted-foreground md:hidden">ID: </span>
                {cert.credentialId}
              </span>
              <a
                href={cert.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary underline-offset-4 hover:underline md:justify-end"
              >
                Verify
                <ArrowUpRight className="size-4" aria-hidden="true" />
                <span className="sr-only">{cert.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { CharterSection } from '@/components/charter-section'
import { ProjectsSection } from '@/components/projects-section'
import { CredentialsSection } from '@/components/credentials-section'
import { ToolkitSection } from '@/components/toolkit-section'
import { HandoverSection } from '@/components/handover-section'
import { profile } from '@/lib/site-data'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <CharterSection />
        <ProjectsSection />
        <CredentialsSection />
        <ToolkitSection />
        <HandoverSection />
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 font-mono text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <span>
            {'© '}
            {new Date().getFullYear()} {profile.name}
          </span>
          <span>{`${profile.revision} · Static site, hosted on GitHub Pages`}</span>
        </div>
      </footer>
    </>
  )
}

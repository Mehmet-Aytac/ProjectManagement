import { profile } from '@/lib/site-data'

const navItems = [
  { code: '1.0', label: 'Charter', href: '#charter' },
  { code: '2.0', label: 'Deliverables', href: '#deliverables' },
  { code: '3.0', label: 'Credentials', href: '#credentials' },
  { code: '4.0', label: 'Toolkit', href: '#toolkit' },
  { code: '5.0', label: 'Handover', href: '#handover' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-3">
        <a href="#top" className="flex items-center gap-3">
          <span aria-hidden="true" className="flex flex-col gap-0.5">
            <span className="block h-1.5 w-5 rounded-sm bg-primary" />
            <span className="ml-2 block h-1.5 w-4 rounded-sm bg-foreground" />
            <span className="ml-1 block h-1.5 w-6 rounded-sm bg-marker" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-semibold">{profile.name}</span>
            <span className="font-mono text-xs text-muted-foreground">{profile.role}</span>
          </span>
        </a>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="flex items-baseline gap-1.5 rounded-md px-3 py-2 text-sm transition-colors hover:bg-secondary"
                >
                  <span className="font-mono text-xs text-primary">{item.code}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="hidden items-center gap-2 font-mono text-xs text-muted-foreground lg:flex">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60 motion-reduce:animate-none" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          Available
        </p>
      </div>

      <nav aria-label="Sections" className="border-t border-border md:hidden">
        <ul className="flex gap-1 overflow-x-auto px-3 py-1.5">
          {navItems.map((item) => (
            <li key={item.href} className="shrink-0">
              <a href={item.href} className="flex items-baseline gap-1 rounded-md px-2.5 py-1.5 text-sm">
                <span className="font-mono text-xs text-primary">{item.code}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

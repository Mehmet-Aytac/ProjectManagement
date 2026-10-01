type SectionHeadingProps = {
  code: string
  title: string
  kicker: string
  description?: string
  id: string
}

export function SectionHeading({ code, title, kicker, description, id }: SectionHeadingProps) {
  return (
    <header className="flex flex-col gap-4 border-t-2 border-foreground pt-4 md:flex-row md:items-start md:justify-between md:gap-10">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-sm font-medium text-primary">{code}</span>
        <div className="flex flex-col gap-1">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{kicker}</p>
          <h2 id={id} className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            {title}
          </h2>
        </div>
      </div>
      {description ? (
        <p className="max-w-md text-pretty leading-relaxed text-muted-foreground md:pt-6">{description}</p>
      ) : null}
    </header>
  )
}

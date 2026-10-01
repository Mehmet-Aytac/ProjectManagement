import type { TemplateKind } from '@/lib/site-data'
import { cn } from '@/lib/utils'

function GanttPreview() {
  const bars = [
    { left: 0, width: 22 },
    { left: 15, width: 30 },
    { left: 38, width: 35 },
    { left: 55, width: 28 },
    { left: 80, width: 18 },
  ]
  return (
    <div className="flex h-full flex-col justify-center gap-1.5">
      {bars.map((bar, i) => (
        <div key={i} className="relative h-2.5">
          <span
            className={cn('absolute h-full rounded-sm', i === 2 ? 'bg-primary' : 'bg-foreground/80')}
            style={{ left: `${bar.left}%`, width: `${bar.width}%` }}
          />
        </div>
      ))}
    </div>
  )
}

function OkrPreview() {
  return (
    <div className="flex h-full flex-col justify-center gap-2">
      <div className="h-2.5 w-3/4 rounded-sm bg-foreground/80" />
      {[62, 45, 80].map((progress) => (
        <div key={progress} className="ml-4 flex items-center gap-2">
          <span className="h-px w-3 bg-foreground/60" />
          <div className="h-2 flex-1 rounded-sm bg-border">
            <div className="h-full rounded-sm bg-primary" style={{ width: `${progress}%` }} />
          </div>
        </div>
      ))}
    </div>
  )
}

function KpiPreview() {
  const rag = ['bg-primary', 'bg-marker', 'bg-primary', 'bg-foreground/70']
  return (
    <div className="grid h-full grid-cols-2 gap-1.5">
      {rag.map((color, i) => (
        <div key={i} className="flex flex-col justify-between rounded-sm border border-border bg-background p-1.5">
          <span className="h-1.5 w-2/3 rounded-sm bg-border" />
          <span className="flex items-center justify-between">
            <span className="h-2 w-1/3 rounded-sm bg-foreground/80" />
            <span className={cn('size-2 rounded-full', color)} />
          </span>
        </div>
      ))}
    </div>
  )
}

function RaciPreview() {
  const rows = ['ARCI', 'CARI', 'IRAC', 'CIRA']
  return (
    <div className="grid h-full grid-cols-4 gap-1 font-mono text-xs">
      {rows.flatMap((row, r) =>
        row.split('').map((letter, c) => (
          <span
            key={`${r}-${c}`}
            className={cn(
              'flex items-center justify-center rounded-sm',
              letter === 'A' && 'bg-foreground text-background',
              letter === 'R' && 'bg-primary text-primary-foreground',
              letter === 'C' && 'bg-marker text-marker-foreground',
              letter === 'I' && 'border border-border text-muted-foreground',
            )}
          >
            {letter}
          </span>
        )),
      )}
    </div>
  )
}

function WbsPreview() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-1.5">
      <span className="h-3 w-12 rounded-sm bg-foreground" />
      <span className="h-1.5 w-px bg-foreground/60" />
      <div className="flex w-full justify-between border-t border-foreground/60 pt-1.5">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <span className={cn('h-2.5 w-8 rounded-sm', i === 1 ? 'bg-primary' : 'bg-foreground/70')} />
            <span className="h-1.5 w-6 rounded-sm bg-border" />
            <span className="h-1.5 w-6 rounded-sm bg-border" />
          </div>
        ))}
      </div>
    </div>
  )
}

function RiskPreview() {
  return (
    <div className="grid h-full grid-cols-5 gap-0.5">
      {Array.from({ length: 15 }, (_, i) => {
        const row = Math.floor(i / 5)
        const col = i % 5
        const score = (3 - row) * (col + 1)
        return (
          <span
            key={i}
            className={cn(
              'rounded-[2px]',
              score >= 9 ? 'bg-foreground/85' : score >= 5 ? 'bg-marker' : 'bg-border',
              i === 3 && 'ring-2 ring-primary ring-offset-1 ring-offset-card',
            )}
          />
        )
      })}
    </div>
  )
}

function CharterPreview() {
  return (
    <div className="flex h-full flex-col justify-center gap-1.5">
      <span className="h-2.5 w-1/2 rounded-sm bg-foreground/80" />
      {[90, 75, 85].map((w) => (
        <span key={w} className="h-1.5 rounded-sm bg-border" style={{ width: `${w}%` }} />
      ))}
      <div className="mt-1 flex items-end gap-3">
        <span className="h-px w-16 bg-foreground" />
        <span className="h-px w-10 bg-foreground" />
        <span className="ml-auto rounded-sm bg-primary px-1 font-mono text-[10px] leading-4 text-primary-foreground">OK</span>
      </div>
    </div>
  )
}

const previews: Record<TemplateKind, () => React.JSX.Element> = {
  gantt: GanttPreview,
  okr: OkrPreview,
  kpi: KpiPreview,
  raci: RaciPreview,
  wbs: WbsPreview,
  risk: RiskPreview,
  charter: CharterPreview,
}

export function TemplatePreview({ kind }: { kind: TemplateKind }) {
  const Preview = previews[kind]
  return (
    <div aria-hidden="true" className="graph-paper h-28 rounded-sm border border-border bg-card p-3">
      <Preview />
    </div>
  )
}

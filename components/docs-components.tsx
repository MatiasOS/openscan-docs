import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: string
  description: string
  badge?: string
}

export function PageHeader({ title, description, badge }: PageHeaderProps) {
  return (
    <div className="mb-8">
      {badge && (
        <span className="inline-block rounded-md bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent mb-3">
          {badge}
        </span>
      )}
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
        {title}
      </h1>
      <p className="mt-3 text-lg leading-relaxed text-muted-foreground text-pretty">
        {description}
      </p>
    </div>
  )
}

interface InfoCardProps {
  title: string
  description: string
  icon?: React.ReactNode
  className?: string
}

export function InfoCard({ title, description, icon, className }: InfoCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/40",
        className
      )}
    >
      <div className="flex items-center gap-2.5 mb-1.5">
        {icon && <div className="shrink-0 text-accent flex items-center">{icon}</div>}
        <h3 className="!m-0 !p-0 font-semibold text-foreground leading-tight">{title}</h3>
      </div>
      <p className="!m-0 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  )
}

interface LinkCardProps {
  href: string
  title: string
  description: string
  icon: React.ReactNode
  external?: boolean
}

export function LinkCard({ href, title, description, icon, external }: LinkCardProps) {
  const content = (
    <div className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/40 h-full">
      <h3 className="!mt-0 font-semibold text-foreground mb-1.5 flex items-center gap-2">
        {icon}
        {title}
        {!external && (
          <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
        )}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  )

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="group !no-underline hover:!no-underline">
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className="group !no-underline hover:!no-underline">
      {content}
    </Link>
  )
}

interface StepProps {
  number: number
  title: string
  description: React.ReactNode
  code?: string
}

export function Step({ number, title, description, code }: StepProps) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-sm font-semibold text-accent">
          {number}
        </div>
        <div className="mt-2 w-px flex-1 bg-border" />
      </div>
      <div className="pb-8">
        <h3 className="font-semibold text-foreground">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        {code && (
          <pre className="mt-3 rounded-lg border border-border bg-secondary px-4 py-3 text-sm font-mono overflow-x-auto">
            <code className="text-foreground">{code}</code>
          </pre>
        )}
      </div>
    </div>
  )
}

interface StepSectionStep {
  title: string
  description: React.ReactNode
  code?: string
}

interface StepSectionProps {
  title: string
  description?: React.ReactNode
  steps: StepSectionStep[]
}

export function StepSection({ title, description, steps }: StepSectionProps) {
  return (
    <div className="not-prose mb-8">
      <h2 className="text-xl font-semibold text-foreground mb-2">{title}</h2>
      {description && (
        <p className="text-sm leading-relaxed text-muted-foreground mb-6">
          {description}
        </p>
      )}
      {steps.map((step, idx) => (
        <Step
          key={idx}
          number={idx + 1}
          title={step.title}
          description={step.description}
          code={step.code}
        />
      ))}
    </div>
  )
}

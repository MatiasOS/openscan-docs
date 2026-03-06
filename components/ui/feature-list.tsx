import { cn } from '@/lib/utils'

function FeatureList({ className, ...props }: React.ComponentProps<'ul'>) {
  return (
    <ul
      data-slot="feature-list"
      className={cn('space-y-2', className)}
      {...props}
    />
  )
}

interface FeatureListItemProps extends React.ComponentProps<'li'> {
  markerClassName?: string
}

function FeatureListItem({
  className,
  markerClassName,
  children,
  ...props
}: FeatureListItemProps) {
  return (
    <li
      data-slot="feature-list-item"
      className={cn(
        'text-muted-foreground flex items-start gap-2 text-sm leading-relaxed',
        className,
      )}
      {...props}
    >
      <span
        aria-hidden
        className={cn('mt-1.5 size-2 shrink-0 rounded-full bg-accent', markerClassName)}
      />
      <span>{children}</span>
    </li>
  )
}

export { FeatureList, FeatureListItem }

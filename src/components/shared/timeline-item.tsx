import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  description?: string;
  children?: ReactNode;
  isLast?: boolean;
  className?: string;
}

export function TimelineItem({
  title,
  subtitle,
  period,
  description,
  children,
  isLast = false,
  className,
}: TimelineItemProps) {
  return (
    <div className={cn("relative pl-8 pb-10", isLast && "pb-0", className)}>
      {!isLast && (
        <span
          className="absolute left-[7px] top-2 bottom-0 w-px bg-border"
          aria-hidden="true"
        />
      )}
      <span
        className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-foreground bg-background"
        aria-hidden="true"
      />

      <div className="flex flex-col gap-1">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
          <h4 className="text-base font-semibold">{title}</h4>
          <span className="text-xs text-muted-foreground">{period}</span>
        </div>
        <p className="text-sm font-medium text-muted-foreground">{subtitle}</p>
        {description && (
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
        {children && <div className="mt-3">{children}</div>}
      </div>
    </div>
  );
}

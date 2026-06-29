import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Globe2 } from "lucide-react";
import { cn } from "@/lib/utils";

const GREY_BAR_CLASSES = [
  "bg-color-text-muted",
  "bg-color-text-dim",
  "bg-[#525252]",
  "bg-[#737373]",
] as const;

export function ModuleCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-full min-w-0 overflow-hidden rounded-[20px] border border-color-border bg-color-surface p-4 text-color-text shadow-[0_20px_50px_-12px_rgba(0,0,0,0.45)] sm:rounded-[24px] sm:p-6",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function ModuleCardHeader({
  label,
  score,
  suffix = "",
  delta,
  deltaUp,
  icon,
}: {
  label: string;
  score?: string | number;
  suffix?: string;
  delta?: string;
  deltaUp?: boolean;
  icon?: ReactNode;
}) {
  const showMetrics = score !== undefined || delta !== undefined;

  return (
    <div className="rounded-[14px] border border-color-border-light bg-color-blue-tint px-3.5 py-3 sm:rounded-[18px] sm:px-5 sm:py-4">
      <div
        className={cn(
          "flex gap-3",
          showMetrics
            ? "flex-col sm:flex-row sm:items-start sm:justify-between sm:gap-4"
            : "items-center",
        )}
      >
        <div className="flex min-w-0 items-center gap-2.5">
          {icon ?? (
            <Globe2
              size={18}
              className="shrink-0 text-blue"
              strokeWidth={2}
              aria-hidden
            />
          )}
          <p className="min-w-0 font-heading text-[14px] font-semibold leading-snug text-color-text sm:text-base">
            {label}
          </p>
        </div>
        {showMetrics ? (
          <div className="flex items-end justify-between gap-3 sm:block sm:shrink-0 sm:text-right">
            {score !== undefined ? (
              <p className="font-heading text-[1.75rem] font-semibold leading-none tracking-tight text-color-text sm:text-[2.25rem]">
                {score}
                {suffix ? (
                  <span className="text-sm font-medium text-color-text-muted sm:text-base">{suffix}</span>
                ) : null}
              </p>
            ) : null}
            {delta ? (
              <p
                className={cn(
                  "text-[11px] font-medium sm:mt-1",
                  deltaUp ? "text-blue" : "text-color-text-muted",
                )}
              >
                {deltaUp ? "▲" : "▼"} {delta}
              </p>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function ModuleCardSubtitle({ children }: { children: ReactNode }) {
  return (
    <p className="mt-4 text-[13px] leading-snug text-color-text-muted sm:text-sm">
      {children}
    </p>
  );
}

export function ModuleCardDivider() {
  return <div className="my-3 border-t border-color-border/80" />;
}

export function ModuleCardFooter({ children }: { children: ReactNode }) {
  return (
    <p className="mt-4 border-t border-color-border/80 pt-3 text-[10px] text-color-text-dim sm:text-[11px]">
      {children}
    </p>
  );
}

export function ModulePlatformTags({
  tags,
  active,
}: {
  tags: string[];
  active: string[];
}) {
  return (
    <span className="flex shrink-0 gap-1">
      {tags.map((tag) => {
        const isActive = active.includes(tag);
        return (
          <span
            key={tag}
            className={cn(
              "flex h-5 w-5 items-center justify-center rounded-[6px] text-[9px] font-bold",
              isActive
                ? "border border-color-border bg-color-bg-alt text-color-text"
                : "bg-color-bg-alt/60 text-color-text-dim",
            )}
          >
            {tag}
          </span>
        );
      })}
    </span>
  );
}

export function ModuleProgressRow({
  label,
  pct,
  index = 0,
  tags,
  activeTags,
  value,
  highlight = false,
}: {
  label: string;
  pct: number;
  index?: number;
  tags?: string[];
  activeTags?: string[];
  value?: string;
  highlight?: boolean;
}) {
  const reduce = useReducedMotion();
  const barClass = highlight
    ? "bg-blue"
    : GREY_BAR_CLASSES[Math.min(index, GREY_BAR_CLASSES.length - 1)];

  return (
    <div className="min-w-0 py-3 first:pt-0 last:pb-0">
      <div className="mb-2 flex items-center justify-between gap-2">
        <span
          className={cn(
            "min-w-0 truncate text-[13px] font-semibold",
            highlight ? "text-color-text" : "text-color-text-muted",
          )}
        >
          {label}
        </span>
        <span
          className={cn(
            "shrink-0 font-mono text-[13px] font-semibold",
            highlight ? "text-color-text" : "text-color-text-muted",
          )}
        >
          {value ?? `${pct}%`}
        </span>
      </div>
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="h-2.5 min-w-0 flex-1 overflow-hidden rounded-full bg-color-bg">
          <motion.div
            className={cn("h-full min-w-[4px] rounded-full", barClass)}
            initial={{ width: reduce ? `${pct}%` : 0 }}
            whileInView={{ width: `${pct}%` }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: reduce ? 0 : 0.7, delay: index * 0.06 }}
          />
        </div>
        {tags && activeTags ? (
          <ModulePlatformTags tags={tags} active={activeTags} />
        ) : null}
      </div>
    </div>
  );
}

export function ModuleProgressList({
  rows,
  tags,
  legend,
}: {
  rows: Array<{
    label: string;
    pct: number;
    activeTags?: string[];
    highlight?: boolean;
  }>;
  tags?: string[];
  legend?: string;
}) {
  return (
    <>
      <div className="divide-y divide-color-border/80">
        {rows.map((row, i) => (
          <ModuleProgressRow
            key={row.label}
            label={row.label}
            pct={row.pct}
            index={i}
            tags={tags}
            activeTags={row.activeTags}
            highlight={row.highlight ?? i === 0}
          />
        ))}
      </div>
      {legend ? <ModuleCardFooter>{legend}</ModuleCardFooter> : null}
    </>
  );
}

export function ModuleMetricGrid({
  items,
}: {
  items: Array<[string, string]>;
}) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {items.map(([label, value]) => (
        <div
          key={label}
          className="rounded-xl border border-color-border bg-color-bg-alt px-3 py-2.5"
        >
          <p className="text-[10px] text-color-text-muted">{label}</p>
          <p className="mt-0.5 text-[13px] font-bold text-color-text-muted">{value}</p>
        </div>
      ))}
    </div>
  );
}

export function ModuleListItem({
  title,
  meta,
  badge,
  badgeTone = "neutral",
}: {
  title: string;
  meta: string;
  badge: string;
  badgeTone?: "threat" | "monitor" | "signal" | "neutral" | "lead";
}) {
  return (
    <div className="flex items-start justify-between gap-3 py-3 first:pt-0 last:pb-0">
      <div className="min-w-0">
        <p className="truncate text-[13px] font-medium text-color-text">{title}</p>
        <p className="mt-0.5 text-[11px] text-color-text-muted">{meta}</p>
      </div>
      <span className={cn("shrink-0", moduleBadgeClass(badgeTone))}>{badge}</span>
    </div>
  );
}

export function ModuleTableRow({
  cols,
}: {
  cols: [ReactNode, ReactNode, ReactNode];
}) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_24px_48px] items-center gap-1.5 py-2.5 text-[11px] first:pt-0 last:pb-0 sm:grid-cols-[1fr_28px_52px] sm:gap-2 sm:text-[12px]">
      <span className="truncate text-color-text">{cols[0]}</span>
      <span className="text-center text-color-text-muted">{cols[1]}</span>
      <span className="text-right text-color-text-muted">{cols[2]}</span>
    </div>
  );
}

export function moduleBadgeClass(
  tone: "lead" | "threat" | "neutral" | "monitor" | "signal",
) {
  return cn(
    "rounded-md px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide",
    tone === "lead" && "border border-color-border bg-color-bg-alt text-color-text",
    tone === "signal" && "border border-color-border bg-color-bg-alt text-color-text-muted",
    tone === "threat" && "bg-color-bg-alt text-color-text-muted",
    (tone === "neutral" || tone === "monitor") &&
      "border border-color-border bg-color-bg-alt text-color-text-dim",
  );
}

export function moduleChipClass(active = false) {
  return cn(
    "rounded-md border px-2 py-0.5 text-[9px] font-semibold",
    active
      ? "border-color-border bg-color-bg-alt text-color-text"
      : "border-color-border/80 bg-color-bg-alt/80 text-color-text-dim",
  );
}

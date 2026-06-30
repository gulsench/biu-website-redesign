import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Globe2, TrendingDown, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const RIVAL_BAR_OPACITY = [0.55, 0.4, 0.28, 0.2] as const;

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
        "module-panel relative w-full min-w-0 overflow-hidden text-color-text",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/[0.06] to-transparent" />
      <div className="relative p-4 sm:p-5">{children}</div>
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
    <header className="border-b border-color-border pb-4">
      <div
        className={cn(
          "flex gap-3",
          showMetrics
            ? "flex-col sm:flex-row sm:items-end sm:justify-between sm:gap-4"
            : "items-center",
        )}
      >
        <div className="flex min-w-0 items-start gap-2.5">
          <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center border border-color-border bg-color-bg-alt">
            {icon ?? (
              <Globe2
                size={15}
                className="text-blue"
                strokeWidth={2}
                aria-hidden
              />
            )}
          </span>
          <div className="min-w-0">
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-color-text-dim">
              Signal
            </p>
            <p className="mt-0.5 font-heading text-[15px] font-medium leading-snug text-color-text sm:text-base">
              {label}
            </p>
          </div>
        </div>
        {showMetrics ? (
          <div className="flex items-end justify-between gap-3 sm:block sm:shrink-0 sm:text-right">
            {score !== undefined ? (
              <p className="font-heading text-[2rem] font-medium leading-none tracking-[-0.03em] text-color-text tabular-nums sm:text-[2.35rem]">
                {score}
                {suffix ? (
                  <span className="ml-0.5 text-sm font-normal text-color-text-muted">
                    {suffix}
                  </span>
                ) : null}
              </p>
            ) : null}
            {delta ? (
              <span
                className={cn(
                  "mt-1.5 inline-flex items-center gap-1 font-mono text-[10px] font-medium",
                  deltaUp ? "text-blue" : "text-color-text-muted",
                )}
              >
                {deltaUp ? (
                  <TrendingUp size={11} strokeWidth={2.5} aria-hidden />
                ) : (
                  <TrendingDown size={11} strokeWidth={2.5} aria-hidden />
                )}
                {delta}
              </span>
            ) : null}
          </div>
        ) : null}
      </div>
    </header>
  );
}

export function ModuleCardSubtitle({ children }: { children: ReactNode }) {
  return (
    <p className="mt-3 text-[13px] leading-relaxed text-color-text-muted sm:text-sm">
      {children}
    </p>
  );
}

export function ModuleCardDivider() {
  return null;
}

export function ModuleCardFooter({ children }: { children: ReactNode }) {
  return (
    <p className="mt-4 border-t border-color-border pt-3 font-mono text-[10px] text-color-text-dim">
      {children}
    </p>
  );
}

export function ModuleSectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-2.5 font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-color-text-dim">
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
    <span className="flex shrink-0 gap-0.5">
      {tags.map((tag) => {
        const isActive = active.includes(tag);
        return (
          <span
            key={tag}
            className={cn(
              "flex h-5 min-w-[1.25rem] items-center justify-center px-0.5 font-mono text-[8px] font-semibold",
              isActive
                ? "bg-color-bg-alt text-color-text"
                : "bg-color-bg-alt text-color-text-dim",
            )}
            title={tag}
          >
            {tag}
          </span>
        );
      })}
    </span>
  );
}

function ProgressBarFill({
  pct,
  index,
  highlight,
}: {
  pct: number;
  index: number;
  highlight: boolean;
}) {
  const reduce = useReducedMotion();

  return (
    <div className="h-1.5 w-full overflow-hidden bg-color-bg-alt">
      <motion.div
        className={cn(
          "h-full min-w-[3px]",
          highlight ? "bg-blue" : "bg-color-text-muted",
        )}
        style={!highlight ? { opacity: RIVAL_BAR_OPACITY[Math.min(index, 3)] } : undefined}
        initial={{ width: reduce ? `${pct}%` : 0 }}
        whileInView={{ width: `${pct}%` }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: reduce ? 0 : 0.65, delay: index * 0.05, ease: [0.23, 1, 0.32, 1] }}
      />
    </div>
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
  const displayValue = value ?? `${pct}%`;

  return (
    <div
      role="progressbar"
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`${label}: ${displayValue}`}
      className={cn(
        "min-w-0 py-2.5 first:pt-0 last:pb-0",
        highlight && "-mx-2 rounded-sm bg-blue/[0.06] px-2 sm:-mx-2.5 sm:px-2.5",
      )}
    >
      <div className="mb-1.5 flex items-center justify-between gap-3">
        <span
          className={cn(
            "min-w-0 truncate text-[12px] font-medium",
            highlight ? "text-color-text" : "text-color-text-muted",
          )}
        >
          {label}
        </span>
        <div className="flex shrink-0 items-center gap-2">
          <span
            className={cn(
              "font-mono text-[11px] tabular-nums",
              highlight ? "font-semibold text-color-text" : "text-color-text-muted",
            )}
          >
            {displayValue}
          </span>
          {tags && activeTags ? (
            <ModulePlatformTags tags={tags} active={activeTags} />
          ) : null}
        </div>
      </div>
      <ProgressBarFill pct={pct} index={index} highlight={highlight} />
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
      <div className="space-y-0.5">
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
    <div className="grid grid-cols-2 divide-x divide-color-border border border-color-border bg-color-bg-alt">
      {items.map(([label, value], i) => (
        <div
          key={label}
          className={cn("px-3 py-2.5", i >= 2 && "border-t border-color-border")}
        >
          <p className="font-mono text-[9px] uppercase tracking-[0.08em] text-color-text-dim">
            {label}
          </p>
          <p className="mt-1 font-mono text-[13px] font-semibold tabular-nums text-color-text">
            {value}
          </p>
        </div>
      ))}
    </div>
  );
}

export function ModuleRankRow({
  name,
  score,
  rank,
  maxScore = 100,
  highlight = false,
}: {
  name: string;
  score: number;
  rank?: string;
  maxScore?: number;
  highlight?: boolean;
}) {
  const reduce = useReducedMotion();
  const pct = Math.round((score / maxScore) * 100);

  return (
    <div
      className={cn(
        "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 py-2.5 first:pt-0 last:pb-0",
        highlight && "-mx-2 rounded-sm bg-blue/[0.05] px-2 sm:-mx-2.5 sm:px-2.5",
      )}
    >
      <div className="min-w-0">
        <div className="flex items-baseline justify-between gap-2">
          <span
            className={cn(
              "truncate text-[12px] font-medium",
              highlight ? "text-color-text" : "text-color-text-muted",
            )}
          >
            {name}
          </span>
          {rank ? (
            <span className="shrink-0 font-mono text-[10px] text-color-text-dim">
              {rank}
            </span>
          ) : null}
        </div>
        <div className="mt-1.5 h-1 w-full overflow-hidden bg-color-bg-alt">
          <motion.div
            className={cn("h-full", highlight ? "bg-blue" : "bg-color-text-muted/50")}
            initial={{ width: reduce ? `${pct}%` : 0 }}
            whileInView={{ width: `${pct}%` }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: reduce ? 0 : 0.6, ease: [0.23, 1, 0.32, 1] }}
          />
        </div>
      </div>
      <span
        className={cn(
          "font-mono text-sm font-semibold tabular-nums",
          highlight ? "text-color-text" : "text-color-text-muted",
        )}
      >
        {score}
      </span>
    </div>
  );
}

export function ModuleSparkline({
  points,
  label,
  accent = false,
}: {
  points: number[];
  label?: string;
  accent?: boolean;
}) {
  const reduce = useReducedMotion();
  const w = 280;
  const h = 64;
  const pad = 4;
  const max = Math.max(...points) * 1.08;
  const min = Math.min(...points) * 0.92;
  const range = max - min || 1;
  const step = (w - pad * 2) / (points.length - 1);

  const coords = points.map((p, i) => ({
    x: pad + i * step,
    y: pad + (h - pad * 2) - ((p - min) / range) * (h - pad * 2),
  }));

  const linePath = coords
    .map((c, i) => `${i === 0 ? "M" : "L"} ${c.x} ${c.y}`)
    .join(" ");
  const areaPath = `${linePath} L ${coords[coords.length - 1].x} ${h - pad} L ${coords[0].x} ${h - pad} Z`;

  const stroke = accent ? "var(--color-blue-light)" : "var(--color-text-muted)";
  const gridY = [0.25, 0.5, 0.75].map((f) => pad + (h - pad * 2) * f);

  return (
    <div className="module-chart">
      {label ? <ModuleSectionLabel>{label}</ModuleSectionLabel> : null}
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full" aria-hidden>
        {gridY.map((y) => (
          <line
            key={y}
            x1={pad}
            x2={w - pad}
            y1={y}
            y2={y}
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="1"
          />
        ))}
        <motion.path
          d={areaPath}
          fill={accent ? "rgba(26, 160, 73, 0.12)" : "rgba(255,255,255,0.03)"}
          initial={{ opacity: reduce ? 1 : 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reduce ? 0 : 0.5 }}
        />
        <motion.path
          d={linePath}
          fill="none"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: reduce ? 1 : 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: reduce ? 0 : 1, ease: [0.23, 1, 0.32, 1] }}
        />
        <motion.circle
          cx={coords[coords.length - 1].x}
          cy={coords[coords.length - 1].y}
          r="3"
          fill={stroke}
          initial={{ opacity: reduce ? 1 : 0, scale: reduce ? 1 : 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reduce ? 0 : 0.3, delay: reduce ? 0 : 0.85 }}
        />
      </svg>
    </div>
  );
}

export function ModuleDonut({
  value,
  label,
  sublabel,
}: {
  value: number;
  label?: string;
  sublabel?: string;
}) {
  const reduce = useReducedMotion();
  const r = 26;
  const circumference = 2 * Math.PI * r;

  return (
    <div className="relative h-[4.5rem] w-[4.5rem] shrink-0">
      <svg viewBox="0 0 64 64" className="h-full w-full -rotate-90" aria-hidden>
        <circle
          cx="32"
          cy="32"
          r={r}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="5"
        />
        <motion.circle
          cx="32"
          cy="32"
          r={r}
          fill="none"
          stroke="var(--color-blue-light)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{
            strokeDashoffset: reduce
              ? circumference * (1 - value / 100)
              : circumference,
          }}
          whileInView={{ strokeDashoffset: circumference * (1 - value / 100) }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: reduce ? 0 : 0.9, ease: [0.23, 1, 0.32, 1] }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-mono text-sm font-semibold tabular-nums text-color-text">
          {value}%
        </span>
        {sublabel ? (
          <span className="text-[8px] text-color-text-dim">{sublabel}</span>
        ) : null}
        {label ? (
          <span className="sr-only">{label}</span>
        ) : null}
      </div>
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
    <div className="flex items-start justify-between gap-3 border-b border-color-border py-3 last:border-b-0 first:pt-0 last:pb-0">
      <div className="min-w-0">
        <p className="truncate text-[12px] font-medium leading-snug text-color-text">
          {title}
        </p>
        <p className="mt-1 font-mono text-[10px] text-color-text-dim">{meta}</p>
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
    <div className="grid grid-cols-[minmax(0,1fr)_24px_52px] items-center gap-2 border-b border-color-border py-2.5 text-[11px] first:pt-0 last:border-b-0 last:pb-0 sm:grid-cols-[1fr_28px_56px] sm:text-[12px]">
      <span className="truncate text-color-text">{cols[0]}</span>
      <span
        className={cn(
          "text-center font-mono text-[11px]",
          cols[1] === "✓" ? "text-blue" : "text-color-text-dim",
        )}
      >
        {cols[1]}
      </span>
      <span className="text-right">{cols[2]}</span>
    </div>
  );
}

export function moduleBadgeClass(
  tone: "lead" | "threat" | "neutral" | "monitor" | "signal",
) {
  return cn(
    "px-1.5 py-0.5 font-mono text-[8px] font-semibold uppercase tracking-wide",
    tone === "lead" && "bg-blue/15 text-blue",
    tone === "signal" && "bg-color-bg-alt text-color-text-muted",
    tone === "threat" && "bg-color-bg-alt text-color-text-muted",
    (tone === "neutral" || tone === "monitor") &&
      "bg-color-bg-alt text-color-text-dim",
  );
}

export function moduleChipClass(active = false) {
  return cn(
    "border px-2 py-0.5 font-mono text-[9px] font-medium",
    active
      ? "border-blue/30 bg-blue/10 text-blue"
      : "border-color-border bg-color-bg-alt text-color-text-muted",
  );
}

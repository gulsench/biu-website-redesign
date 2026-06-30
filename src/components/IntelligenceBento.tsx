import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { moduleHref } from "@/lib/routes";
import type { ModuleId } from "@/lib/modules";
import { cn } from "@/lib/utils";

const engines = [
  "ChatGPT",
  "Perplexity",
  "Google AI",
  "Gemini",
  "Copilot",
];

const rivals = [
  { label: "You", color: "bg-blue", x: 62, y: 38 },
  { label: "Rival A", color: "bg-amber-400", x: 78, y: 52 },
  { label: "Rival B", color: "bg-rose-400", x: 44, y: 58 },
];

function BentoLink({
  to,
  children,
  className,
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "inline-flex items-center gap-1.5 text-sm font-medium text-blue transition-opacity hover:opacity-80",
        className,
      )}
    >
      {children}
      <ArrowRight size={15} strokeWidth={2} />
    </Link>
  );
}

function EngineBadges() {
  return (
    <div className="flex flex-wrap gap-2">
      {engines.map((engine) => (
        <span
          key={engine}
          className="border border-color-border bg-color-bg-alt px-2.5 py-1 font-mono text-[10px] text-color-text-muted"
        >
          {engine}
        </span>
      ))}
    </div>
  );
}

function ShareOfSearchRadar() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[220px]">
      <svg viewBox="0 0 200 200" className="h-full w-full" aria-hidden>
        {[28, 48, 68, 88].map((r) => (
          <circle
            key={r}
            cx="100"
            cy="100"
            r={r}
            fill="none"
            stroke="currentColor"
            strokeOpacity={0.08}
            strokeWidth="1"
          />
        ))}
        <line x1="100" y1="12" x2="100" y2="188" stroke="currentColor" strokeOpacity={0.06} />
        <line x1="12" y1="100" x2="188" y2="100" stroke="currentColor" strokeOpacity={0.06} />
        <path
          d="M100 44 L148 88 L124 156 L76 156 L52 88 Z"
          fill="hsl(var(--color-blue) / 0.12)"
          stroke="hsl(var(--color-blue) / 0.35)"
          strokeWidth="1.5"
        />
        <line
          x1="100"
          y1="100"
          x2="132"
          y2="72"
          stroke="hsl(var(--color-blue))"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      {rivals.map((rival) => (
        <div
          key={rival.label}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${rival.x}%`, top: `${rival.y}%` }}
        >
          <span className={cn("block h-2.5 w-2.5 rounded-full", rival.color)} />
          <span className="mt-1 block whitespace-nowrap font-mono text-[9px] text-color-text-dim">
            {rival.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function ContentScoreRing() {
  return (
    <div className="flex items-center justify-center gap-5">
      <div className="h-20 w-28 shrink-0 border border-color-border bg-color-bg-alt p-2.5">
        <div className="space-y-1.5">
          <div className="h-1 w-full bg-color-border" />
          <div className="h-1 w-[80%] bg-color-border/80" />
          <div className="h-1 w-full bg-color-border" />
          <div className="h-1 w-2/3 bg-color-border/60" />
        </div>
      </div>
      <div className="relative h-24 w-24 shrink-0">
        <svg viewBox="0 0 96 96" className="h-full w-full -rotate-90" aria-hidden>
          <circle cx="48" cy="48" r="40" fill="none" stroke="currentColor" strokeOpacity={0.1} strokeWidth="6" />
          <circle
            cx="48"
            cy="48"
            r="40"
            fill="none"
            stroke="hsl(var(--color-blue))"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="251.2"
            strokeDashoffset="35"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-heading text-2xl font-medium tabular-nums text-color-text">86</span>
          <span className="font-mono text-[9px] uppercase tracking-wider text-color-text-dim">
            Reach
          </span>
        </div>
      </div>
    </div>
  );
}

function CompetitorMoves() {
  const moves = [
    { name: "Rival A", value: 72, alert: true },
    { name: "You", value: 58, alert: false },
    { name: "Rival B", value: 44, alert: false },
  ];

  return (
    <div className="space-y-3">
      {moves.map((move) => (
        <div key={move.name} className="space-y-1.5">
          <div className="flex items-center justify-between font-mono text-[10px]">
            <span className={move.alert ? "text-amber-400" : "text-color-text-muted"}>
              {move.name}
            </span>
            <span className="text-color-text-dim">{move.value}% SoV</span>
          </div>
          <div className="h-1.5 bg-color-bg-alt">
            <div
              className={cn(
                "h-full",
                move.alert ? "bg-amber-400" : move.name === "You" ? "bg-blue" : "bg-color-text-muted/40",
              )}
              style={{ width: `${move.value}%` }}
            />
          </div>
        </div>
      ))}
      <p className="inline-flex items-center gap-1.5 border border-amber-400/30 bg-amber-400/10 px-2 py-1 font-mono text-[10px] text-amber-700">
        <TrendingUp size={11} strokeWidth={2.5} aria-hidden />
        New citation detected
      </p>
    </div>
  );
}

function ReputationSignals() {
  const signals = [
    { label: "Trust", value: 82 },
    { label: "Consideration", value: 67 },
    { label: "Choice", value: 54 },
  ];

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <Sparkles
            key={i}
            size={18}
            className="text-blue opacity-80"
            style={{ transform: `translateY(${i * 4}px)` }}
            aria-hidden
          />
        ))}
      </div>
      <div className="space-y-2.5">
        {signals.map((signal) => (
          <div key={signal.label} className="flex items-center gap-3">
            <span className="w-24 font-mono text-[10px] text-color-text-dim">{signal.label}</span>
            <div className="h-1.5 flex-1 bg-color-bg-alt">
              <div className="h-full bg-blue" style={{ width: `${signal.value}%` }} />
            </div>
            <span className="w-8 text-right font-mono text-[10px] text-color-text-muted">
              {signal.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MomentumPreview() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="font-mono text-[10px] uppercase tracking-wider text-color-text-dim">
          Momentum score
        </p>
        <p className="font-heading text-5xl font-medium tabular-nums text-color-text">74</p>
        <p className="mt-1 inline-flex items-center gap-1 font-mono text-[10px] text-blue">
          <TrendingUp size={11} strokeWidth={2.5} aria-hidden />
          +6 this week
        </p>
      </div>
      <div className="border border-blue/20 bg-blue/[0.08] px-3 py-2.5">
        <p className="font-mono text-[9px] uppercase tracking-wider text-blue">Top move</p>
        <p className="mt-1 text-[13px] leading-snug text-color-text">
          Win 3 authority placements in organic skincare
        </p>
      </div>
    </div>
  );
}

type BentoCardProps = {
  title: string;
  moduleId?: ModuleId;
  href?: string;
  className?: string;
  visual: React.ReactNode;
  delay?: number;
};

function BentoCard({ title, moduleId, href, className, visual, delay = 0 }: BentoCardProps) {
  const linkTo = href ?? (moduleId ? moduleHref(moduleId) : "/modules");

  return (
    <Reveal delay={delay} className={cn("h-full", className)}>
      <article className="flex h-full min-w-0 flex-col justify-between border border-color-border bg-color-surface p-5 sm:p-6 md:p-7">
        <div>
          <h3 className="max-w-md font-heading text-lg font-medium leading-snug text-color-text sm:text-xl">
            {title}
          </h3>
          <BentoLink to={linkTo} className="mt-4">
            Learn more
          </BentoLink>
        </div>
        <div className="mt-8 min-h-[120px]">{visual}</div>
      </article>
    </Reveal>
  );
}

export function IntelligenceBento() {
  return (
    <section
      id="intelligence"
      className="section-light w-full overflow-x-clip border-t border-color-border py-12 sm:py-16 md:py-24"
    >
      <div className="section-container">
        <Reveal className="mb-10 max-w-3xl md:mb-12">
          <h2 className="font-heading text-[clamp(1.75rem,5vw,3rem)] font-medium leading-tight tracking-[-0.03em] text-color-text md:text-5xl">
            Intelligence that drives action,{" "}
            <span className="text-blue">not noise.</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-color-text-muted sm:text-base md:text-lg">
            BIU turns scattered brand signals into one score and one next move —
            across AI answers, social momentum, competitive shifts, and reputation.
          </p>
        </Reveal>

        <div className="space-y-px border border-color-border bg-color-border">
          <div className="grid md:grid-cols-3">
            <BentoCard
              className="md:col-span-2"
              title="Track brand visibility across AI search and answer engines."
              moduleId="aeo"
              delay={0.04}
              visual={
                <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,200px)] sm:items-center">
                  <EngineBadges />
                  <ShareOfSearchRadar />
                </div>
              }
            />
            <BentoCard
              title="See which content compounds reach across social."
              moduleId="social"
              delay={0.06}
              visual={<ContentScoreRing />}
            />
          </div>

          <div className="grid md:grid-cols-3">
            <BentoCard
              title="Catch competitor moves the day they shift category share."
              moduleId="competition"
              delay={0.08}
              visual={<CompetitorMoves />}
            />
            <BentoCard
              title="Monitor trust, consideration, and choice — not just reviews."
              moduleId="reputation"
              delay={0.1}
              visual={<ReputationSignals />}
            />
            <BentoCard
              title="Get the one move that closes your visibility gap."
              href="#copilot"
              delay={0.12}
              visual={<MomentumPreview />}
            />
          </div>
        </div>

        <Reveal delay={0.14} className="mt-8">
          <Link
            to="/modules"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-blue transition-opacity hover:opacity-80"
          >
            Explore all intelligence
            <ArrowRight size={15} strokeWidth={2} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

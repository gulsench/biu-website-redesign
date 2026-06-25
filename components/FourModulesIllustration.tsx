import { modulePillars, modulesHub, productModules } from "@/lib/content";
import { cn } from "@/lib/cn";
import { SectionBackground } from "./ui/SectionBackground";

function moduleSubtext(mod: (typeof productModules)[number]) {
  if ("subtext" in mod && mod.subtext) return mod.subtext;
  return modulePillars[mod.id].map((p) => p.label).join(" · ");
}

function ModuleBox({ mod }: { mod: (typeof productModules)[number] }) {
  return (
    <div className="modules-diagram-box flex min-h-[72px] flex-col justify-center border border-card-border bg-card px-5 py-4">
      <span className="text-[14px] font-semibold leading-snug text-ink sm:text-[15px]">
        {mod.label}
      </span>
      <span className="mt-1 text-[12px] leading-relaxed text-mid sm:text-[13px]">
        {moduleSubtext(mod)}
      </span>
    </div>
  );
}

function HubBox({ className }: { className?: string }) {
  const fill = Math.round((modulesHub.score / modulesHub.maxScore) * 100);

  return (
    <div
      className={cn(
        "modules-diagram-hub flex flex-col border border-white/10 bg-[var(--footer-bg)] px-6 py-7 text-center sm:px-8 sm:py-9",
        className,
      )}
    >
      <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-brand-400">
        {modulesHub.label}
      </span>
      <p className="mt-3 text-[15px] font-bold leading-snug text-white sm:text-[16px]">
        {modulesHub.title}
      </p>
      <div className="mt-5 flex items-baseline justify-center gap-1">
        <span className="text-[44px] font-bold leading-none text-brand-500 sm:text-[52px]">
          {modulesHub.score}
        </span>
        <span className="text-[14px] text-white/35">/{modulesHub.maxScore}</span>
      </div>
      <div
        className="mt-5 h-1 w-full bg-white/10"
        role="presentation"
        aria-hidden
      >
        <div
          className="h-full bg-brand-600 transition-[width] duration-500"
          style={{ width: `${fill}%` }}
        />
      </div>
    </div>
  );
}

/** Left: four module boxes. Right: Market Momentum Score hub. Connected by lines. */
export function FourModulesIllustration() {
  const moduleCenters = [12.5, 37.5, 62.5, 87.5];
  const busX = 56;
  const hubX = 74;

  return (
    <section
      className="relative overflow-hidden section-edge-b bg-surface"
      aria-label="Module architecture diagram"
    >
      <SectionBackground tone="surface" />
      <div className="relative z-10 mx-auto max-w-container px-4 py-12 sm:px-6 md:py-20">
        <figure
          className="modules-diagram mx-auto w-full max-w-4xl"
          aria-label="Four intelligence modules connected to the BIU Market Momentum Score"
        >
          <div className="relative grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-10 lg:gap-14">
            <svg
              aria-hidden
              className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <g
                stroke="var(--border)"
                strokeWidth="0.75"
                vectorEffect="non-scaling-stroke"
              >
                {moduleCenters.map((y) => (
                  <line key={y} x1="32" y1={y} x2={busX} y2={y} />
                ))}
                <line x1={busX} y1={moduleCenters[0]} x2={busX} y2={moduleCenters[3]} />
                <line x1={busX} y1="50" x2={hubX} y2="50" />
              </g>
            </svg>

            <div className="relative z-[1] flex flex-col gap-3 sm:gap-3.5">
              {productModules.map((mod) => (
                <ModuleBox key={mod.id} mod={mod} />
              ))}
            </div>

            <div className="relative z-[1] flex items-center justify-center md:justify-end">
              <HubBox className="w-full max-w-[260px] sm:max-w-[280px]" />
            </div>
          </div>

          <figcaption className="sr-only">
            {productModules.map((m) => m.label).join(", ")} feed into{" "}
            {modulesHub.title}, currently {modulesHub.score} out of{" "}
            {modulesHub.maxScore}.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

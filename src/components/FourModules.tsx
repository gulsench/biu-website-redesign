import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { productModules } from "@/lib/modules";
import { ModuleMock } from "@/components/ModuleMock";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export function FourModules() {
  const [activeModule, setActiveModule] = useState(0);
  const [activePillar, setActivePillar] = useState(0);
  const reduce = useReducedMotion();

  const module = productModules[activeModule];
  const pillar = module.pillars[activePillar];
  const previewKey = `${module.id}-${pillar.id}`;
  const moduleNumber = String(activeModule + 1).padStart(2, "0");

  function selectModule(index: number) {
    setActiveModule(index);
    setActivePillar(0);
  }

  return (
    <section id="modules" className="w-full overflow-x-clip border-t border-color-border bg-color-surface py-12 sm:py-16 md:py-24">
      <div className="section-container">
        <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-14 xl:gap-16">
          <div className="min-w-0">
            <Reveal>
              <h2 className="font-heading text-[clamp(1.75rem,5vw,2.5rem)] font-medium leading-tight text-color-text">
                Four intelligence{" "}
                <span className="text-blue">modules.</span>
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-color-text-muted md:text-[15px]">
                One platform for AI visibility, social momentum, competitive
                intelligence, and reputation — folded into a single score.
              </p>
            </Reveal>

            <nav
              role="tablist"
              aria-label="Intelligence modules"
              className="mt-8 flex flex-col sm:mt-10"
            >
              {productModules.map((mod, index) => {
                const selected = index === activeModule;
                const number = String(index + 1).padStart(2, "0");

                return (
                  <button
                    key={mod.id}
                    role="tab"
                    aria-selected={selected}
                    onClick={() => selectModule(index)}
                    className={cn(
                      "group relative flex w-full items-center gap-4 border-b border-color-border py-4 text-left transition-colors",
                      selected ? "text-color-text" : "text-color-text-muted hover:text-color-text",
                    )}
                  >
                    <span className="w-6 flex-shrink-0 font-mono text-xs text-color-text-dim">
                      {number}
                    </span>
                    <span className="flex-1 font-heading text-base font-medium leading-snug md:text-[17px]">
                      {mod.label}
                    </span>
                    <span
                      className={cn(
                        "h-2 w-2 flex-shrink-0",
                        selected ? "bg-blue" : "bg-transparent",
                      )}
                      aria-hidden
                    />
                    {selected ? (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue" aria-hidden />
                    ) : null}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="min-w-0">
            <Reveal delay={0.05}>
              <div className="flex items-center justify-center lg:justify-end">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={previewKey}
                    initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
                    transition={{ duration: reduce ? 0 : 0.28, ease: [0.23, 1, 0.32, 1] }}
                    className="w-full min-w-0 max-w-md lg:max-w-lg"
                  >
                    <ModuleMock pillarId={pillar.id} />
                  </motion.div>
                </AnimatePresence>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={previewKey}
                  initial={reduce ? { opacity: 1 } : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
                  transition={{ duration: reduce ? 0 : 0.25, ease: [0.23, 1, 0.32, 1] }}
                  className="mt-6 border border-color-border/80 bg-color-bg-alt/40 px-4 py-6 sm:mt-8 sm:px-6 sm:py-8 md:px-8 md:py-10"
                >
                  <p className="font-mono text-[10px] font-medium uppercase tracking-widest text-blue sm:text-xs">
                    {moduleNumber} · {module.label.toUpperCase()}
                  </p>
                  <h3 className="mt-2 font-heading text-2xl font-medium text-color-text sm:mt-3 sm:text-3xl md:text-4xl">
                    {pillar.label}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-color-text-muted sm:mt-4 md:text-base">
                    {pillar.description}
                  </p>

                  <div
                    role="tablist"
                    aria-label={`${module.label} pillars`}
                    className="no-scrollbar -mx-1 mt-5 flex gap-2 overflow-x-auto px-1 pb-1 sm:mx-0 sm:mt-6 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0"
                  >
                    {module.pillars.map((p, i) => (
                      <button
                        key={p.id}
                        role="tab"
                        aria-selected={i === activePillar}
                        onClick={() => setActivePillar(i)}
                        className={cn(
                          "shrink-0 border px-3 py-1.5 text-[11px] font-semibold transition-colors",
                          i === activePillar
                            ? "border-blue/30 bg-color-blue-tint text-blue"
                            : "border-color-border bg-color-bg-alt text-color-text-muted hover:border-blue/20 hover:text-color-text",
                        )}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Minus, Plus } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import { moduleHref } from "@/lib/routes";

const personas = [
  {
    id: "founder",
    label: "Founder",
    benefits: [
      "One score the board and team both trust",
      "See where rivals win AI answers before buyers do",
      "Know the single move that closes your visibility gap",
      "Cut weekly reporting from five dashboards to one briefing",
    ],
    href: moduleHref(),
  },
  {
    id: "growth",
    label: "Growth Lead",
    benefits: [
      "Prioritise channels by real category signal, not gut feel",
      "Track share of search across ChatGPT, Perplexity, and Google AI",
      "Spot competitor moves the day they shift rankings",
      "Forecast which content plays will move your score",
    ],
    href: moduleHref(),
  },
  {
    id: "content",
    label: "Content Marketer",
    benefits: [
      "Plan content around queries rivals already own",
      "See which formats and hashtags compound reach",
      "Fill answer gaps with topics ranked by impact",
      "Measure sentiment in the conversation around your brand",
    ],
    href: moduleHref(),
  },
  {
    id: "brand",
    label: "Brand Manager",
    benefits: [
      "Monitor reputation signals beyond star ratings",
      "Track awareness, trust, and consideration in one view",
      "Protect share of voice when rivals enter the category",
      "Align the team on one brand health narrative",
    ],
    href: moduleHref(),
  },
  {
    id: "aeo",
    label: "AEO Specialist",
    benefits: [
      "Know which engines cite your brand — and for which queries",
      "Catch citation gaps before they compound",
      "Optimise for rankings and AI answers at the same time",
      "Get alerts when competitors gain new AI placements",
    ],
    href: moduleHref(),
  },
] as const;

export function PersonaEdge() {
  const [activeId, setActiveId] = useState<(typeof personas)[number]["id"]>("founder");
  const reduce = useReducedMotion();
  const active = personas.find((p) => p.id === activeId) ?? personas[0];

  return (
    <section
      id="personas"
      className="section-light w-full overflow-x-clip border-t border-color-border py-12 sm:py-16 md:py-24"
    >
      <div className="section-container">
        <Reveal className="mb-10 max-w-2xl md:mb-14">
          <h2 className="font-heading text-[clamp(1.75rem,5vw,3rem)] font-medium leading-tight tracking-[-0.03em] text-color-text md:text-5xl">
            Whatever your role, BIU gives you an{" "}
            <span className="text-blue">edge.</span>
          </h2>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-14 xl:gap-20">
          <Reveal className="min-w-0">
            <div role="tablist" aria-label="Roles">
              {personas.map((persona) => {
                const selected = persona.id === activeId;
                return (
                  <button
                    key={persona.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-controls={`persona-panel-${persona.id}`}
                    id={`persona-tab-${persona.id}`}
                    onClick={() => setActiveId(persona.id)}
                    className={cn(
                      "flex w-full items-center gap-4 border-b border-color-border py-5 text-left transition-colors",
                      selected ? "text-color-text" : "text-color-text-muted hover:text-color-text",
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors",
                        selected
                          ? "border-blue bg-blue text-white"
                          : "border-color-border bg-transparent text-color-text-muted",
                      )}
                      aria-hidden
                    >
                      {selected ? <Minus size={14} strokeWidth={2.5} /> : <Plus size={14} strokeWidth={2.5} />}
                    </span>
                    <span className="font-heading text-base font-medium md:text-lg">
                      {persona.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.05} className="min-w-0 lg:pt-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                id={`persona-panel-${active.id}`}
                role="tabpanel"
                aria-labelledby={`persona-tab-${active.id}`}
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
                transition={{ duration: reduce ? 0 : 0.22, ease: [0.23, 1, 0.32, 1] }}
              >
                <ul className="space-y-4 sm:space-y-5">
                  {active.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <span
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue/15"
                        aria-hidden
                      >
                        <Check size={12} className="text-blue" strokeWidth={2.5} />
                      </span>
                      <span className="text-[15px] leading-relaxed text-color-text sm:text-base">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={active.href}
                  className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-blue transition-opacity hover:opacity-80"
                >
                  Learn more
                  <ArrowRight size={15} strokeWidth={2} />
                </Link>
              </motion.div>
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

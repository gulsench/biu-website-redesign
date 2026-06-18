"use client";

import { Fragment, useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { journeys, sectionCopy } from "@/lib/content";
import { SectionHeader } from "./ui/SectionHeader";
import { Reveal } from "./ui/Reveal";
import { cn } from "@/lib/cn";

export function Journeys() {
  const [active, setActive] = useState(journeys[0].id);
  const journey = journeys.find((j) => j.id === active) ?? journeys[0];
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: reduce ? 0 : 0.1 } },
  };
  const step: Variants = {
    hidden: { opacity: 1, x: reduce ? 0 : -16 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: reduce ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const arrow: Variants = {
    hidden: { opacity: 1, scaleX: reduce ? 1 : 0 },
    visible: { opacity: 1, scaleX: 1, transition: { duration: reduce ? 0 : 0.3 } },
  };

  return (
    <section id="journey" className="py-20 md:py-28">
      <div className="mx-auto max-w-container px-6">
        <SectionHeader
          label={sectionCopy.journey.label}
          title={sectionCopy.journey.h2}
          sub={sectionCopy.journey.sub}
          accent="var(--acc-journey)"
          className="mb-8"
        />

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Conversion journeys"
          className="mb-8 flex flex-wrap justify-center gap-2"
        >
          {journeys.map((j) => {
            const isActive = active === j.id;
            return (
              <button
                key={j.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(j.id)}
                className={cn(
                  "rounded-chip border px-3.5 py-1.5 text-[12px] font-semibold transition-colors",
                  isActive
                    ? "border-acc-journey bg-[color-mix(in_srgb,var(--acc-journey)_12%,white)] text-acc-journey"
                    : "border-border text-mid hover:border-ink hover:text-ink"
                )}
              >
                {j.label}
              </button>
            );
          })}
        </div>

        {/* Flow */}
        <Reveal>
          <motion.div
            key={journey.id}
            variants={container}
            initial="hidden"
            animate="visible"
            className="no-scrollbar flex items-stretch overflow-x-auto pb-2"
          >
            {journey.steps.map((s, i) => (
              <Fragment key={`${journey.id}-${i}`}>
                <motion.div
                  variants={step}
                  className="w-[200px] flex-shrink-0"
                >
                  <div className="h-full rounded-card border border-border bg-white p-4 shadow-soft">
                    <p className="eyebrow-text mb-1 text-acc-journey">
                      {s.type}
                    </p>
                    <p className="mb-2 break-words font-mono text-[10px] text-mid">
                      {s.url}
                    </p>
                    <p className="text-[11px] leading-snug text-mid">{s.desc}</p>
                  </div>
                </motion.div>
                {i < journey.steps.length - 1 && (
                  <motion.div
                    variants={arrow}
                    style={{ originX: 0 }}
                    className="flex flex-shrink-0 items-center px-2 text-acc-journey"
                    aria-hidden
                  >
                    →
                  </motion.div>
                )}
              </Fragment>
            ))}
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

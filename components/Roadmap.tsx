"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { phases, sectionCopy, type Phase } from "@/lib/content";
import { SectionHeader } from "./ui/SectionHeader";
import { Reveal } from "./ui/Reveal";

function PhaseCard({
  p,
  expanded,
  onToggle,
}: {
  p: Phase;
  expanded: boolean;
  onToggle: () => void;
}) {
  const reduce = useReducedMotion();
  return (
    <div className="flex flex-col rounded-card border border-border bg-white p-6 shadow-soft">
      <button
        type="button"
        aria-expanded={expanded}
        onClick={onToggle}
        className="text-left"
      >
        <p className="eyebrow-text mb-2 text-acc-roadmap">Phase {p.num}</p>
        <h3 className="text-[15px] font-bold text-ink">{p.title}</h3>
        <p className="mb-3.5 font-mono text-[11px] text-muted">{p.period}</p>
        <p className="mb-4 text-[12px] leading-relaxed text-mid">{p.goal}</p>
        <p className="text-[28px] font-extrabold tracking-tight text-ink">
          {p.count}{" "}
          <span className="text-[11px] font-medium text-muted">pages</span>
        </p>

        {/* Progress bar fills on view */}
        <div className="mt-4 h-[3px] overflow-hidden rounded-full bg-border">
          <motion.div
            className="h-full rounded-full bg-acc-roadmap"
            initial={{ width: reduce ? `${p.pct}%` : 0 }}
            whileInView={{ width: `${p.pct}%` }}
            viewport={{ once: true, amount: 0.8 }}
            transition={
              reduce
                ? { duration: 0 }
                : { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
            }
          />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <ul className="mt-4 space-y-1.5 border-t border-border pt-4">
              {p.pages.map((pg) => (
                <li
                  key={pg}
                  className="flex items-start gap-2 text-[11px] text-mid"
                >
                  <span className="flex-shrink-0 text-acc-roadmap" aria-hidden>
                    →
                  </span>
                  {pg}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Roadmap() {
  const [expanded, setExpanded] = useState<string | null>(null);
  return (
    <section id="phases" className="py-20 md:py-28">
      <div className="mx-auto max-w-container px-6">
        <SectionHeader
          label={sectionCopy.phases.label}
          title={sectionCopy.phases.h2}
          sub={sectionCopy.phases.sub}
          accent="var(--acc-roadmap)"
          className="mb-12"
        />
        <Reveal className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {phases.map((p) => (
            <PhaseCard
              key={p.num}
              p={p}
              expanded={expanded === p.num}
              onToggle={() => setExpanded(expanded === p.num ? null : p.num)}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

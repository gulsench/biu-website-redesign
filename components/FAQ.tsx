"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { faq } from "@/lib/content";
import { SectionHeader } from "./ui/SectionHeader";
import { Reveal } from "./ui/Reveal";
import { SectionBackground } from "./ui/SectionBackground";
import { cn } from "@/lib/cn";

function PlusIcon({ expanded }: { expanded: boolean }) {
  return (
    <span
      className={cn(
        "mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center border border-border text-mid transition-transform duration-200 sm:mt-1",
        expanded && "rotate-45",
      )}
      aria-hidden
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        className="text-current"
      >
        <path
          d="M6 2v8M2 6h8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="square"
        />
      </svg>
    </span>
  );
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section id="faq" className="relative overflow-hidden section-edge-b bg-band">
      <SectionBackground tone="band" subtle />
      <div className="section-wrap relative z-10">
        <SectionHeader
          label="FAQ"
          title="Questions, answered."
          className="mb-14"
        />

        <Reveal className="mx-auto max-w-3xl divide-y divide-border overflow-hidden border border-border bg-card">
          {faq.map((item, i) => {
            const expanded = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  aria-expanded={expanded}
                  onClick={() => setOpen(expanded ? null : i)}
                  className="flex w-full items-start justify-between gap-3 px-4 py-4 text-left sm:gap-4 sm:px-6 sm:py-5"
                >
                  <span className="text-left text-[14px] font-semibold leading-snug text-ink sm:text-[15px]">
                    {item.q}
                  </span>
                  <PlusIcon expanded={expanded} />
                </button>
                <AnimatePresence initial={false}>
                  {expanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: reduce ? 0 : 0.28, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-4 pb-4 text-[13px] leading-relaxed text-mid sm:px-6 sm:pb-5 sm:text-[14px]">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

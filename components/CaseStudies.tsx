"use client";

import { caseStudies, sectionCopy } from "@/lib/content";
import { SectionHeader } from "./ui/SectionHeader";
import { Pill } from "./ui/Pill";
import { Reveal, RevealItem } from "./ui/Reveal";
import { cn } from "@/lib/cn";

// Soft green glow per card
const cardGlow = ["#b9f4d0", "#86efac", "#d1fae5"];

export function CaseStudies() {
  return (
    <section id="cases" className="py-20 md:py-28">
      <div className="mx-auto max-w-container px-6">
        <SectionHeader
          label={sectionCopy.cases.label}
          title={sectionCopy.cases.h2}
          sub={sectionCopy.cases.sub}
          accent="var(--acc-cases)"
          className="mb-12"
        />

        <Reveal
          stagger
          className="grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {caseStudies.map((c, i) => (
            <RevealItem
              key={i}
              className={cn(
                // gentle offset / masonry feel
                i % 3 === 1 && "lg:mt-6",
                i % 3 === 2 && "lg:mt-10"
              )}
            >
              <figure className="relative overflow-hidden rounded-card border border-border bg-white p-7 shadow-soft">
                {/* Soft blurred color glow rising from the bottom of the card */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -bottom-20 left-1/2 h-48 w-[130%] -translate-x-1/2 rounded-full blur-3xl"
                  style={{
                    background: cardGlow[i % cardGlow.length],
                    opacity: 0.5,
                  }}
                />
                <div className="relative">
                  <Pill
                    textColor="var(--acc-cases)"
                    bgColor="color-mix(in srgb, var(--acc-cases) 10%, white)"
                    className="mb-5 uppercase tracking-wide"
                  >
                    Placeholder
                  </Pill>
                  <blockquote className="mb-6 text-[15px] leading-relaxed text-ink">
                    {c.quote}
                  </blockquote>
                  <figcaption className="flex items-center gap-3">
                    <span
                      className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-[12px] font-bold text-white ring-2"
                      style={{
                        background: "var(--acc-cases)",
                        boxShadow:
                          "0 0 0 3px color-mix(in srgb, var(--acc-cases) 18%, white)",
                      }}
                    >
                      {c.initials}
                    </span>
                    <span>
                      <span className="block text-[13px] font-bold text-ink">
                        {c.name}
                      </span>
                      <span className="block text-[11px] text-muted">
                        {c.role}
                      </span>
                    </span>
                  </figcaption>
                </div>
              </figure>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

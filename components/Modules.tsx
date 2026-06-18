"use client";

import { useState } from "react";
import { modules, sectionCopy, type ModuleItem } from "@/lib/content";
import { SectionHeader } from "./ui/SectionHeader";
import { Pill } from "./ui/Pill";
import { Reveal } from "./ui/Reveal";
import { cn } from "@/lib/cn";

const hueVar: Record<ModuleItem["hue"], string> = {
  ci: "var(--mod-ci)",
  rep: "var(--mod-rep)",
  ecom: "var(--mod-ecom)",
  voice: "var(--mod-voice)",
};

const hueIcon: Record<ModuleItem["hue"], string> = {
  ci: "⬡",
  rep: "◈",
  ecom: "▦",
  voice: "◉",
};

function ModuleCard({ m }: { m: ModuleItem }) {
  const [hover, setHover] = useState(false);
  const hue = hueVar[m.hue];
  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={cn(
        "group relative flex min-w-[260px] snap-start flex-col rounded-card border border-border bg-white p-6 transition-all duration-200 md:min-w-0",
        hover ? "shadow-lift -translate-y-1" : "shadow-soft"
      )}
    >
      {/* Top-border draws in on hover */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-[3px] origin-left rounded-t-card transition-transform duration-200"
        style={{
          background: hue,
          transform: hover ? "scaleX(1)" : "scaleX(0)",
        }}
      />
      <div className="mb-4 flex items-center justify-between">
        <span
          className="flex h-11 w-11 items-center justify-center rounded-chip text-xl"
          style={{ color: hue, background: `color-mix(in srgb, ${hue} 10%, white)` }}
          aria-hidden
        >
          {hueIcon[m.hue]}
        </span>
        {m.status === "ships-first" ? (
          <Pill
            dot
            dotColor={hue}
            textColor={hue}
            bgColor={`color-mix(in srgb, ${hueVar[m.hue]} 12%, white)`}
            className="uppercase tracking-wide"
          >
            Ships first
          </Pill>
        ) : (
          <Pill
            textColor="var(--muted)"
            bgColor="var(--surface)"
            className="uppercase tracking-wide"
          >
            Coming soon
          </Pill>
        )}
      </div>

      <h3 className="mb-1.5 text-[15px] font-bold tracking-tight text-ink">
        {m.name}
      </h3>
      <p className="mb-4 text-[13px] leading-relaxed text-muted">{m.desc}</p>

      <ul className="mt-auto space-y-1.5">
        {m.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-[12px] text-mid">
            <span style={{ color: hue }} aria-hidden className="flex-shrink-0">
              →
            </span>
            {f}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Modules() {
  return (
    <section id="modules" className="py-20 md:py-28">
      <div className="mx-auto max-w-container px-6">
        <SectionHeader
          label={sectionCopy.modules.label}
          title={sectionCopy.modules.h2}
          sub={sectionCopy.modules.sub}
          accent="var(--acc-modules)"
          className="mb-12"
        />

        <Reveal>
          <div className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 md:mx-0 md:grid md:grid-cols-4 md:gap-4 md:overflow-visible md:px-0">
            {modules.map((m) => (
              <ModuleCard key={m.id} m={m} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

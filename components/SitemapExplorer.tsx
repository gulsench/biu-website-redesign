"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  sitemapSections,
  sectionCopy,
  type SitemapPage,
  type Stage,
} from "@/lib/content";
import { SectionHeader } from "./ui/SectionHeader";
import { Reveal } from "./ui/Reveal";
import { cn } from "@/lib/cn";

const stageStyle: Record<Stage, { bg: string; color: string }> = {
  tofu: { bg: "#ecfdf5", color: "#0e7a4f" },
  mofu: { bg: "#f0fdf4", color: "#16a34a" },
  bofu: { bg: "#dcfce7", color: "#0b5c3b" },
};

function StagePill({ stage }: { stage: Stage }) {
  const s = stageStyle[stage];
  return (
    <span
      className="rounded-pill px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide"
      style={{ background: s.bg, color: s.color }}
    >
      {stage}
    </span>
  );
}

export function SitemapExplorer() {
  const sections = Object.keys(sitemapSections);
  const [activeSection, setActiveSection] = useState(sections[0]);
  const [activePage, setActivePage] = useState<SitemapPage>(
    sitemapSections[sections[0]][0]
  );
  const reduce = useReducedMotion();

  const handleSection = (s: string) => {
    setActiveSection(s);
    setActivePage(sitemapSections[s][0]);
  };

  return (
    <section id="sitemap" className="bg-surface py-24">
      <div className="mx-auto max-w-container px-6">
        <SectionHeader
          label={sectionCopy.sitemap.label}
          title={sectionCopy.sitemap.h2}
          sub={sectionCopy.sitemap.sub}
          accent="var(--acc-sitemap)"
          className="mb-8"
        />

        {/* Tabs with animated layoutId underline */}
        <div
          role="tablist"
          aria-label="Sitemap sections"
          className="no-scrollbar mb-8 flex gap-1 overflow-x-auto border-b border-border"
        >
          {sections.map((s) => {
            const active = activeSection === s;
            return (
              <button
                key={s}
                role="tab"
                aria-selected={active}
                onClick={() => handleSection(s)}
                className={cn(
                  "relative whitespace-nowrap px-4 py-2.5 text-[13px] font-semibold transition-colors",
                  active ? "text-acc-sitemap" : "text-muted hover:text-ink"
                )}
              >
                {s}
                {active && (
                  <motion.span
                    layoutId="sitemap-underline"
                    className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-acc-sitemap"
                    transition={
                      reduce
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 480, damping: 38 }
                    }
                  />
                )}
              </button>
            );
          })}
        </div>

        <Reveal className="grid gap-8 md:grid-cols-[280px_1fr]">
          {/* Tree */}
          <div>
            <p className="eyebrow-text mb-2 border-b border-border pb-2 text-muted">
              {activeSection}
            </p>
            <ul className="space-y-0.5">
              {sitemapSections[activeSection].map((p) => {
                const active = activePage.url === p.url;
                return (
                  <li key={p.url}>
                    <button
                      onClick={() => setActivePage(p)}
                      aria-current={active}
                      className={cn(
                        "flex w-full items-center justify-between gap-2 rounded-chip px-2.5 py-1.5 text-left transition-colors",
                        active
                          ? "bg-white text-acc-sitemap shadow-soft"
                          : "text-mid hover:bg-white/60 hover:text-ink"
                      )}
                    >
                      <span className="truncate font-mono text-[11px]">
                        {p.url}
                      </span>
                      <StagePill stage={p.stage} />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePage.url}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: reduce ? 0 : 0.25 }}
              className="rounded-card border border-border bg-white p-7 shadow-soft"
            >
              <p className="mb-4 font-mono text-[12px] text-muted">
                {activePage.url}
              </p>
              <h3 className="mb-3 text-lg font-bold tracking-tight text-ink">
                {activePage.label}
              </h3>
              <div className="mb-5 flex flex-wrap gap-2">
                <span className="rounded-chip bg-surface px-2.5 py-1 text-[11px] font-semibold text-mid">
                  → {activePage.audience}
                </span>
                <StagePill stage={activePage.stage} />
                <span className="rounded-chip bg-surface px-2.5 py-1 text-[11px] font-semibold text-mid">
                  CTA: {activePage.cta}
                </span>
              </div>
              <p className="mb-5 text-[14px] leading-relaxed text-mid">
                {activePage.purpose}
              </p>
              <div className="rounded-card border border-border bg-surface p-5">
                <p className="eyebrow-text mb-2.5 text-muted">
                  UX Copy — Brand Voice Applied
                </p>
                <p className="mb-2 text-lg font-bold leading-snug tracking-tight text-ink">
                  &ldquo;{activePage.headline}&rdquo;
                </p>
                <p className="mb-4 text-[13px] leading-relaxed text-mid">
                  {activePage.sub}
                </p>
                <span className="inline-block rounded-chip bg-ink px-4 py-2 text-[12px] font-bold text-white">
                  {activePage.ctaLabel}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}

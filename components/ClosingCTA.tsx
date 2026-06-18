"use client";

import { closingCta } from "@/lib/content";
import { Reveal } from "./ui/Reveal";

export function ClosingCTA() {
  return (
    <section className="bg-brand-grad text-white">
      <div className="mx-auto max-w-container px-6 py-24 text-center">
        <Reveal stagger className="mx-auto max-w-2xl">
          <h2 className="h2-display mb-8 text-white">{closingCta.headline}</h2>
          <button className="inline-flex items-center justify-center rounded-chip bg-white px-8 py-4 text-sm font-bold text-brand-700 shadow-lift transition-transform hover:-translate-y-0.5 active:translate-y-0">
            {closingCta.cta}
          </button>
        </Reveal>
      </div>
    </section>
  );
}

import { closingCta } from "@/lib/content";
import { Reveal } from "./ui/Reveal";

export function ClosingCTA() {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto max-w-container px-6 py-24 text-center md:py-28">
        <Reveal stagger className="mx-auto max-w-2xl">
          <h2 className="h2-display mb-5 text-white">
            {closingCta.headline.map((seg, i) => (
              <span key={i} className={seg.accent ? "text-brand-400" : undefined}>
                {seg.text}
              </span>
            ))}
          </h2>
          <p className="mb-9 text-[15px] text-[rgba(255,255,255,0.7)]">
            {closingCta.sub}
          </p>
          <button className="inline-flex items-center justify-center rounded-[10px] bg-white px-7 py-3.5 text-[15px] font-semibold text-ink transition-transform hover:-translate-y-0.5 active:translate-y-0">
            {closingCta.cta}
          </button>
        </Reveal>
      </div>
    </section>
  );
}

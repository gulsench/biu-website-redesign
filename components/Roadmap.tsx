import { roadmap } from "@/lib/content";
import { SectionHeader } from "./ui/SectionHeader";
import { Reveal, RevealItem } from "./ui/Reveal";

export function Roadmap() {
  return (
    <section id="roadmap" className="relative overflow-hidden section-edge-b site-section-dark">
      <div className="section-wrap relative z-10">
        <SectionHeader
          label={roadmap.eyebrow}
          title={roadmap.title}
          inverted
          className="mb-14"
        />

        <Reveal stagger className="grid gap-5 md:grid-cols-2">
          {roadmap.items.map((item) => (
            <RevealItem key={item.name}>
              <div className="relative h-full overflow-hidden border border-card-border bg-card p-8">
                <span className="inline-flex border border-brand-400/30 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-400">
                  Coming soon
                </span>
                <h3 className="h3-display mb-2 mt-5 text-ink">{item.name}</h3>
                <p className="max-w-md text-[14px] leading-relaxed text-mid">
                  {item.body}
                </p>
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

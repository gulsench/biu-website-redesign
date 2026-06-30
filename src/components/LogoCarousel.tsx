import { Reveal } from "@/components/Reveal";
import { LogoTicker } from "@/components/LogoTicker";

const logos = [
  "Northbeam",
  "Loop",
  "Glowwell",
  "Stack & Co",
  "Verdant",
  "Hypergrowth",
  "Onyx Labs",
  "Brightside",
];

export function LogoCarousel() {
  return (
    <section className="w-full border-t border-color-border bg-color-bg py-8 md:py-12">
      <div className="section-container">
        <Reveal>
          <p className="mb-2 text-center font-heading text-sm font-medium text-color-text sm:text-base">
            Trusted by modern brand and growth teams
          </p>
          <p className="mb-6 text-center text-xs text-color-text-dim sm:mb-8 sm:text-sm">
            From D2C founders to enterprise marketing — one score they all align on.
          </p>
          <LogoTicker
            items={logos.map((label) => ({ type: "text" as const, label }))}
          />
        </Reveal>
      </div>
    </section>
  );
}

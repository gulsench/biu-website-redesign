import { hero } from "@/lib/content";
import { Button } from "./ui/Button";
import { Reveal, RevealItem } from "./ui/Reveal";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-7.5rem)] overflow-hidden bg-band">
      {/* Diagonal accent ribbon — bottom right */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-28 -right-16 h-[min(52vh,420px)] w-[min(62vw,640px)] rotate-[-31deg] bg-brand-700/35" />
        <div className="absolute -bottom-20 -right-10 h-[min(48vh,380px)] w-[min(58vw,600px)] rotate-[-31deg] bg-brand-accent shadow-[0_28px_90px_rgba(54,189,131,0.28)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-7.5rem)] max-w-container flex-col justify-center px-6 py-20 md:px-8 md:py-28 lg:py-32">
        <Reveal stagger className="max-w-4xl">
          <RevealItem>
            <a
              href="#platform"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2.5 text-[13px] font-medium text-mid backdrop-blur-sm transition-colors hover:border-brand-500/40 hover:text-ink"
            >
              {hero.eyebrow}
              <span
                aria-hidden
                className="text-muted transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </a>
          </RevealItem>

          <RevealItem>
            <h1 className="mt-10 max-w-[18ch] text-[clamp(2.75rem,6vw,4.5rem)] font-extrabold leading-[1.12] tracking-[-0.04em] text-ink md:mt-12 lg:max-w-[16ch] lg:text-[clamp(3rem,5.5vw,4.75rem)] lg:leading-[1.08]">
              {hero.h1.map((seg, i) => (
                <span key={i} className={seg.accent ? "accent" : undefined}>
                  {seg.text}
                </span>
              ))}
            </h1>
          </RevealItem>

          <RevealItem>
            <p className="mt-8 max-w-2xl text-lg leading-[1.75] text-mid md:mt-10 md:text-xl md:leading-[1.7]">
              {hero.sub}
            </p>
          </RevealItem>

          <RevealItem>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center md:mt-12">
              <Button variant="audit" size="lg">
                {hero.ctaPrimary}
                <span aria-hidden>→</span>
              </Button>
              <Button variant="outline" size="lg">
                {hero.ctaSecondary}
              </Button>
            </div>
          </RevealItem>
        </Reveal>
      </div>
    </section>
  );
}

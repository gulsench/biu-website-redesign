import { hero } from "@/lib/content";
import { Button } from "./ui/Button";
import { Eyebrow } from "./ui/Eyebrow";
import { Reveal, RevealItem } from "./ui/Reveal";
import { SignalCard } from "./SignalCard";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-container px-6 py-20 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Left: copy */}
          <Reveal stagger className="text-center md:text-left">
            <RevealItem>
              <Eyebrow color="var(--brand-700)" className="mb-5">
                {hero.eyebrow}
              </Eyebrow>
            </RevealItem>
            <RevealItem>
              <h1 className="h1-display mb-6 text-ink">
                {hero.h1.map((seg, i) => (
                  <span
                    key={i}
                    className={
                      seg.accent
                        ? "accent-serif font-bold text-brand-600"
                        : undefined
                    }
                  >
                    {seg.text}
                  </span>
                ))}
              </h1>
            </RevealItem>
            <RevealItem>
              <div className="flex flex-nowrap justify-center gap-2 md:justify-start md:gap-3">
                <Button
                  variant="primary"
                  size="lg"
                  className="px-4 text-[12px] sm:px-7 sm:text-sm"
                >
                  {hero.ctaPrimary}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-4 text-[12px] sm:px-7 sm:text-sm"
                >
                  {hero.ctaSecondary}
                </Button>
              </div>
            </RevealItem>
            <RevealItem>
              <dl className="mt-9 flex flex-wrap justify-center gap-x-8 gap-y-4 md:justify-start">
                {hero.stats.map((s) => (
                  <div key={s.label}>
                    <dt className="sr-only">{s.label}</dt>
                    <dd>
                      <span className="block text-xl font-extrabold tracking-tight text-ink">
                        {s.value}
                      </span>
                      <span className="text-xs text-muted">{s.label}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </RevealItem>
          </Reveal>

          {/* Right: signature signal card */}
          <Reveal delay={0.15}>
            <SignalCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

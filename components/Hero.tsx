import { hero } from "@/lib/content";
import { Button } from "./ui/Button";
import { Eyebrow } from "./ui/Eyebrow";
import { Reveal, RevealItem } from "./ui/Reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="relative z-10 mx-auto max-w-container px-6 py-20 md:py-28">
        <Reveal stagger className="max-w-4xl">
          <RevealItem>
            <Eyebrow className="mb-6">{hero.eyebrow}</Eyebrow>
          </RevealItem>
          <RevealItem>
            <h1 className="h1-display mb-7 text-ink">
              {hero.h1.map((seg, i) => (
                <span key={i} className={seg.accent ? "accent" : undefined}>
                  {seg.text}
                </span>
              ))}
            </h1>
          </RevealItem>
          <RevealItem>
            <p className="mb-3 text-lg font-semibold text-ink md:text-xl">
              {hero.lead}
            </p>
          </RevealItem>
          <RevealItem>
            <p className="body-text mb-9 max-w-2xl text-mid">{hero.sub}</p>
          </RevealItem>
          <RevealItem>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button variant="primary" size="lg">
                {hero.ctaPrimary}
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

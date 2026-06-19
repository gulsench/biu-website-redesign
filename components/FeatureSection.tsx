import type { FeatureSection as FeatureData } from "@/lib/content";
import { Eyebrow } from "./ui/Eyebrow";
import { Reveal, RevealItem } from "./ui/Reveal";
import { FeatureMock } from "./FeatureMock";
import { cn } from "@/lib/cn";

export function FeatureSection({
  data,
  flip,
}: {
  data: FeatureData;
  flip?: boolean;
}) {
  return (
    <div className="border-b border-border">
      <div className="mx-auto grid max-w-container items-center gap-10 px-6 py-20 md:py-24 lg:grid-cols-2 lg:gap-16">
        {/* Copy */}
        <Reveal stagger className={cn(flip && "lg:order-2")}>
          <RevealItem>
            <div className="mb-5 flex items-center gap-3">
              <Eyebrow>{data.eyebrow}</Eyebrow>
              {data.status && (
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
                    data.status === "Live"
                      ? "bg-brand-glow text-brand-700"
                      : "bg-surfacealt text-muted"
                  )}
                >
                  {data.status}
                </span>
              )}
            </div>
          </RevealItem>
          <RevealItem>
            <h2 className="h2-display mb-5 max-w-xl text-ink">
              {data.title.map((seg, i) => (
                <span key={i} className={seg.accent ? "accent" : undefined}>
                  {seg.text}
                </span>
              ))}
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="body-text mb-7 max-w-lg text-mid">{data.body}</p>
          </RevealItem>
          <RevealItem>
            <ul className="space-y-3">
              {data.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-[14.5px] text-ink">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 20 20"
                    className="mt-0.5 flex-shrink-0 text-brand-600"
                    aria-hidden
                  >
                    <path
                      d="M4 10.5 8 14.5 16 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {b}
                </li>
              ))}
            </ul>
          </RevealItem>
        </Reveal>

        {/* Mock */}
        <Reveal delay={0.1} className={cn(flip && "lg:order-1")}>
          <FeatureMock variant={data.mock} />
        </Reveal>
      </div>
    </div>
  );
}

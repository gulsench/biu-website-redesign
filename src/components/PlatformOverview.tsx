import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { moduleHref } from "@/lib/routes";
import type { ModuleId } from "@/lib/modules";

const capabilities: {
  title: string;
  description: string;
  tools: string[];
  moduleId: ModuleId;
}[] = [
  {
    title: "Brand & AI Search",
    description:
      "Dominate AI answers. Track citations, share of search, and gaps across every engine buyers ask first.",
    tools: ["Share of Search", "Answer Gaps", "Citation Alerts", "AEO Score"],
    moduleId: "aeo",
  },
  {
    title: "Social & Voice",
    description:
      "See which content compounds reach, which hashtags amplify you, and what your audience actually says.",
    tools: ["Content", "Hashtag", "Comments", "Engagement"],
    moduleId: "social",
  },
  {
    title: "Competitive Intelligence",
    description:
      "Study what rivals are doing, surface content gaps, and catch the move that shifts category share.",
    tools: ["Share of Voice", "Content Gap", "Move Tracker", "Benchmark Score"],
    moduleId: "competition",
  },
  {
    title: "Reputation Signal",
    description:
      "The gap between being found and being chosen — awareness, trust, consideration, and choice in one view.",
    tools: ["Awareness", "Trust", "Consideration", "Choice"],
    moduleId: "reputation",
  },
];

export function PlatformOverview() {
  return (
    <section
      id="platform"
      className="section-light-alt w-full overflow-x-clip border-t border-color-border py-12 sm:py-16 md:py-24"
    >
      <div className="section-container">
        <Reveal className="mb-10 max-w-2xl md:mb-14">
          <h2 className="font-heading text-[clamp(1.75rem,5vw,3rem)] font-medium leading-tight tracking-[-0.03em] text-color-text md:text-5xl">
            Your brand intelligence platform — built for{" "}
            <span className="text-blue">search and AI.</span>
          </h2>
        </Reveal>

        <div className="grid gap-px border border-color-border bg-color-border sm:grid-cols-2">
          {capabilities.map((cap, index) => (
            <Reveal key={cap.title} delay={index * 0.05} y={12}>
              <article className="flex h-full min-w-0 flex-col bg-color-surface p-6 sm:p-8">
                <h3 className="font-heading text-xl font-medium text-color-text sm:text-2xl">
                  {cap.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-color-text-muted sm:text-[15px]">
                  {cap.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {cap.tools.map((tool) => (
                    <li
                      key={tool}
                      className="border border-color-border bg-color-bg-alt px-2.5 py-1 font-mono text-[10px] text-color-text-muted"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
                <Link
                  to={moduleHref(cap.moduleId)}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-blue transition-opacity hover:opacity-80"
                >
                  Explore module
                  <ArrowRight size={15} strokeWidth={2} />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

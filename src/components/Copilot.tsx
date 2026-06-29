import { Bot, Check } from "lucide-react";
import {
  ModuleCard,
  ModuleCardDivider,
  ModuleCardHeader,
  ModuleCardSubtitle,
} from "@/components/ModuleCard";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

const bullets = [
  "Root-cause analysis in plain language",
  "Prioritised next moves, ranked by impact",
  "Ask anything about your market in natural language",
];

const chat = [
  { role: "user" as const, text: "Why did our Momentum Score drop this week?" },
  {
    role: "ai" as const,
    text: "Your AI Share of Search fell 6pts in 'organic skincare' after a competitor was newly cited by Perplexity and Google AI Overviews. Biggest lever: 3 authority placements. Want the playbook?",
  },
];

function ChatMock() {
  return (
    <ModuleCard>
      <ModuleCardHeader
        label="BIU Copilot"
        icon={<Bot size={18} className="shrink-0 text-blue" strokeWidth={2} aria-hidden />}
      />
      <ModuleCardSubtitle>
        Your AI analyst — surfaces the one change that matters
      </ModuleCardSubtitle>
      <ModuleCardDivider />
      <div className="space-y-3">
        {chat.map((message, i) => (
          <div
            key={i}
            className={cn("flex", message.role === "user" ? "justify-end" : "justify-start")}
          >
            <p
              className={cn(
                "max-w-[92%] px-3.5 py-3 text-[13px] leading-relaxed sm:max-w-[90%] sm:px-4 sm:text-sm",
                message.role === "user"
                  ? "border border-color-border-light bg-color-blue-tint text-color-text"
                  : "border border-color-border bg-color-bg-alt text-color-text-muted",
              )}
            >
              {message.text}
            </p>
          </div>
        ))}
      </div>
    </ModuleCard>
  );
}

export function Copilot() {
  return (
    <section
      id="copilot"
      className="w-full overflow-x-clip border-t border-color-border bg-color-bg py-12 sm:py-16 md:py-24"
    >
      <div className="section-container">
        <div className="grid min-w-0 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <Reveal delay={0.06} className="min-w-0 lg:order-2">
            <ChatMock />
          </Reveal>

          <Reveal className="min-w-0 lg:order-1">
            <h2 className="font-heading text-[clamp(1.75rem,5vw,3rem)] font-medium text-color-text md:text-5xl">
              Your AI analyst that never{" "}
              <span className="text-blue">sleeps.</span>
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-color-text-muted">
              BIU Copilot watches every signal, surfaces the one change that
              matters, and writes the briefing for you — so your team starts
              from the answer, not the spreadsheet.
            </p>
            <ul className="mt-8 space-y-3">
              {bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-3 text-sm text-color-text md:text-[15px]"
                >
                  <Check
                    size={18}
                    className="mt-0.5 flex-shrink-0 text-blue"
                    aria-hidden
                  />
                  {bullet}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

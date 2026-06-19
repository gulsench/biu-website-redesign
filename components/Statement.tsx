import { statement } from "@/lib/content";
import { Reveal } from "./ui/Reveal";

export function Statement() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-container px-6 py-24 md:py-32">
        <Reveal stagger className="mx-auto max-w-3xl text-center">
          <p className="h2-display text-ink">{statement.lead}</p>
          <p className="body-text mx-auto mt-6 max-w-2xl text-mid">
            {statement.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

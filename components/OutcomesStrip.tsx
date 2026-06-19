import { outcomes } from "@/lib/content";
import { Reveal } from "./ui/Reveal";

export function OutcomesStrip() {
  return (
    <section className="border-b border-border bg-surfacealt">
      <div className="mx-auto max-w-container px-6 py-12">
        <Reveal>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
            {outcomes.map((o) => (
              <div key={o.label}>
                <dd className="text-3xl font-extrabold tracking-tight text-ink">
                  {o.value}
                </dd>
                <dt className="mt-1 text-[12.5px] leading-snug text-mid">
                  {o.label}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

import { Reveal } from "@/components/Reveal";

const items = [
  {
    name: "Knowledge",
    body: "A living category knowledge base that answers what good looks like, and how far ahead the leaders are.",
  },
  {
    name: "Recruit",
    body: "Turn brand momentum into a talent magnet, with employer-brand signals tracked alongside growth.",
  },
];

export function Roadmap() {
  return (
    <section
      id="roadmap"
      className="section-light-alt w-full overflow-x-clip border-t border-color-border py-12 sm:py-16 md:py-24"
    >
      <div className="section-container">
        <Reveal className="mb-10 sm:mb-12 md:mb-14">
          <h2 className="font-heading text-[clamp(1.75rem,5vw,3rem)] font-medium text-color-text md:text-5xl">
            More intelligence,{" "}
            <span className="text-blue">coming soon</span>.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
          {items.map((item, idx) => (
            <Reveal key={item.name} delay={idx * 0.07} y={20}>
              <article className="flex h-full min-w-0 flex-col rounded-lg border border-color-border bg-color-bg-alt p-6 sm:p-8 md:p-10">
                <span className="inline-flex w-fit rounded-full border border-blue/25 bg-color-blue-tint px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-blue">
                  Coming soon
                </span>
                <h3 className="font-heading mt-5 text-2xl font-medium text-color-text">
                  {item.name}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-color-text-muted md:text-base">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

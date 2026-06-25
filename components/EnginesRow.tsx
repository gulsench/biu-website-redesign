import { engines, enginesHeading } from "@/lib/content";
import { EngineIcon } from "./ui/EngineIcon";
import { Reveal } from "./ui/Reveal";

export function EnginesRow() {
  return (
    <section className="section-edge-b">
      <div className="mx-auto max-w-container px-6 py-12">
        <Reveal className="text-center">
          <p className="eyebrow-text mb-7 text-muted">{enginesHeading}</p>
          <ul className="flex flex-wrap items-center justify-center gap-x-9 gap-y-4">
            {engines.map((e) => (
              <li
                key={e.name}
                className="flex items-center gap-2 text-[15px] font-semibold tracking-tight text-mid"
              >
                <EngineIcon icon={e.icon} className="h-[18px] w-[18px]" />
                {e.name}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

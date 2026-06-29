import { useMemo } from "react";
import { cn } from "@/lib/utils";

export interface TickerLinkItem {
  title: string;
  href: string;
}

const defaultItems: TickerLinkItem[] = [
  { title: "AEO", href: "#modules" },
  { title: "Social Media", href: "#modules" },
  { title: "Competition", href: "#modules" },
  { title: "Reputation", href: "#modules" },
];

/** Repeat items so each track is always wider than the viewport. */
const MIN_ITEMS_PER_TRACK = 16;

function buildTrackItems(items: TickerLinkItem[]) {
  const track = [...items];
  while (track.length < MIN_ITEMS_PER_TRACK) {
    track.push(...items);
  }
  return track;
}

interface InteractiveTickerLinkProps {
  items?: TickerLinkItem[];
  className?: string;
}

function TickerTrack({
  items,
  ariaHidden = false,
}: {
  items: TickerLinkItem[];
  ariaHidden?: boolean;
}) {
  return (
    <ul
      className="flex shrink-0 list-none items-center gap-8 pr-8 md:gap-12 md:pr-12"
      aria-hidden={ariaHidden}
    >
      {items.map((item, index) => (
        <li
          key={`${item.title}-${ariaHidden ? "clone" : "base"}-${index}`}
          className="shrink-0"
        >
          <a
            href={item.href}
            tabIndex={ariaHidden ? -1 : undefined}
            className="whitespace-nowrap font-body text-sm font-medium tracking-tight text-color-text-muted md:text-[15px]"
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function InteractiveTickerLink({
  items = defaultItems,
  className,
}: InteractiveTickerLinkProps) {
  const trackItems = useMemo(() => buildTrackItems(items), [items]);

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden border-t border-color-border/50",
        className,
      )}
    >
      <div className="py-4 md:py-5">
        <div className="hero-ticker-loop">
          <TickerTrack items={trackItems} />
          <TickerTrack items={trackItems} ariaHidden />
        </div>
      </div>
    </div>
  );
}

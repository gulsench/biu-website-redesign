"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

interface TilesProps {
  /** number of columns drawn horizontally */
  rows?: number;
  /** number of tiles stacked in each column */
  cols?: number;
  className?: string;
  tileClassName?: string;
}

/**
 * Interactive grid of tiles. Each tile lights up with a light-green wash on
 * hover, then fades back out. Hover color uses --brand-glow (light green).
 */
export function Tiles({
  rows = 28,
  cols = 10,
  className,
  tileClassName,
}: TilesProps) {
  const rowsArray = new Array(rows).fill(1);
  const colsArray = new Array(cols).fill(1);

  return (
    <div className={cn("relative z-0 flex w-full justify-center", className)}>
      {rowsArray.map((_, i) => (
        <div key={`col-${i}`} className="border-l border-border/70">
          {colsArray.map((_, j) => (
            <motion.div
              key={`tile-${i}-${j}`}
              whileHover={{
                backgroundColor: "var(--brand-glow)",
                transition: { duration: 0 },
              }}
              animate={{ transition: { duration: 1.6 } }}
              className={cn(
                "h-12 w-12 border-r border-t border-border/70",
                tileClassName
              )}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

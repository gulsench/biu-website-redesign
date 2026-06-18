"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { MegaColumn } from "@/lib/content";
import { Pill } from "./Pill";

interface MegaMenuProps {
  id: string;
  columns: MegaColumn[];
  open: boolean;
}

/**
 * Desktop mega-menu panel. Fade/slide-down with a small spring.
 * Positioned absolutely under its trigger by the parent Nav.
 */
export function MegaMenu({ id, columns, open }: MegaMenuProps) {
  const reduce = useReducedMotion();
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id={id}
          role="region"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
          animate={
            reduce
              ? { opacity: 1 }
              : {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 420, damping: 32 },
                }
          }
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
          className="absolute left-1/2 top-[calc(100%+12px)] z-50 w-[min(640px,90vw)] -translate-x-1/2 rounded-card border border-border bg-white p-6 shadow-lift"
        >
          <div className="grid grid-cols-2 gap-x-8 gap-y-1">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="eyebrow-text mb-3 text-muted">{col.title}</p>
                <ul className="space-y-0.5">
                  {col.items.map((item) => (
                    <li key={item.label}>
                      <a
                        href="#"
                        className="group block rounded-chip px-2.5 py-2 transition-colors hover:bg-surface"
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-[13.5px] font-semibold text-ink">
                            {item.label}
                          </span>
                          {item.badge && (
                            <Pill
                              dot
                              dotColor="var(--brand-500)"
                              textColor="var(--brand-700)"
                              bgColor="rgba(22,163,74,0.10)"
                              className="text-[10px] font-bold uppercase tracking-wide"
                            >
                              {item.badge}
                            </Pill>
                          )}
                        </span>
                        {item.desc && (
                          <span className="mt-0.5 block text-[11px] leading-snug text-muted">
                            {item.desc}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

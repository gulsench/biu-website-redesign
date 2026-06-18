"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { navItems } from "@/lib/content";
import { Button } from "./ui/Button";
import { MegaMenu } from "./ui/MegaMenu";
import { Pill } from "./ui/Pill";
import { cn } from "@/lib/cn";

export function Nav() {
  const [openDesktop, setOpenDesktop] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<number | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reduce = useReducedMotion();

  const open = (i: number) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDesktop(i);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenDesktop(null), 120);
  };

  return (
    <header className="sticky top-0 z-50 px-6 pt-4">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 max-w-container items-center justify-between rounded-pill border border-border/80 bg-white/75 px-3 pl-5 shadow-soft backdrop-blur-xl supports-[backdrop-filter]:bg-white/65"
      >
        {/* Logo */}
        <a href="#" className="text-lg font-extrabold tracking-tight text-ink">
          BIU<span className="text-brand-600">.</span>
        </a>

        {/* Desktop nav items */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item, i) => {
            const isOpen = openDesktop === i;
            const panelId = `mega-${i}`;
            return (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => open(i)}
                onMouseLeave={scheduleClose}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onFocus={() => open(i)}
                  onClick={() => setOpenDesktop(isOpen ? null : i)}
                  className={cn(
                    "flex items-center gap-1 rounded-pill px-3.5 py-2 text-[13.5px] font-semibold transition-colors",
                    isOpen ? "text-ink" : "text-mid hover:text-ink"
                  )}
                >
                  {item.label}
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 12 12"
                    className={cn(
                      "transition-transform duration-200",
                      isOpen && "rotate-180"
                    )}
                    aria-hidden="true"
                  >
                    <path
                      d="M2.5 4.5 6 8l3.5-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <MegaMenu id={panelId} columns={item.columns} open={isOpen} />
              </li>
            );
          })}
        </ul>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost">Sign In</Button>
          <Button variant="primary">Request Demo</Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-chip md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <div className="flex flex-col gap-[5px]">
            <span
              className={cn(
                "block h-0.5 w-5 bg-ink transition-transform",
                mobileOpen && "translate-y-[7px] rotate-45"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-ink transition-opacity",
                mobileOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-ink transition-transform",
                mobileOpen && "-translate-y-[7px] -rotate-45"
              )}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu — accordions */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            className="mx-auto mt-2 max-w-container overflow-hidden rounded-card border border-border bg-white p-3 shadow-lift md:hidden"
          >
            {navItems.map((item, i) => {
              const expanded = mobileSection === i;
              return (
                <div key={item.label} className="border-b border-border last:border-0">
                  <button
                    type="button"
                    aria-expanded={expanded}
                    onClick={() => setMobileSection(expanded ? null : i)}
                    className="flex w-full items-center justify-between px-2 py-3 text-left text-sm font-semibold text-ink"
                  >
                    {item.label}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      className={cn(
                        "transition-transform",
                        expanded && "rotate-180"
                      )}
                      aria-hidden="true"
                    >
                      <path
                        d="M2.5 4.5 6 8l3.5-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <AnimatePresence initial={false}>
                    {expanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: reduce ? 0 : 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-3 px-2 pb-4 pt-1">
                          {item.columns.map((col) => (
                            <div key={col.title}>
                              <p className="eyebrow-text mb-1.5 text-muted">
                                {col.title}
                              </p>
                              <ul className="space-y-1.5">
                                {col.items.map((it) => (
                                  <li
                                    key={it.label}
                                    className="flex items-center gap-2"
                                  >
                                    <a
                                      href="#"
                                      className="text-[13px] font-medium text-mid"
                                    >
                                      {it.label}
                                    </a>
                                    {it.badge && (
                                      <Pill
                                        textColor="var(--brand-700)"
                                        bgColor="rgba(22,163,74,0.10)"
                                        className="text-[9px] uppercase"
                                      >
                                        {it.badge}
                                      </Pill>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
            <div className="mt-3 flex gap-2 px-2">
              <Button variant="outline" size="md" className="flex-1">
                Sign In
              </Button>
              <Button variant="primary" size="md" className="flex-1">
                Request Demo
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

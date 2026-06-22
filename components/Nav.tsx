"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { navLinks, navCtas } from "@/lib/content";
import { Button } from "./ui/Button";
import { cn } from "@/lib/cn";

export function Nav() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(255,255,255,0.08)] bg-band/90 backdrop-blur-xl supports-[backdrop-filter]:bg-band/75">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-container items-center justify-between px-6"
      >
        <a
          href="#"
          aria-label="BIU home"
          className="flex items-center gap-2 text-[17px] font-extrabold tracking-tight text-ink"
        >
          {/* TODO: wire real destination before launch */}
          <Image
            src="/logo-white.png"
            alt="BIU logo"
            width={200}
            height={191}
            priority
            className="h-7 w-auto"
          />
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-[14px] font-medium text-mid transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="outline">{navCtas.secondary}</Button>
        </div>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="flex flex-col gap-[5px]">
            <span className={cn("block h-0.5 w-5 bg-ink transition-transform", open && "translate-y-[7px] rotate-45")} />
            <span className={cn("block h-0.5 w-5 bg-ink transition-opacity", open && "opacity-0")} />
            <span className={cn("block h-0.5 w-5 bg-ink transition-transform", open && "-translate-y-[7px] -rotate-45")} />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border bg-band md:hidden"
          >
            <div className="space-y-1 px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-[15px] font-medium text-ink"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3">
                <Button variant="outline" size="md" className="w-full">
                  {navCtas.secondary}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

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
    <header className="sticky top-0 z-50 border-b border-border bg-white/85 backdrop-blur-xl supports-[backdrop-filter]:bg-white/70">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-container items-center justify-between px-6"
      >
        <a
          href="#"
          aria-label="BIU home"
          className="flex items-center gap-2 text-[17px] font-extrabold tracking-tight text-ink"
        >
          <Image
            src="/logo.png"
            alt="BIU logo"
            width={200}
            height={191}
            priority
            className="h-7 w-auto"
          />
          BIU<span className="text-brand-600">.</span>
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
          <Button variant="ghost">{navCtas.secondary}</Button>
          <Button variant="primary">{navCtas.primary}</Button>
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
            className="overflow-hidden border-t border-border bg-white md:hidden"
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
              <div className="flex gap-2 pt-3">
                <Button variant="outline" size="md" className="flex-1">
                  {navCtas.secondary}
                </Button>
                <Button variant="primary" size="md" className="flex-1">
                  {navCtas.primary}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

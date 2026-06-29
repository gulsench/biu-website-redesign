import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const productLinks = ["AEO", "Social Media", "Competition", "Reputation"];
const resourceLinks = ["Customer Stories", "Blogs", "FAQs"];

const resourceHrefs: Record<string, string> = {
  "Customer Stories": "#customer-stories",
  Blogs: "#",
  FAQs: "#",
};

function MenuIcon({
  open,
  onClick,
  className,
}: {
  open: boolean;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center lg:hidden",
        className,
      )}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
    >
      <span className="relative block h-3.5 w-5">
        <span
          className={cn(
            "absolute left-0 top-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-200",
            open && "top-1.5 rotate-45",
          )}
        />
        <span
          className={cn(
            "absolute left-0 top-1.5 block h-0.5 w-5 rounded-full bg-current transition-all duration-200",
            open && "opacity-0",
          )}
        />
        <span
          className={cn(
            "absolute left-0 top-3 block h-0.5 w-5 rounded-full bg-current transition-all duration-200",
            open && "top-1.5 -rotate-45",
          )}
        />
      </span>
    </button>
  );
}

function NavDropdown({
  label,
  links,
  hrefFor,
  onNavigate,
}: {
  label: string;
  links: string[];
  hrefFor: (link: string) => string;
  onNavigate?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [open]);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-color-text-muted transition-colors hover:text-color-text"
      >
        {label}
        <ChevronDown
          size={14}
          className={cn("transition-transform duration-200", open && "rotate-180")}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-full z-[60] w-52 pt-2"
          >
            <div className="border border-white/10 bg-[#000000] p-1 shadow-lg backdrop-blur-none">
              {links.map((link) => (
                <a
                  key={link}
                  href={hrefFor(link)}
                  onClick={onNavigate}
                  className="block px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-color-border bg-color-bg">
      <nav className="section-container flex h-14 items-center justify-between gap-3 sm:h-16 sm:gap-4">
        <Link
          to="/"
          className="min-w-0 shrink truncate font-heading text-sm font-semibold tracking-tight text-color-text sm:text-base"
          onClick={closeMobile}
        >
          Boast It UP
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          <NavDropdown
            label="Products"
            links={productLinks}
            hrefFor={() => "#modules"}
            onNavigate={closeMobile}
          />
          <NavDropdown
            label="Resources"
            links={resourceLinks}
            hrefFor={(link) => resourceHrefs[link] ?? "#"}
            onNavigate={closeMobile}
          />
          <a
            href="#"
            className="px-3 py-2 text-sm font-medium text-color-text-muted transition-colors hover:text-color-text"
          >
            About us
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a href="#" className="btn-secondary hidden !w-auto px-4 text-[13px] lg:inline-flex lg:h-9">
            Book a demo
          </a>
          <MenuIcon
            open={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="text-color-text lg:hidden"
          />
        </div>
      </nav>

      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-color-border lg:hidden"
          >
            <div className="section-container max-h-[calc(100dvh-3.5rem)] space-y-6 overflow-y-auto py-5 sm:max-h-[calc(100dvh-4rem)]">
              <div>
                <p className="eyebrow mb-3">Products</p>
                <div className="space-y-1">
                  {productLinks.map((link) => (
                    <a
                      key={link}
                      href="#modules"
                      onClick={closeMobile}
                      className="block py-2 text-sm text-color-text-muted hover:text-color-text"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <p className="eyebrow mb-3">Resources</p>
                <div className="space-y-1">
                  {resourceLinks.map((link) => (
                    <a
                      key={link}
                      href={resourceHrefs[link] ?? "#"}
                      onClick={closeMobile}
                      className="block py-2 text-sm text-color-text-muted hover:text-color-text"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
              <a
                href="#"
                onClick={closeMobile}
                className="block py-2 text-sm text-color-text-muted hover:text-color-text"
              >
                About us
              </a>
              <a href="#" onClick={closeMobile} className="btn-secondary w-full justify-center">
                Book a demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

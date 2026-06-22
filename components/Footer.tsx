import Image from "next/image";
import { footer } from "@/lib/content";

const socialPaths: Record<string, string> = {
  x: "M13.5 10.6 19.4 4h-1.4l-5.1 5.7L8.8 4H4l6.2 8.7L4 20h1.4l5.4-6.1 4.3 6.1H20l-6.5-9.4Zm-1.9 2.2-.6-.9L6 5h2.2l4 5.6.6.9 5.2 7.3h-2.2l-4.2-6Z",
  linkedin:
    "M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.4 8.4h3.1V20H3.4V8.4Zm5 0h3v1.6h.04c.42-.8 1.45-1.64 2.98-1.64 3.18 0 3.77 2.1 3.77 4.82V20h-3.1v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75V20h-3.1V8.4Z",
  instagram:
    "M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2Zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2Zm6.1-8.1a1.12 1.12 0 1 1-2.24 0 1.12 1.12 0 0 1 2.24 0ZM12 4.7c-2 0-2.27.01-3.06.05-2.5.11-3.68 1.3-3.79 3.79C5.11 9.33 5.1 9.6 5.1 12s.01 2.67.05 3.46c.11 2.5 1.29 3.68 3.79 3.79.79.04 1.06.05 3.06.05s2.27-.01 3.06-.05c2.5-.11 3.68-1.3 3.79-3.79.04-.79.05-1.06.05-3.46s-.01-2.67-.05-3.46c-.11-2.49-1.29-3.68-3.79-3.79C14.27 4.71 14 4.7 12 4.7Z",
  youtube:
    "M21.6 7.2s-.19-1.36-.78-1.96c-.75-.78-1.58-.79-1.96-.83C16.13 4.2 12 4.2 12 4.2h-.01s-4.12 0-6.85.21c-.38.04-1.21.05-1.96.83-.59.6-.78 1.96-.78 1.96S2.2 8.8 2.2 10.4v1.49c0 1.6.2 3.2.2 3.2s.19 1.36.78 1.96c.75.78 1.74.75 2.18.84 1.58.15 6.64.2 6.64.2s4.13-.01 6.86-.22c.38-.04 1.21-.05 1.96-.83.59-.6.78-1.96.78-1.96s.2-1.6.2-3.2V10.4c0-1.6-.2-3.2-.2-3.2ZM9.9 13.7V8.9l4.3 2.4-4.3 2.4Z",
};

/** Footer links with real destinations only — null renders as non-clickable text. */
const footerLinkHrefs: Record<string, string | null> = {
  Modules: "#modules",
};

function FooterLink({ label }: { label: string }) {
  const href = footerLinkHrefs[label] ?? null;

  if (!href) {
    return (
      <span className="block cursor-default py-0.5 text-[11px] leading-tight text-[rgba(255,255,255,0.45)]">
        {label}
      </span>
    );
  }

  return (
    <a
      href={href}
      className="block py-0.5 text-[11px] leading-tight text-[rgba(255,255,255,0.72)] transition-colors hover:text-white"
    >
      {label}
    </a>
  );
}

export function Footer() {
  const legalLinks = footer.legalRight
    ? footer.legalRight.split(" · ").filter(Boolean)
    : [];

  return (
    <footer
      role="contentinfo"
      className="border-t border-[rgba(255,255,255,0.08)] bg-band text-[rgba(255,255,255,0.7)]"
    >
      <div className="mx-auto max-w-container px-6 py-10">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          {/* Brand + contact + social */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2 text-sm font-extrabold text-white">
              <Image
                src="/logo-white.png"
                alt="BIU logo"
                width={262}
                height={250}
                className="h-7 w-auto"
              />
            </div>
            <p className="mt-2 max-w-[240px] text-[11px] leading-snug text-[rgba(255,255,255,0.45)]">
              {footer.tagline}
            </p>
            <a
              href={`mailto:${footer.email}`}
              className="mt-3 inline-block text-[11px] font-medium text-[rgba(255,255,255,0.7)] transition-colors hover:text-white"
            >
              {footer.email}
            </a>
            <div className="mt-4 flex items-center gap-2">
              {footer.social.map((s) => (
                <span
                  key={s.label}
                  aria-label={s.label}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(255,255,255,0.12)] text-[rgba(255,255,255,0.35)] opacity-40"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path
                      d={socialPaths[s.icon]}
                      fillRule="evenodd"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              ))}
            </div>
          </div>

          {footer.columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.1em] text-[rgba(255,255,255,0.4)]">
                {col.title}
              </p>
              <ul>
                {col.links.map((link) => (
                  <li key={link}>
                    <FooterLink label={link} />
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-8 flex flex-col justify-between gap-2 border-t border-[rgba(255,255,255,0.1)] pt-4 text-[10px] text-[rgba(255,255,255,0.4)] sm:flex-row sm:items-center">
          <span>
            © 2026 Boast It UP ·{" "}
            <a
              href="https://boastitup.com"
              className="transition-colors hover:text-[rgba(255,255,255,0.75)]"
            >
              boastitup.com
            </a>
          </span>
          {legalLinks.length > 0 && (
            <span className="flex flex-wrap items-center">
              {legalLinks.map((link, i) => (
                <span key={link} className="inline-flex items-center">
                  {i > 0 && (
                    <span aria-hidden className="px-1">
                      ·
                    </span>
                  )}
                  <span className="text-[rgba(255,255,255,0.45)]">{link}</span>
                </span>
              ))}
            </span>
          )}
        </div>
      </div>
    </footer>
  );
}

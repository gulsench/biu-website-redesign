import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { moduleHref } from "@/lib/routes";
import type { ModuleId } from "@/lib/modules";

const productLinks: { label: string; moduleId: ModuleId }[] = [
  { label: "AEO", moduleId: "aeo" },
  { label: "Social Media", moduleId: "social" },
  { label: "Competition", moduleId: "competition" },
  { label: "Reputation", moduleId: "reputation" },
];

const resourceLinks = [
  { label: "Blog", href: "#" },
  { label: "Customer Stories", href: "#customer-stories" },
  { label: "FAQ", href: "#" },
];

const companyLinks = [
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <nav aria-label={title}>
      <p className="eyebrow mb-4">{title}</p>
      {children}
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="section-light w-full overflow-x-clip border-t border-color-border">
      <div className="section-container py-10 sm:py-14 md:py-20">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] lg:gap-16">
          <div className="min-w-0 max-w-md">
            <h2 className="font-heading text-xl font-medium leading-tight tracking-tight text-color-text sm:text-2xl md:text-3xl">
              AI growth intelligence for brands that compete.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-color-text-muted md:text-[15px]">
              One score. Four modules. Built for teams who need to know where they
              show up in AI answers.
            </p>
          </div>

          <div className="grid min-w-0 grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-6">
            <FooterColumn title="Product">
              <ul className="space-y-2.5">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={moduleHref(link.moduleId)}
                      className="text-sm text-color-text-muted transition-colors hover:text-color-text"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>

            <FooterColumn title="Resources">
              <ul className="space-y-2.5">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-color-text-muted transition-colors hover:text-color-text"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </FooterColumn>

            <FooterColumn title="Company">
              <ul className="space-y-2.5">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-color-text-muted transition-colors hover:text-color-text"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </FooterColumn>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-color-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <Link
            to="/"
            className="font-heading text-sm font-semibold tracking-tight text-color-text"
          >
            Boast It UP
          </Link>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-color-text-dim">
            © 2026 Boast It UP
          </p>
        </div>
      </div>
    </footer>
  );
}

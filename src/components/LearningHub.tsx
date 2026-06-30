import { ArrowRight, BookOpen, FileText, MessageCircle, Users } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const resources = [
  {
    icon: BookOpen,
    title: "Guides",
    description: "Step-by-step playbooks for winning AI answers in your category.",
    href: "#",
  },
  {
    icon: FileText,
    title: "Blog",
    description: "Practical takes on AEO, brand intelligence, and category growth.",
    href: "#",
  },
  {
    icon: Users,
    title: "Customer stories",
    description: "How growth teams use BIU to move one trusted score together.",
    href: "#customer-stories",
  },
  {
    icon: MessageCircle,
    title: "Support",
    description: "Real humans when you need help — not a ticket black hole.",
    href: "#",
  },
];

export function LearningHub() {
  return (
    <section className="section-light w-full overflow-x-clip border-t border-color-border py-12 sm:py-16 md:py-24">
      <div className="section-container">
        <Reveal className="mb-10 max-w-2xl md:mb-14">
          <h2 className="font-heading text-[clamp(1.75rem,5vw,3rem)] font-medium leading-tight tracking-[-0.03em] text-color-text md:text-5xl">
            We&apos;ll support you{" "}
            <span className="text-blue">all the way.</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-color-text-muted sm:text-base">
            Whatever your question — there&apos;s a guide, a story, or a person
            ready to help you get more from BIU.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource, index) => (
            <Reveal key={resource.title} delay={index * 0.05} y={12}>
              <a
                href={resource.href}
                className="group flex h-full min-w-0 flex-col border border-color-border bg-color-bg p-5 transition-colors hover:border-blue/25 sm:p-6"
              >
                <resource.icon
                  size={20}
                  className="text-blue"
                  strokeWidth={1.75}
                  aria-hidden
                />
                <h3 className="mt-4 font-heading text-base font-medium text-color-text">
                  {resource.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-color-text-muted">
                  {resource.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue opacity-0 transition-opacity group-hover:opacity-100">
                  Explore
                  <ArrowRight size={14} strokeWidth={2} />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

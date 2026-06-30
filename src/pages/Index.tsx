import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { PlatformOverview } from "@/components/PlatformOverview";
import { IntelligenceBento } from "@/components/IntelligenceBento";
import { PersonaEdge } from "@/components/PersonaEdge";
import { ConnectStack } from "@/components/ConnectStack";
import { Copilot } from "@/components/Copilot";
import { Roadmap } from "@/components/Roadmap";
import { CustomerStories } from "@/components/CustomerStories";
import { HeroVideoBackground } from "@/components/HeroVideoBackground";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export default function Index() {
  return (
    <div className="min-h-screen overflow-x-clip bg-color-bg">
      <Navbar />

      <section className="section-light relative w-full overflow-hidden border-b border-color-border pt-14 sm:pt-16">
        <HeroVideoBackground />

        <div className="relative z-10 section-container py-12 sm:py-16 md:py-24 lg:py-28">
          <div className="max-w-3xl min-w-0">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="eyebrow mb-5"
            >
              For D2C brands, founders, marketing teams
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.06 }}
              className="font-heading text-[clamp(2rem,8vw,4.25rem)] font-medium leading-[1.05] tracking-[-0.04em] text-color-text"
            >
              <span className="text-blue">Strong brands</span> don&apos;t happen. They&apos;re built.
              <span className="block text-color-text-muted">
                We build them.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-color-text-muted md:text-lg"
            >
              Know where you show up in AI answers, and the one move that closes
              the gap between you and category leaders.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a href="#" className="btn-primary group">
                See your AI visibility score
                <ArrowRight
                  size={16}
                  className="ml-2 transition-transform group-hover:translate-x-0.5"
                />
              </a>
              <a href="#" className="btn-secondary">
                Book a demo
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <PlatformOverview />

      <IntelligenceBento />

      <PersonaEdge />

      <ConnectStack />

      <Copilot />

      <CustomerStories />

      <Roadmap />

      <section className="section-light w-full border-t border-color-border py-14 sm:py-20 md:py-28">
        <div className="section-container">
          <Reveal className="max-w-2xl min-w-0">
            <p className="eyebrow mb-4">Get started</p>
            <h2 className="font-heading text-[clamp(1.75rem,5vw,3rem)] font-medium tracking-tight text-color-text md:text-5xl">
              Ready to win AI search?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-color-text-muted md:text-lg">
              Run your free AI visibility audit and see exactly where your brand
              stands.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#" className="btn-primary group">
                See your AI visibility score
                <ArrowRight
                  size={16}
                  className="ml-2 transition-transform group-hover:translate-x-0.5"
                />
              </a>
              <a href="#" className="btn-secondary">
                Book a demo
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

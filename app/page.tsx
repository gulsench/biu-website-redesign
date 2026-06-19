import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { EnginesRow } from "@/components/EnginesRow";
import { Statement } from "@/components/Statement";
import { FeatureSection } from "@/components/FeatureSection";
import { Platform } from "@/components/Platform";
import { Comparison } from "@/components/Comparison";
import { FAQ } from "@/components/FAQ";
import { ClosingCTA } from "@/components/ClosingCTA";
import { Footer } from "@/components/Footer";
import { features } from "@/lib/content";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Nav />
      <main>
        <Hero />
        <EnginesRow />
        <Statement />
        <section id="modules">
          {features.map((f, i) => (
            <FeatureSection key={f.id} data={f} flip={i % 2 === 1} />
          ))}
        </section>
        <Platform />
        <Comparison />
        <FAQ />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}

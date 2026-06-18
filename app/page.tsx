import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { Modules } from "@/components/Modules";
import { Roadmap } from "@/components/Roadmap";
import { Journeys } from "@/components/Journeys";
import { CaseStudies } from "@/components/CaseStudies";
import { ClosingCTA } from "@/components/ClosingCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <Modules />
        <Roadmap />
        <Journeys />
        <CaseStudies />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}

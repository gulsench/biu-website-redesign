import { Navbar } from "@/components/Navbar";
import { FourModules } from "@/components/FourModules";
import { Footer } from "@/components/Footer";

export default function Modules() {
  return (
    <div className="min-h-screen overflow-x-clip bg-color-bg">
      <Navbar />
      <main className="pt-14 sm:pt-16">
        <FourModules />
      </main>
      <Footer />
    </div>
  );
}

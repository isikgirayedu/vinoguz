import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Gallery } from "@/components/gallery";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { FloatingReservation } from "@/components/floating-reservation";
import { LanguageProvider } from "@/lib/language-context";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="relative">
        <Navigation />
        <Hero />
        <About />
        <Gallery />
        <Experience />
        <Contact />
        <Footer />
        <FloatingReservation />
      </main>
    </LanguageProvider>
  );
}

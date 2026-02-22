import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Benefits from "@/components/sections/Benefits";
import About from "@/components/sections/About";
import Gallery from "@/components/sections/Gallery";
import CTA from "@/components/sections/CTA";
import Location from "@/components/sections/Location";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <About />
        <Services />
        <Gallery />
        <CTA />
        <Location />
      </main>
    </>
  );
}

import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Brands from "@/components/sections/Brands";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Reels from "@/components/sections/Reels";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Brands />
        <About />
        <Services />
        <Reels />
        <Testimonials />
      </main>
      <Contact />
    </>
  );
}

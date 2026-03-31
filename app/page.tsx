import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Problems from "@/components/sections/Problems";
import Solution from "@/components/sections/Solution";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative pt-16">
        <Hero />
        <Problems />
        <Solution />
        <Features />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

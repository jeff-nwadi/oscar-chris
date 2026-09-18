import { About } from "@/components/HomePage/About";
import { Blog } from "@/components/HomePage/Blog";
import { Contact } from "@/components/HomePage/Contact";
import { FeaturedProjects } from "@/components/HomePage/FeaturedProjects";
import { Footer } from "@/components/HomePage/Footer";
import { Hero } from "@/components/HomePage/Hero";
import { Navbar } from "@/components/HomePage/Navbar";
import { Testimonials } from "@/components/HomePage/Testimonials";
import { WhatICanDo } from "@/components/HomePage/WhatICanDo";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatICanDo />
        <About />
        <FeaturedProjects />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

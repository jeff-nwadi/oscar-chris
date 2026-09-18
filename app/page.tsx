import { About } from "@/components/HomePage/About";
import { FeaturedProjects } from "@/components/HomePage/FeaturedProjects";
import { Hero } from "@/components/HomePage/Hero";
import { WhatICanDo } from "@/components/HomePage/WhatICanDo";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatICanDo />
      <About />
      <FeaturedProjects />
    </main>
  );
}

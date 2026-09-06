import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { ResearchInterests } from '@/components/ResearchInterests';
import { ResearchTimeline } from '@/components/ResearchTimeline';
import { FeaturedResearch } from '@/components/FeaturedResearch';
import { PosterGallery } from '@/components/PosterGallery';
import { Publications } from '@/components/Publications';
import { Projects } from '@/components/Projects';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#071018] text-[#f4f1e8]">
      <Navbar />
      <Hero />
      <ResearchInterests />
      <ResearchTimeline />
      <FeaturedResearch />
      <PosterGallery />
      <Publications />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}

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
import { Interests } from '@/components/Interests';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#102d22] text-[#f4f1e8]">
      <Navbar />
      <Hero />
      <About />
      <ResearchInterests />
      <ResearchTimeline />
      <FeaturedResearch />
      <PosterGallery />
      <Publications />
      <Projects />
      <Interests />
      <Contact />
    </main>
  );
}

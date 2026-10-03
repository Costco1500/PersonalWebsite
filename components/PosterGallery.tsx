'use client';

import Image from 'next/image';
import { Eye, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { posters, type Poster } from '@/data/portfolio';
import { PosterModal } from './PosterModal';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function PosterGallery() {
  const [selected, setSelected] = useState<Poster | null>(null);
  return <section id="posters" className="bg-[#202923] section-spacing"><div className="section-shell">
    <SectionHeading index="05" eyebrow="Research posters" title="Research, communicated visually." description="Explore full-quality PDF posters with readable text and figures. Open a preview or download the original-resolution PDF." />
    <div className="mt-16 grid items-start gap-5 lg:grid-cols-3">
      {posters.map((poster, index) => <Reveal key={poster.id} delay={index * .06}>
        <article className="border border-white/12 bg-[#102d22] p-3">
          <button type="button" onClick={() => setSelected(poster)} className="group w-full text-left" aria-label={`View PDF poster: ${poster.title}`}>
            <div className="relative flex h-[300px] items-center justify-center overflow-hidden bg-[#e9e7df]">
              <Image src={poster.image} alt={`Preview of ${poster.title}`} width={poster.width} height={poster.height} sizes="(max-width: 1024px) 90vw, 400px" className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]" />
              <span className="absolute bottom-3 right-3 flex items-center gap-2 bg-[#dcea62] px-3 py-2 text-xs font-semibold text-[#102d22]">View PDF <Eye size={14} /></span>
            </div>
            <div className="p-3 pt-5"><p className="font-mono text-xs uppercase tracking-wider text-[#dcea62]">{poster.institution}</p><h3 className="mt-3 text-lg font-medium leading-6">{poster.title}</h3><p className="mt-3 text-sm text-[#a8b7a4]">{poster.area}</p></div>
          </button>
          <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-white/12 px-3 pt-3">
            <a href={poster.pdf} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm text-[#dcea62] underline underline-offset-4">Open PDF <ExternalLink size={14} /><span className="sr-only">: {poster.title} (new tab)</span></a>
            <a href={poster.pdf} download className="inline-flex min-h-11 items-center text-sm text-[#dcea62] underline underline-offset-4">Download<span className="sr-only"> {poster.title} PDF</span></a>
          </div>
        </article>
      </Reveal>)}
    </div>
    <PosterModal poster={selected} onClose={() => setSelected(null)} />
  </div></section>;
}

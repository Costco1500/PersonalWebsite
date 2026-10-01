'use client';

import Image from 'next/image';
import { Eye } from 'lucide-react';
import { useState } from 'react';
import { posters, type Poster } from '@/data/portfolio';
import { PosterModal } from './PosterModal';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function PosterGallery() {
  const [selected, setSelected] = useState<Poster | null>(null);
  return <section className="bg-[#0b151e] section-spacing"><div className="section-shell"><SectionHeading index="04" eyebrow="Research posters" title="Research, communicated visually." description="Select any poster to inspect the full presentation." /><div className="mt-16 grid gap-5 lg:grid-cols-3">{posters.map((poster, index) => <Reveal key={poster.id} delay={index * .06}><button type="button" onClick={() => setSelected(poster)} className="group w-full border border-white/12 bg-[#071018] p-3 text-left hover:border-[#c9a84c]/55"><div className="relative flex min-h-[280px] items-center overflow-hidden bg-white"><Image src={poster.image} alt={`Preview of ${poster.title}`} width={poster.width} height={poster.height} className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]" /><span className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-[#071018]/70 via-transparent to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100"><span className="flex items-center gap-2 bg-[#d8bb61] px-3 py-2 text-xs font-semibold text-[#071018]">View Poster <Eye size={14} /></span></span></div><div className="p-3 pt-5"><p className="font-mono text-xs uppercase tracking-wider text-[#d9bd6a]">{poster.institution}</p><h3 className="mt-3 text-lg font-medium leading-6">{poster.title}</h3><p className="mt-3 text-sm text-[#7f8d96]">{poster.area}</p></div></button></Reveal>)}</div><PosterModal poster={selected} onClose={() => setSelected(null)} /></div></section>;
}

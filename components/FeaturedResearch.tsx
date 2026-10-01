'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Eye } from 'lucide-react';
import { featuredResearch, posters, type Poster } from '@/data/portfolio';
import { PosterModal } from './PosterModal';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function FeaturedResearch() {
  const [selected, setSelected] = useState<Poster | null>(null);
  return <section className="bg-[#e8e4da] section-spacing text-[#0b1720]"><div className="section-shell"><SectionHeading light index="03" eyebrow="Featured research" title="Methods built for real research questions." description="Three projects connecting contemporary AI methods with scientific and engineering practice." />
    <div className="mt-16 space-y-6">{featuredResearch.map((item) => { const poster = posters.find((entry) => entry.id === item.posterId)!; return <Reveal key={item.title}><article className="group grid overflow-hidden border border-[#0b1720]/15 bg-[#f4f1e8] lg:grid-cols-[1fr_.82fr]"><div className="flex flex-col p-7 sm:p-10"><div className="flex items-center justify-between font-mono text-xs uppercase tracking-[.14em] text-[#786529]"><span>{item.institution}</span><span>{item.year}</span></div><h3 className="mt-10 max-w-2xl text-3xl font-medium tracking-[-.035em] sm:text-4xl">{item.title}</h3><p className="mt-6 max-w-xl leading-7 text-[#53626b]">{item.description}</p><div className="mt-auto flex flex-wrap gap-2 pt-10">{item.tags.map((tag) => <span key={tag} className="border border-[#0b1720]/15 px-2.5 py-1.5 font-mono text-xs uppercase text-[#465660]">{tag}</span>)}</div></div><button type="button" onClick={() => setSelected(poster)} className="relative min-h-[310px] overflow-hidden border-t border-[#0b1720]/15 bg-[#d9d6ce] text-left lg:border-l lg:border-t-0" aria-label={`Open poster for ${item.title}`}><Image src={poster.image} alt={`${item.title} poster preview`} fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-contain p-5 transition-transform duration-700 group-hover:scale-[1.025]" /><span className="absolute bottom-4 right-4 grid size-11 place-items-center bg-[#071018] text-white"><Eye size={17} /></span></button></article></Reveal>; })}</div>
    <PosterModal poster={selected} onClose={() => setSelected(null)} /></div></section>;
}

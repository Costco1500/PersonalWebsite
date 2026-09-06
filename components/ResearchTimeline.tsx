'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Eye } from 'lucide-react';
import { posters, researchExperiences, type Poster } from '@/data/portfolio';
import { PosterModal } from './PosterModal';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function ResearchTimeline() {
  const [selected, setSelected] = useState<Poster | null>(null);
  return <section className="bg-[#071018] py-28 text-[#f4f1e8]"><div className="section-shell"><SectionHeading index="02" eyebrow="Research experience" title="Research across environmental, scientific, and engineering systems." description="A timeline of applied machine learning work, from process monitoring and scientific review to environmental forecasting." />
    <div className="mt-20">
      {researchExperiences.map((item, index) => { const poster = posters.find((entry) => entry.id === item.posterId)!; return <Reveal key={item.institution}><article className="grid gap-8 border-t border-white/12 py-12 lg:grid-cols-[220px_1fr_320px] lg:gap-10"><div><p className="font-mono text-xs text-[#d9bd6a]">{item.period}</p><p className="mt-3 text-sm text-[#7f8d96]">{item.location}</p><span className="mt-8 inline-block font-mono text-[10px] text-[#5f6b73]">0{index + 1} / 03</span></div><div><p className="text-sm font-medium text-[#d9bd6a]">{item.role}</p><h3 className="mt-2 text-2xl font-medium tracking-[-.025em]">{item.institution}</h3><p className="mt-5 text-lg leading-7 text-[#c2ccd1]">{item.focus}</p><ul className="mt-6 space-y-3 text-sm leading-6 text-[#8f9da5]">{item.bullets.map((bullet) => <li key={bullet} className="flex gap-3"><span className="mt-[10px] h-px w-4 shrink-0 bg-[#c9a84c]/70" />{bullet}</li>)}</ul><div className="mt-7 flex flex-wrap gap-2">{item.topics.map((topic) => <span key={topic} className="border border-white/12 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-wide text-[#aab6bd] transition-colors hover:border-[#c9a84c]/60 hover:text-[#e3c669]">{topic}</span>)}</div></div><button type="button" onClick={() => setSelected(poster)} className="group self-start border border-white/12 bg-white/[.025] p-3 text-left hover:border-[#c9a84c]/50" aria-label={`View poster: ${poster.title}`}><div className="relative overflow-hidden bg-white"><Image src={poster.image} alt={`Preview of ${poster.title} poster`} width={poster.width} height={poster.height} className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.025]" /></div><span className="mt-3 flex items-center justify-between text-xs text-[#aeb9bf]">View associated poster <Eye size={15} /></span></button></article></Reveal>; })}
    </div><PosterModal poster={selected} onClose={() => setSelected(null)} /></div></section>;
}

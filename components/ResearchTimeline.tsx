'use client';

import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Plus, Minus, Eye } from 'lucide-react';
import { posters, researchExperiences, earlierExperiences, type Poster, type ResearchExperience } from '@/data/portfolio';
import { PosterModal } from './PosterModal';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

function ExperienceRow({ item, index, onPoster }: { item: ResearchExperience; index: number; onPoster: (poster: Poster) => void }) {
  const [expanded, setExpanded] = useState(false);
  const reduce = useReducedMotion();
  const poster = posters.find(entry => entry.id === item.posterId);
  return <Reveal><article id={`experience-${item.id}`} className="experience-row grid gap-6 border-t border-white/12 py-10 lg:grid-cols-[190px_1fr] lg:gap-12">
    <div><span className="font-mono text-xs text-[#718694]">{String(index + 1).padStart(2, '0')}</span><p className="mt-4 font-mono text-xs leading-6 text-[#d9bd6a]">{item.period}</p>{item.location && <p className="mt-2 text-sm text-[#98aab6]">{item.location}</p>}</div>
    <div className="min-w-0">
      <p className="text-sm leading-6 text-[#d9bd6a]">{item.role}</p><h3 className="mt-2 text-2xl font-medium tracking-tight sm:text-3xl">{item.institution}</h3>
      <p className="mt-4 max-w-3xl text-lg leading-7 text-[#c3cfd7]">{item.focus}</p>
      {item.metric && <p className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1"><span className="font-mono text-2xl text-[#e3c669]">{item.metric.value}</span><span className="text-sm text-[#98aab6]">{item.metric.label}</span></p>}
      <div className="mt-6 flex flex-wrap gap-2">{item.topics.map(topic => <span key={topic} className="topic-tag">{topic}</span>)}</div>
      <button type="button" aria-expanded={expanded} aria-controls={`details-${item.id}`} onClick={() => setExpanded(!expanded)} className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[#d9bd6a] hover:text-[#f1d784]">{expanded ? <Minus size={16} /> : <Plus size={16} />}{expanded ? 'Hide details' : 'View contributions'}<span className="sr-only"> at {item.institution}</span></button>
      <AnimatePresence initial={false}>{expanded && <motion.div id={`details-${item.id}`} initial={reduce ? false : { height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: reduce ? 0 : .25 }} className="overflow-hidden"><div className={`grid gap-8 pt-5 pb-2 ${poster ? 'xl:grid-cols-[1fr_220px]' : ''}`}><ul className="space-y-4 text-base leading-7 text-[#aab7c1]">{item.bullets.map(bullet => <li key={bullet} className="flex gap-3"><span aria-hidden="true" className="mt-3 h-px w-4 shrink-0 bg-[#c9a84c]" />{bullet}</li>)}</ul>{poster && <button type="button" onClick={() => onPoster(poster)} className="group self-start rounded-lg border border-white/12 bg-white/[.025] p-3 text-left hover:border-[#c9a84c]/60" aria-label={`View poster: ${poster.title}`}><Image src={poster.image} alt={`${poster.title} poster`} width={poster.width} height={poster.height} sizes="(max-width: 1280px) 90vw, 220px" className="h-auto w-full" /><span className="mt-3 flex items-center justify-between gap-2 text-xs text-[#c3cfd7]">{item.id === 'ye-lab' ? 'Earlier Lake Munson poster' : 'Associated poster'}<Eye size={15} /></span></button>}</div></motion.div>}</AnimatePresence>
    </div>
  </article></Reveal>;
}

export function ResearchTimeline() {
  const [selected, setSelected] = useState<Poster | null>(null);
  return <section id="experience" className="section-spacing bg-[#071018]"><div className="section-shell"><SectionHeading index="02" eyebrow="Experience & leadership" title="Research, with something to show for it." description="From small-model experiments to environmental forecasting and useful applications. Open an experience to explore the work behind it." />
    <div className="mt-14">{researchExperiences.map((item, index) => <ExperienceRow key={item.id} item={item} index={index} onPoster={setSelected} />)}</div>
    <details className="earlier-work mt-6 border-y border-white/12"><summary className="cursor-pointer py-6 text-lg font-medium text-[#c3cfd7]">Additional experience <span className="ml-3 font-mono text-xs text-[#98aab6]">{earlierExperiences.length} roles</span></summary><div>{earlierExperiences.map((item, index) => <ExperienceRow key={item.id} item={item} index={index + researchExperiences.length} onPoster={setSelected} />)}</div></details>
    <PosterModal poster={selected} onClose={() => setSelected(null)} />
  </div></section>;
}

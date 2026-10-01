'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Code2, Smartphone, Sprout, Mic } from 'lucide-react';
import { projects } from '@/data/portfolio';
import { SectionHeading } from './SectionHeading';

const filters = ['All', 'Machine learning', 'iOS', 'Web'];
const icons = { SideQuest: Smartphone, CropCare: Sprout, PillPOW: Mic };

export function Projects() {
  const [filter, setFilter] = useState('All');
  const reduce = useReducedMotion();
  const visible = projects.filter(project => filter === 'All' || project.category === filter);

  return <section id="projects" className="section-spacing bg-[#f1eee5] text-[#0c1821]"><div className="section-shell">
    <SectionHeading light index="06" eyebrow="Selected projects" title="Ideas, made tangible." description="An iOS prototype, a plant-disease classifier, and an accessible web app. Explore the code and demos." />
    <div role="group" aria-label="Filter projects" className="mt-10 flex flex-wrap gap-2">{filters.map(item => <button key={item} type="button" aria-pressed={filter === item} onClick={() => setFilter(item)} className={`min-h-11 rounded-full border px-5 py-2.5 text-sm transition-colors ${filter === item ? 'border-[#0c1821] bg-[#0c1821] text-white' : 'border-[#0c1821]/20 text-[#42525b] hover:bg-[#0c1821]/5'}`}>{item}</button>)}</div>
    <p className="mt-5 text-sm text-[#53626b]" role="status">{visible.length} {visible.length === 1 ? 'project' : 'projects'}</p>
    <motion.div layout={!reduce} className="mt-5 grid items-stretch gap-5 lg:grid-cols-2">
      <AnimatePresence mode="popLayout" initial={false}>{visible.map(project => { const Icon = icons[project.title as keyof typeof icons] ?? Code2; return <motion.article key={project.title} layout={!reduce} initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reduce ? 0 : -8 }} transition={{ duration: reduce ? 0 : .25 }} className="project-card flex flex-col rounded-xl border border-[#0c1821]/15 bg-[#f8f6ef] p-7 sm:p-9">
        <div className="flex items-center justify-between gap-4"><span className="grid size-12 place-items-center rounded-lg border border-[#0c1821]/15 text-[#806b2d]"><Icon size={24} strokeWidth={1.5} /></span><span className="font-mono text-xs text-[#53626b]">{project.period}</span></div>
        <p className="mt-8 text-xs leading-5 text-[#806b2d]">{project.context}</p><h3 className="mt-2 text-4xl font-medium tracking-tight">{project.title}</h3><p className="mt-4 text-xl leading-7">{project.description}</p>
        <ul className="mt-6 space-y-3 text-base leading-7 text-[#53626b]">{project.bullets.map(bullet => <li key={bullet} className="flex gap-3"><span aria-hidden="true" className="mt-3 h-px w-4 shrink-0 bg-[#9a7f33]" />{bullet}</li>)}</ul>
        <div className="mt-7 flex flex-wrap gap-2">{project.technologies.map(technology => <span key={technology} className="rounded-md border border-[#0c1821]/15 px-2.5 py-1.5 font-mono text-xs text-[#42525b]">{technology}</span>)}</div>
        <div className="mt-auto flex flex-wrap gap-3 pt-8">{project.links.map(link => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-[#0c1821]/25 px-4 py-3 text-sm font-medium transition-colors hover:bg-[#0c1821] hover:text-white">{link.label}<span className="sr-only"> for {project.title} (opens in a new tab)</span></a>)}</div>
      </motion.article>; })}</AnimatePresence>
    </motion.div>
  </div></section>;
}

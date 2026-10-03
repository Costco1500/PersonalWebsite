'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { projects } from '@/data/portfolio';
import { SectionHeading } from './SectionHeading';
import { ProjectPreview } from './ProjectPreview';

const filters = ['All', ...new Set(projects.map(project => project.category))];

export function Projects() {
  const [filter, setFilter] = useState('All');
  const reduce = useReducedMotion();
  const visible = projects.filter(project => filter === 'All' || project.category === filter);

  return <section id="projects" className="section-spacing bg-[#f1eedf] text-[#233d2e]"><div className="section-shell">
    <SectionHeading light index="07" eyebrow="Selected projects" title="Ideas, made tangible." description="An iOS prototype, a plant-disease classifier, and an accessible web app. Explore the code and demos." />
    <div role="group" aria-label="Filter projects" className="mt-10 flex flex-wrap gap-2">{filters.map(item => <button key={item} type="button" aria-pressed={filter === item} onClick={() => setFilter(item)} className={`min-h-11 rounded-full border px-5 py-2.5 text-sm transition-colors ${filter === item ? 'border-[#233d2e] bg-[#233d2e] text-white' : 'border-[#233d2e]/20 text-[#465a43] hover:bg-[#233d2e]/5'}`}>{item}</button>)}</div>
    <p className="mt-5 text-sm text-[#566452]" role="status">{visible.length} {visible.length === 1 ? 'project' : 'projects'}</p>
    <motion.div layout={!reduce} className="project-list">
      <AnimatePresence mode="popLayout" initial={false}>{visible.map(project => { return <motion.article key={project.title} layout={!reduce} initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reduce ? 0 : -8 }} transition={{ duration: reduce ? 0 : .25 }} className="project-row">
        <ProjectPreview title={project.title} />
        <div className="project-copy"><p className="eyebrow">{project.category} / {project.period}</p>
        <p className="mt-6 text-xs leading-5 text-[#5a6534]">{project.context}</p><h3 className="mt-2 text-4xl font-medium tracking-tight">{project.title}</h3><p className="mt-4 text-xl leading-7">{project.description}</p>
        <ul className="mt-6 space-y-3 text-base leading-7 text-[#566452]">{project.bullets.map(bullet => <li key={bullet} className="flex gap-3"><span aria-hidden="true" className="mt-3 h-px w-4 shrink-0 bg-[#9a7f33]" />{bullet}</li>)}</ul>
        <div className="mt-7 flex flex-wrap gap-2">{project.technologies.map(technology => <span key={technology} className="rounded-md border border-[#233d2e]/15 px-2.5 py-1.5 font-mono text-xs text-[#465a43]">{technology}</span>)}</div>
        <div className="mt-auto flex flex-wrap gap-3 pt-8">{project.links.map(link => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-[#233d2e]/25 px-4 py-3 text-sm font-medium transition-colors hover:bg-[#233d2e] hover:text-white">{link.label}<span className="sr-only"> for {project.title} (opens in a new tab)</span></a>)}</div>
        </div>
      </motion.article>; })}</AnimatePresence>
    </motion.div>
  </div></section>;
}

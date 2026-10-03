import { Award, GraduationCap } from 'lucide-react';
import { awards, education, skills } from '@/data/portfolio';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function About() {
  return <section id="about" className="section-spacing bg-[#202923]"><div className="section-shell">
    <SectionHeading index="01" eyebrow="About" title="Curiosity, backed by fundamentals." description="Computer Science and Mathematics at Georgia Tech, with a toolkit spanning machine learning, data pipelines, and application development." />
    <div className="mt-14 grid gap-5 lg:grid-cols-2">
      <Reveal><div className="h-full rounded-xl border border-white/12 bg-[#29352b] p-7 sm:p-9"><div className="flex items-center gap-3 text-[#dcea62]"><GraduationCap size={22} /><h3 className="eyebrow">Education</h3></div><h4 className="mt-8 text-3xl font-medium tracking-tight">{education.institution}</h4><p className="mt-4 text-lg text-[#d4dce0]">{education.degree}</p><p className="mt-3 text-sm text-[#a8b7a4]">{education.period} · {education.location}</p><div className="mt-8 border-t border-white/12 pt-6"><p className="font-mono text-3xl text-[#e5f077]">{education.gpa}</p><p className="mt-2 text-sm text-[#b5c2b3]">GPA</p></div></div></Reveal>
      <Reveal delay={.08}><div className="h-full rounded-xl border border-white/12 p-7 sm:p-9"><div className="flex items-center gap-3 text-[#dcea62]"><Award size={22} /><h3 className="eyebrow">Recognition</h3></div><div className="mt-7">{awards.map(award => <div key={`${award.title}-${award.year}`} className="grid gap-3 border-t border-white/12 py-5 sm:grid-cols-[1fr_auto]"><div><h4 className="font-medium">{award.href ? <a href={award.href} target="_blank" rel="noopener noreferrer" className="underline decoration-white/20 underline-offset-4 hover:text-[#e5f077]">{award.title}<span className="sr-only">, {award.year}</span></a> : award.title}</h4>{award.detail && <p className="mt-2 text-sm text-[#a8b7a4]">{award.detail}</p>}</div><span className="font-mono text-xs leading-6 text-[#dcea62]">{award.year}</span></div>)}</div></div></Reveal>
    </div>
    <Reveal><div className="mt-5 rounded-xl border border-white/12 p-7 sm:p-9"><p className="eyebrow text-[#dcea62]">Technical skills</p><div className="mt-8 grid gap-8 md:grid-cols-3">{Object.entries(skills).map(([category, items]) => <div key={category}><h3 className="text-base font-medium">{category}</h3><div className="mt-4 flex flex-wrap gap-2">{items.map(item => <span key={item} className="topic-tag">{item}</span>)}</div></div>)}</div></div></Reveal>
  </div></section>;
}

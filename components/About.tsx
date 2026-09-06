import { ArrowUpRight, Award, GraduationCap } from 'lucide-react';
import { awards, education, skills } from '@/data/portfolio';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function About() {
  return <section id="about" className="bg-[#0b151e] py-28"><div className="section-shell"><SectionHeading index="07" eyebrow="About" title="Recognition, education, and tools." description="The academic foundation and technical toolkit supporting Alexander’s research work." />
    <div className="mt-16 grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
      <Reveal><div className="border border-white/12 p-7 sm:p-9"><div className="flex items-center gap-3 text-[#d9bd6a]"><Award size={18} /><h3 className="font-mono text-xs uppercase tracking-[.16em]">Awards</h3></div><div className="mt-7">{awards.map((award) => <div key={`${award.title}-${award.year}`} className="grid gap-3 border-t border-white/12 py-5 sm:grid-cols-[1fr_auto]"><div><h4 className="font-medium">{award.title}</h4>{award.detail && <p className="mt-1 text-sm text-[#87959d]">{award.detail}</p>}</div><div className="flex items-start gap-3 font-mono text-xs text-[#d0b65f]"><span>{award.year}</span>{award.href && <a href={award.href} target="_blank" rel="noopener noreferrer" aria-label={`View ${award.title}, ${award.year}`}><ArrowUpRight size={15} /></a>}</div></div>)}</div></div></Reveal>
      <Reveal><div className="h-full border border-white/12 bg-[#101d27] p-7 sm:p-9"><div className="flex items-center gap-3 text-[#d9bd6a]"><GraduationCap size={19} /><h3 className="font-mono text-xs uppercase tracking-[.16em]">Education</h3></div><h4 className="mt-9 text-2xl font-medium tracking-[-.025em]">{education.institution}</h4><p className="mt-3 text-[#d4dce0]">{education.degree}</p><p className="mt-2 font-mono text-xs text-[#87959d]">{education.period} · {education.location}</p><div className="mt-8 border-t border-white/12 pt-5"><p className="font-mono text-[10px] uppercase tracking-wider text-[#d0b65f]">Relevant coursework</p><ul className="mt-4 space-y-2 text-sm text-[#929fa7]">{education.coursework.map((item) => <li key={item}>{item}</li>)}</ul></div></div></Reveal>
    </div>
    <Reveal><div className="mt-5 border border-white/12 p-7 sm:p-9"><p className="font-mono text-xs uppercase tracking-[.16em] text-[#d9bd6a]">Technical skills</p><div className="mt-8 grid gap-8 md:grid-cols-3">{Object.entries(skills).map(([category, items]) => <div key={category}><h3 className="text-sm font-semibold text-white">{category}</h3><div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">{items.map((item) => <span key={item} className="text-sm text-[#8e9ca4]">{item}</span>)}</div></div>)}</div></div></Reveal>
  </div></section>;
}

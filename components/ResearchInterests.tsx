import { AudioLines, BrainCircuit, Waves } from 'lucide-react';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

const groups = [
  { title: 'Language & learning', icon: BrainCircuit, detail: 'How do smaller models learn from less data?', items: ['Transformers', 'Consistency regularization', 'Multi-token prediction'], href: '#experience-dsgt' },
  { title: 'Environmental ML', icon: Waves, detail: 'Can a model work beyond the places and times it has seen?', items: ['Water-quality forecasting', 'Wildfire-smoke forecasting', 'Temporal & spatial validation'], href: '#experience-liu-lab' },
  { title: 'Applied intelligence', icon: AudioLines, detail: 'How can research become a useful, usable tool?', items: ['Audio classification', 'Source-linked LLM feedback', 'Computer vision'], href: '#experience-humsense' },
];

export function ResearchInterests() {
  return <section id="research" className="section-spacing bg-[#f1eedf] text-[#233d2e]"><div className="section-shell">
    <SectionHeading light index="02" eyebrow="Research interests" title="Better questions. More useful models." description="I’m interested in how models learn, how we evaluate them, and what it takes to make them useful beyond an experiment." />
    <nav aria-label="Research resources" className="research-shortcuts"><a href="#experience">Experience ↗</a><a href="#publications">Publications ↗</a><a href="#posters">Poster gallery ↗</a></nav><div className="mt-14 grid gap-5 lg:grid-cols-3">{groups.map(({ title, icon: Icon, detail, items, href }, index) => <Reveal key={title} delay={index * .07} className="h-full"><a href={href} className="group flex h-full flex-col rounded-xl border border-[#233d2e]/15 p-7 transition-colors hover:border-[#6c7846] hover:bg-white/40"><Icon size={27} strokeWidth={1.5} className="text-[#5a6534]" /><h3 className="mt-7 text-2xl font-medium tracking-tight">{title}</h3><p className="mt-4 text-base leading-7 text-[#566452]">{detail}</p><ul className="mt-6 space-y-3 text-sm text-[#566452]">{items.map(item => <li key={item} className="border-t border-[#233d2e]/12 pt-3">{item}</li>)}</ul><span className="mt-auto pt-7 text-sm font-medium text-[#5a6534] underline decoration-[#5a6534]/30 underline-offset-4 group-hover:decoration-[#5a6534]">Explore the work</span></a></Reveal>)}</div>
  </div></section>;
}

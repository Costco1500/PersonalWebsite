import { AudioLines, BrainCircuit, Waves } from 'lucide-react';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

const groups = [
  { title: 'Language & learning', icon: BrainCircuit, detail: 'How do smaller models learn from less data?', items: ['Transformers', 'Consistency regularization', 'Multi-token prediction'], href: '#experience-dsgt' },
  { title: 'Environmental ML', icon: Waves, detail: 'Can a model work beyond the places and times it has seen?', items: ['Water-quality forecasting', 'Wildfire-smoke forecasting', 'Temporal & spatial validation'], href: '#experience-liu-lab' },
  { title: 'Applied intelligence', icon: AudioLines, detail: 'How can research become a useful, usable tool?', items: ['Audio classification', 'Source-linked LLM feedback', 'Computer vision'], href: '#experience-humsense' },
];

export function ResearchInterests() {
  return <section id="research" className="section-spacing bg-[#f1eee5] text-[#0c1821]"><div className="section-shell">
    <SectionHeading light index="01" eyebrow="Research interests" title="Better questions. More useful models." description="I’m interested in how models learn, how we evaluate them, and what it takes to make them useful beyond an experiment." />
    <div className="mt-14 grid gap-5 lg:grid-cols-3">{groups.map(({ title, icon: Icon, detail, items, href }, index) => <Reveal key={title} delay={index * .07} className="h-full"><a href={href} className="group flex h-full flex-col rounded-xl border border-[#0c1821]/15 p-7 transition-colors hover:border-[#927b37] hover:bg-white/40"><Icon size={27} strokeWidth={1.5} className="text-[#8d742e]" /><h3 className="mt-7 text-2xl font-medium tracking-tight">{title}</h3><p className="mt-4 text-base leading-7 text-[#53626b]">{detail}</p><ul className="mt-6 space-y-3 text-sm text-[#53626b]">{items.map(item => <li key={item} className="border-t border-[#0c1821]/12 pt-3">{item}</li>)}</ul><span className="mt-auto pt-7 text-sm font-medium text-[#806b2d] underline decoration-[#806b2d]/30 underline-offset-4 group-hover:decoration-[#806b2d]">Explore the work</span></a></Reveal>)}</div>
  </div></section>;
}

import { BookOpen } from 'lucide-react';
import { publications } from '@/data/portfolio';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

function HighlightedAuthors({ authors, highlight }: { authors: string; highlight: string }) {
  const [before, after] = authors.split(highlight);
  return <>{before}<strong className="font-semibold text-[#e5f077]">{highlight}</strong>{after}</>;
}

export function Publications() {
  return <section id="publications" className="site-grid bg-[#102d22] section-spacing"><div className="section-shell"><SectionHeading index="06" eyebrow="Publications & preprints" title="Research, shared." description="Peer-reviewed conference papers and a preprint spanning water-quality modeling, additive manufacturing, and disaster-response modeling. Preprints are labeled separately and have not been peer reviewed." />
    <div className="mt-16 border-t border-white/12">{publications.map((publication, index) => <Reveal key={publication.href}><article className="group grid gap-7 border-b border-white/12 py-10 md:grid-cols-[80px_1fr_auto] md:items-start"><div className="font-mono text-xs text-[#dcea62]">0{index + 1}</div><div><div className="flex flex-wrap gap-2 font-mono text-xs uppercase tracking-[.14em] text-[#acbba5]"><span className="border border-white/12 px-2 py-1">{publication.preprint ? 'Preprint · Not peer reviewed' : 'IEEE · Peer reviewed'}</span><span className="border border-white/12 px-2 py-1">{publication.authorship}</span><span className="border border-white/12 px-2 py-1">{publication.year}</span></div><h3 className="mt-6 max-w-3xl text-2xl font-medium leading-8 tracking-[-.02em] sm:text-3xl">“{publication.title}”</h3><p className="mt-5 text-sm text-[#b5c2b3]"><HighlightedAuthors authors={publication.authors} highlight={publication.highlight} /> · {publication.venue}, {publication.year}</p>{publication.posted && <p className="mt-3 font-mono text-xs text-[#a8b7a4]">Posted {publication.posted}</p>}{publication.doi && <p className="mt-3 break-all font-mono text-xs text-[#a8b7a4]">DOI: {publication.doi}</p>}</div><a href={publication.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 self-center border border-white/18 px-4 py-3 text-sm transition-colors hover:border-[#dcea62] hover:text-[#e5f077]">{publication.preprint ? 'Read preprint' : 'View on IEEE'} <BookOpen size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a></article></Reveal>)}</div>
  </div></section>;
}

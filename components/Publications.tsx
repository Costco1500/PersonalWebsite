import { BookOpen } from 'lucide-react';
import { publications } from '@/data/portfolio';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

function HighlightedAuthors({ authors, highlight }: { authors: string; highlight: string }) {
  const [before, after] = authors.split(highlight);
  return <>{before}<strong className="font-semibold text-[#e2c66d]">{highlight}</strong>{after}</>;
}

export function Publications() {
  return <section id="publications" className="site-grid bg-[#071018] section-spacing"><div className="section-shell"><SectionHeading index="05" eyebrow="Publications" title="Peer-reviewed research." description="Conference publications spanning additive manufacturing and quantum machine learning for disaster-response modeling." />
    <div className="mt-16 border-t border-white/12">{publications.map((publication, index) => <Reveal key={publication.doi}><article className="group grid gap-7 border-b border-white/12 py-10 md:grid-cols-[80px_1fr_auto] md:items-start"><div className="font-mono text-xs text-[#d9bd6a]">0{index + 1}</div><div><div className="flex flex-wrap gap-2 font-mono text-xs uppercase tracking-[.14em] text-[#8d9aa2]"><span className="border border-white/12 px-2 py-1">IEEE</span><span className="border border-white/12 px-2 py-1">{publication.authorship}</span><span className="border border-white/12 px-2 py-1">{publication.year}</span></div><h3 className="mt-6 max-w-3xl text-2xl font-medium leading-8 tracking-[-.02em] sm:text-3xl">“{publication.title}”</h3><p className="mt-5 text-sm text-[#a4b0b7]"><HighlightedAuthors authors={publication.authors} highlight={publication.highlight} /> · {publication.venue}, {publication.year}</p><p className="mt-3 break-all font-mono text-xs text-[#77858e]">DOI: {publication.doi}</p></div><a href={publication.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 self-center border border-white/18 px-4 py-3 text-sm transition-colors hover:border-[#c9a84c] hover:text-[#e2c66d]">View on IEEE <BookOpen size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a></article></Reveal>)}</div>
  </div></section>;
}

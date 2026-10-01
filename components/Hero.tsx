import { Code2, Mail } from 'lucide-react';
import { ResearchExplorer } from './ResearchExplorer';
import { Reveal } from './Reveal';

export function Hero() {
  return (
    <section id="top" className="site-grid relative border-b border-white/10 pt-24">
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="section-shell relative grid items-center gap-14 py-20 lg:min-h-[790px] lg:grid-cols-[1.05fr_1fr] lg:py-24">
        <Reveal>
          <p className="eyebrow text-[#d9bd6a]">Georgia Tech · Atlanta, GA</p>
          <h1 className="mt-7 text-[clamp(3.75rem,8vw,6.75rem)] font-medium leading-[.98] tracking-[-.055em]">Alexander<br /><span className="text-[#aeb8be]">Wang.</span></h1>
          <p className="mt-8 max-w-xl text-2xl leading-snug tracking-tight sm:text-3xl">Making sense of data.<br />Building things that work.</p>
          <p className="mt-5 max-w-lg leading-7 text-[#aab7c1]">Computer Science &amp; Mathematics at Georgia Tech. I work on language models, environmental forecasting, and machine learning that connects research to useful applications.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#experience" className="action-button action-primary">Explore my work</a>
            <a href="https://github.com/Costco1500" target="_blank" rel="noopener noreferrer" className="action-button"><Code2 size={17} /> GitHub</a>
            <a href="mailto:awang871@gatech.edu" className="action-button" aria-label="Email Alexander Wang"><Mail size={18} /></a>
          </div>
          <p className="mt-7 font-mono text-xs leading-6 text-[#94a3ae]">B.S. Computer Science and Mathematics<br />4.0 GPA · Expected May 2029</p>
        </Reveal>
        <Reveal delay={.12}><ResearchExplorer /></Reveal>
      </div>
      <div className="section-shell relative grid grid-cols-1 border-t border-white/12 py-7 sm:grid-cols-3">
        {[['Language', 'Learning under data scarcity'], ['Environment', 'Forecasting across time and place'], ['Applications', 'From audio to iOS experiences']].map(([title, description]) => <div key={title} className="py-3 sm:border-l sm:border-white/12 sm:px-6 first:sm:border-0 first:sm:pl-0"><p className="font-mono text-xs uppercase tracking-widest text-[#d9bd6a]">{title}</p><p className="mt-2 text-sm text-[#aab7c1]">{description}</p></div>)}
      </div>
    </section>
  );
}

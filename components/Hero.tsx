import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { SportsScene } from './SportsScene';
import { Reveal } from './Reveal';

export function Hero() {
  return (
    <section id="top" className="court-hero">
      <div className="section-shell hero-layout">
        <Reveal className="hero-copy">
          <p className="eyebrow hero-kicker"><span className="status-dot" /> Georgia Tech · CS + Mathematics</p>
          <h1>Alexander<br /><em>Wang.</em></h1>
          <p className="hero-intro">Curiosity in the lab.<br />Energy on the court. Focus under the bar.</p>
          <p className="hero-description">I study Computer Science and Mathematics at Georgia Tech, working on language models, environmental forecasting, and useful applications of machine learning.</p>
          <div className="hero-actions"><a href="#projects" className="action-button action-primary">View my work <ArrowDownRight size={18} /></a><a href="#contact" className="action-button">Contact <ArrowUpRight size={18} /></a></div>
          <p className="hero-footnote">ATLANTA, GA <span>/</span> B.S. EXPECTED MAY 2029</p>
        </Reveal>
        <Reveal delay={.1} className="hero-art"><SportsScene /></Reveal>
      </div>
      <div className="section-shell hero-baseline"><span className="eyebrow">Court &amp; Iron <span className="muted">/ A personal portfolio</span></span><a href="#research">Research, engineering &amp; everything in between <ArrowDownRight size={16} /></a></div>
    </section>
  );
}

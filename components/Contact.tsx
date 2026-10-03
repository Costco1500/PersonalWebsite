import { Code2, Mail, Link } from 'lucide-react';
import { Reveal } from './Reveal';

export function Contact() {
  return <>
    <section id="contact" className="section-spacing relative overflow-hidden bg-[#dcea62] text-[#102d22]">
      <div className="section-shell relative"><Reveal><p className="eyebrow">09 / Contact</p><h2 className="mt-6 max-w-4xl text-5xl font-medium leading-tight tracking-[-.045em] sm:text-7xl">Let’s build something<br />worth exploring.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-[#27343d]">I’m interested in machine learning, thoughtful experiments, and applications that turn data into something useful.</p>
        <div className="mt-9 flex flex-wrap gap-3"><a href="mailto:awang871@gatech.edu" className="inline-flex items-center gap-2 rounded-lg bg-[#102d22] px-5 py-3 text-sm font-medium text-white"><Mail size={17} /> Email me</a><a href="https://www.linkedin.com/in/alex-wang-5b5179352/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-[#102d22]/40 px-5 py-3 text-sm font-medium hover:bg-[#102d22]/5"><Link size={17} /> LinkedIn</a><a href="https://github.com/Costco1500" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-[#102d22]/40 px-5 py-3 text-sm font-medium hover:bg-[#102d22]/5"><Code2 size={17} /> GitHub</a></div>
      </Reveal></div>
    </section>
    <footer className="bg-[#16251c] py-10 text-[#a8b7a4]"><div className="section-shell flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"><div><p className="font-medium text-white">Alexander Wang</p><p className="mt-2 text-sm leading-6">Computer Science &amp; Mathematics<br />Georgia Institute of Technology</p></div><div className="flex flex-wrap items-center gap-5 text-sm"><a href="mailto:awang871@gatech.edu" className="hover:text-white">awang871@gatech.edu</a><a href="#top" className="hover:text-[#e5f077]">Back to top</a><span className="font-mono text-xs">© {new Date().getFullYear()}</span></div></div></footer>
  </>;
}

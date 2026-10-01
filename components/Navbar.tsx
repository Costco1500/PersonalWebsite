'use client';

import { Menu, X } from 'lucide-react';
import { motion, useScroll, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const links = [['Research', '#research'], ['Experience', '#experience'], ['Publications', '#publications'], ['Projects', '#projects'], ['About', '#about'], ['Contact', '#contact']];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#top');
  const menuButton = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  const reduce = useReducedMotion();

  useEffect(() => {
    const sections = ['#top', ...links.map(([, href]) => href)].map(href => document.querySelector(href)).filter(Boolean) as Element[];
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) setActive(`#${entry.target.id}`); }), { rootMargin: '-15% 0px -60% 0px' });
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); menuButton.current?.focus(); }
    };
    const onOutside = (event: PointerEvent) => { if (!header.current?.contains(event.target as Node)) setOpen(false); };
    const breakpoint = window.matchMedia('(min-width: 1024px)');
    const onResize = () => { if (breakpoint.matches) setOpen(false); };
    window.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onOutside);
    breakpoint.addEventListener('change', onResize);
    return () => { window.removeEventListener('keydown', onKey); document.removeEventListener('pointerdown', onOutside); breakpoint.removeEventListener('change', onResize); };
  }, [open]);

  return <>
    <a href="#experience" className="skip-link">Skip to experience</a>
    <header ref={header} className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#071018]/95 backdrop-blur-xl">
      <nav aria-label="Primary navigation" className="section-shell flex h-20 items-center justify-between gap-5">
        <a href="#top" onClick={() => setOpen(false)} className="flex shrink-0 items-center gap-3 text-sm font-semibold"><span className="grid size-9 place-items-center rounded-sm border border-[#c9a84c]/70 font-mono text-xs text-[#e3c669]">AW</span><span>Alexander Wang</span></a>
        <div className="hidden items-center gap-6 lg:flex">{links.map(([label, href]) => <a key={href} href={href} aria-current={active === href ? 'location' : undefined} className={`relative py-7 text-sm transition-colors hover:text-[#e3c669] ${active === href ? 'text-[#e3c669] after:absolute after:inset-x-0 after:bottom-1 after:h-px after:bg-[#e3c669]' : 'text-[#aab7c1]'}`}>{label}</a>)}</div>
        <button ref={menuButton} type="button" onClick={() => setOpen(!open)} className="grid size-11 place-items-center rounded-md border border-white/20 lg:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close navigation' : 'Open navigation'}>{open ? <X size={20} /> : <Menu size={20} />}</button>
      </nav>
      {open && <div id="mobile-menu" className="border-t border-white/10 bg-[#071018] px-5 py-4 lg:hidden">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="block rounded-md px-3 py-3 text-base text-[#d8dde0] hover:bg-white/5">{label}</a>)}</div>}
      {!reduce && <motion.div aria-hidden="true" style={{ scaleX: scrollYProgress, transformOrigin: 'left' }} className="absolute inset-x-0 bottom-0 h-px bg-[#d9bd6a]" />}
    </header>
  </>;
}

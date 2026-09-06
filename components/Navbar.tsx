'use client';

import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const links = [['Research', '#research'], ['Publications', '#publications'], ['Projects', '#projects'], ['About', '#about'], ['Contact', '#contact']];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#research');
  useEffect(() => {
    const sections = links.map(([, href]) => document.querySelector(href)).filter(Boolean) as Element[];
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) setActive(`#${entry.target.id}`); }), { rootMargin: '-28% 0px -62% 0px' });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#071018]/90 backdrop-blur-xl"><nav aria-label="Primary navigation" className="section-shell flex h-18 items-center justify-between"><a href="#top" className="flex items-center gap-3 text-sm font-semibold tracking-wide"><span className="grid size-9 place-items-center border border-[#c9a84c]/70 font-mono text-[11px] text-[#e3c669]">AW</span><span>Alexander Wang</span></a><div className="hidden items-center gap-8 md:flex">{links.map(([label, href], index) => <a key={href} href={href} aria-current={active === href ? 'location' : undefined} className={`relative py-6 text-sm transition-colors hover:text-[#e3c669] ${active === href ? 'text-[#e3c669] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-[#e3c669]' : index < 2 ? 'text-white' : 'text-[#aab4bc]'}`}>{label}</a>)}</div><button type="button" onClick={() => setOpen(!open)} className="grid size-10 place-items-center border border-white/15 md:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close navigation' : 'Open navigation'}>{open ? <X size={19} /> : <Menu size={19} />}</button></nav>{open && <div id="mobile-menu" className="border-t border-white/10 bg-[#071018] px-5 py-5 md:hidden">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="block border-b border-white/8 py-3 text-sm text-[#d8dde0]">{label}</a>)}</div>}</header>;
}

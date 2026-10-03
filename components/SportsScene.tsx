'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, MousePointer2 } from 'lucide-react';
import { interests } from '@/data/interests';

type Interest = 'tennis' | 'lifting';
// Shared isometric projection keeps floor markings and equipment in one space.
const point = (x: number, y: number, z = 0) => `${310 + x - .85 * y},${75 + .45 * x + .5 * y - z}`;
const quad = (x: number, y: number, w: number, d: number, z = 0) => [point(x,y,z), point(x+w,y,z), point(x+w,y+d,z), point(x,y+d,z)].join(' ');

export function SportsScene() {
  const [selected, setSelected] = useState<Interest | null>(null);
  const [hot, setHot] = useState<string | null>(null);
  const [pulse, setPulse] = useState(0);
  const reduce = useReducedMotion();
  const select = (key: Interest) => { setSelected(selected === key ? null : key); setPulse(p => p + 1); };
  return <div className="sports-scene">
    <div className="scene-heading"><span className="eyebrow">The after-hours club</span><span className="eyebrow">01 / 02</span></div>
    <div className="scene-stage">
      <svg viewBox="0 0 760 555" role="img" aria-label="A miniature tennis court connected to a weight room, with a racket, barbell rack, bench and courtside laptop">
        <defs>
          <pattern id="court-net" width="9" height="9" patternUnits="userSpaceOnUse"><path d="M9 0H0V9" fill="none" stroke="#dddcca" strokeWidth=".8" opacity=".65" /></pattern>
          <pattern id="racket-strings" width="6" height="6" patternUnits="userSpaceOnUse"><path d="M6 0H0V6" fill="none" stroke="#f1f0d8" strokeWidth=".8" /></pattern>
          <pattern id="rubber" width="15" height="13" patternUnits="userSpaceOnUse"><circle cx="2" cy="4" r=".8" fill="#b7bcad" opacity=".2" /><circle cx="11" cy="10" r=".7" fill="#b7bcad" opacity=".2" /></pattern>
          <linearGradient id="court-surface" x2="1" y2="1"><stop stopColor="#3e7358" /><stop offset="1" stopColor="#265442" /></linearGradient>
          <linearGradient id="steel"><stop stopColor="#929d95" /><stop offset=".4" stopColor="#e7eadd" /><stop offset="1" stopColor="#67756c" /></linearGradient>
        </defs>
        <ellipse cx="380" cy="425" rx="315" ry="68" fill="#061a12" opacity=".38" />
        <polygon points={`${point(-15,350)} ${point(450,350)} ${point(450,350,-22)} ${point(-15,350,-22)}`} fill="#163526" />
        <polygon points={`${point(450,-15)} ${point(450,350)} ${point(450,350,-22)} ${point(450,-15,-22)}`} fill="#112d21" />
        <polygon points={quad(-15,-15,465,365)} fill="#577461" />
        <polygon points={quad(0,0,250,330)} fill="url(#court-surface)" stroke={hot === 'tennis' ? '#dcea62' : 'transparent'} strokeWidth="3" />
        <polygon points={quad(265,0,170,330)} fill="#292f2a" />
        <polygon points={quad(265,0,170,330)} fill="url(#rubber)" />
        <g transform="matrix(1 .45 -.85 .5 310 75)" fill="none" stroke="#e5e7cf" strokeWidth="2">
          <rect x="22" y="22" width="206" height="286" /><path d="M48 22V308M202 22V308M48 93H202M48 237H202M125 93V237M22 165H228" />
          <path d="M255 0V330" stroke="#d7e949" strokeWidth="3" />
        </g>
        <polygon points={`${point(15,165)} ${point(235,165)} ${point(235,165,44)} ${point(15,165,44)}`} fill="#14271f" opacity=".7" />
        <polygon points={`${point(15,165)} ${point(235,165)} ${point(235,165,44)} ${point(15,165,44)}`} fill="url(#court-net)" />
        <path d={`M${point(15,165,44)} L${point(235,165,44)}`} stroke="#faf6e9" strokeWidth="3" />
        {[15,235].map(x => <path key={x} d={`M${point(x,165,-2)} L${point(x,165,51)}`} stroke="#c5c9b5" strokeWidth="5" />)}
        <motion.g key={`lifting-${pulse}`} initial={reduce ? false : { y:0 }} animate={{ opacity: hot === 'lifting' ? 1 : .85, y: selected === 'lifting' && !reduce ? [0,-5,0] : 0 }} transition={{ duration:reduce ? 0 : .35 }}>
          <polygon points={quad(282,48,141,156)} fill="#070e0b" opacity=".3" />
          {[285,410].map(x => <g key={x}><path d={`M${point(x,60)} L${point(x,60,125)} L${point(x,135,125)} L${point(x,135)}`} fill="none" stroke="#788578" strokeWidth="7" /><path d={`M${point(x,50)} L${point(x,155)}`} stroke="#abb4a0" strokeWidth="7" />{[40,55,70,85,100].map(z => <circle key={z} cx={310+x-.85*135} cy={75+.45*x+.5*135-z} r="1.7" fill="#18261d" />)}</g>)}
          <path d={`M${point(285,60,125)} L${point(410,60,125)}`} stroke="#b7c3a9" strokeWidth="6" />
          <path d={`M${point(265,130,75)} L${point(433,130,75)}`} stroke="url(#steel)" strokeWidth="8" />
          {[277,290,404,417].map((x,i) => <ellipse key={x} cx={310+x-.85*130} cy={75+.45*x+65-75} rx={i%2 ? 10 : 8} ry="31" transform={`rotate(-24 ${310+x-.85*130} ${75+.45*x+65-75})`} fill={i%2 ? '#bccc4b' : '#3b463b'} stroke="#d8dfae" strokeWidth="1.5" />)}
          {[185,238].map(y => <path key={y} d={`M${point(330,y)} L${point(330,y,30)} M${point(315,y)} L${point(348,y)}`} stroke="#b4bbae" strokeWidth="5" />)}
          <polygon points={quad(307,165,47,96,32)} fill="#121d16" stroke="#798c73" strokeWidth="2" />
          <polygon points={`${point(307,165,32)} ${point(354,165,32)} ${point(354,165,22)} ${point(307,165,22)}`} fill="#4c6050" />
        </motion.g>
        <motion.g animate={{ y: hot === 'projects' && !reduce ? -5 : 0 }} transition={{ duration:reduce ? 0 : .2 }}>
          <polygon points={quad(360,271,59,43,10)} fill="#1b2b21" />
          <polygon points={quad(360,271,59,43,15)} fill="#a3ae96" />
          <polygon points={`${point(360,271,15)} ${point(419,271,15)} ${point(414,268,61)} ${point(355,268,61)}`} fill="#bbc2ae" />
          <polygon points={`${point(364,270,21)} ${point(413,270,21)} ${point(409,268,55)} ${point(360,268,55)}`} fill="#123529" />
          <path d={`M${point(370,269,44)} l8 4 -8 3 m16 6 13 6`} fill="none" stroke="#d8e951" strokeWidth="2" />
        </motion.g>
        <motion.g key={pulse} initial={reduce ? false : { rotate:0 }} animate={!reduce && selected === 'tennis' ? { rotate: [0,-8,0] } : { rotate: 0 }} style={{ transformOrigin: '190px 310px' }} transition={{ duration: reduce ? 0 : .4 }}>
          <g transform="translate(180 306) rotate(-35)"><ellipse cx="0" cy="8" rx="26" ry="34" fill="#09251b" opacity=".4" /><path d="M-10 22L0 47L10 22M0 46V80" fill="none" stroke="#ddeb58" strokeWidth="5" /><path d="M0 62V83" stroke="#eeebd6" strokeWidth="8" /><ellipse rx="25" ry="34" fill="url(#racket-strings)" stroke="#e1ed63" strokeWidth="5" /></g>
        </motion.g>
        <ellipse cx="250" cy="340" rx="10" ry="4" fill="#0d281b" opacity=".5" /><circle cx="250" cy="330" r="8" fill="#e5f264" /><path d="M244 326Q253 327 253 337" fill="none" stroke="#faf6d7" strokeWidth="1.5" />
        <text x="407" y="464" fill="#a1b7a0" fontSize="10" letterSpacing="3" transform="rotate(-26 407 464)">COURT &amp; IRON — AW</text>
      </svg>
      <button type="button" className="scene-hotspot tennis-hotspot" onMouseEnter={() => setHot('tennis')} onMouseLeave={() => setHot(null)} onFocus={() => setHot('tennis')} onBlur={() => setHot(null)} onClick={() => select('tennis')} aria-expanded={selected === 'tennis'} aria-controls="scene-interest"><span>01</span> Tennis <span aria-hidden="true">↗</span></button>
      <button type="button" className="scene-hotspot lifting-hotspot" onMouseEnter={() => setHot('lifting')} onMouseLeave={() => setHot(null)} onFocus={() => setHot('lifting')} onBlur={() => setHot(null)} onClick={() => select('lifting')} aria-expanded={selected === 'lifting'} aria-controls="scene-interest"><span>02</span> Weightlifting <span aria-hidden="true">↗</span></button>
      <a href="#projects" className="scene-hotspot laptop-hotspot" onMouseEnter={() => setHot('projects')} onMouseLeave={() => setHot(null)} onFocus={() => setHot('projects')} onBlur={() => setHot(null)}><span>03</span> Projects <ArrowUpRight size={14} /></a>
    </div>
    <div className="scene-caption" id="scene-interest" aria-live="polite">
      {selected ? <div><p>{interests[selected].summary}</p><a href={`#${selected}`}>Explore {selected === 'lifting' ? 'weightlifting' : 'tennis'} <ArrowUpRight size={14} /></a></div> : <p><MousePointer2 size={15} /><span>Explore the court <span className="muted">— choose a labeled object.</span></span></p>}
    </div>
  </div>;
}

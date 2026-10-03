'use client';

import { useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Minus, Plus, RotateCcw } from 'lucide-react';
import { interests, barbellConfig } from '@/data/interests';
import { barbellWeight, changePlatePairs, rallyFlight } from '@/lib/sports';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

function TennisRally() {
  const [started, setStarted] = useState(false);
  const [hits, setHits] = useState(0);
  const [moving, setMoving] = useState(false);
  const movingRef = useRef(false);
  const hitButton = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();
  const finish = () => { movingRef.current = false; setMoving(false); };
  const reset = () => { setStarted(false); setHits(0); finish(); };
  const hit = () => {
    if (!started || movingRef.current) return;
    movingRef.current = true;
    setMoving(true);
    setHits(n => n + 1);
  };
  const { startX, endX, arc } = rallyFlight(hits);
  return <div className="rally-widget">
    <div className="widget-score"><span className="eyebrow">Practice court / session rally</span><output aria-live="polite" aria-label="Consecutive hits">{String(hits).padStart(2,'0')} <span>hits</span></output></div>
    <svg viewBox="0 0 520 250" className="rally-court" role="img" aria-label="A tennis ball travels in an arc across a court with its shadow beneath it">
      <path d="M64 216L126 68H394L456 216Z" fill="#396b50" stroke="#e4e7cc" strokeWidth="2" />
      <path d="M90 216L144 68M430 216L376 68M116 148H404M140 92H380M260 92V148" fill="none" stroke="#e4e7cc" strokeWidth="1.5" />
      <path d="M260 225V76" stroke="#dddcc3" strokeWidth="3" /><path d="M260 225V76L273 58V203Z" fill="#112c2099" stroke="#c8d3b4" />
      <path d="M265 90V214M270 78V205M260 110L273 92M260 135L273 117M260 160L273 142M260 185L273 167" stroke="#bac6b0" strokeWidth=".8" />
      <motion.ellipse key={`shadow-${hits}-${started}`} cy="191" rx="12" ry="4" fill="#071b12" initial={hits && !reduce ? { cx:startX, rx:12, opacity:.5 } : false} animate={hits ? { cx: reduce ? endX : [startX,260,endX], rx: reduce ? 12 : [12,7,12], opacity: reduce ? .5 : [.5,.25,.5] } : { cx: 90, rx:12, opacity:.5 }} transition={{ duration: reduce ? 0 : .65 }} />
      <motion.g key={`ball-${hits}-${started}`} initial={hits && !reduce ? { x:startX,y:177 } : false} animate={hits ? { x: reduce ? endX : [startX,endX], y: reduce ? 177 : arc } : { x:90,y:177 }} transition={{ duration: reduce ? 0 : .65, ease:'linear' }} onAnimationComplete={finish}>
        <circle r="9" fill="#dfed57" /><path d="M-7 -5Q3 -3 3 8" stroke="#fffbe3" strokeWidth="1.6" fill="none" />
      </motion.g>
    </svg>
    <div className="widget-controls">
      <button type="button" className="action-button action-primary" onClick={() => { setStarted(true); requestAnimationFrame(() => hitButton.current?.focus()); }} disabled={started}>Start rally</button>
      <button ref={hitButton} type="button" className="action-button" disabled={!started} aria-disabled={moving} onClick={hit} aria-describedby="rally-help">Hit ball <span aria-hidden="true">↗</span></button>
      <button type="button" className="icon-button" onClick={reset} aria-label="Reset rally"><RotateCcw size={18} /></button>
    </div>
    <p id="rally-help" className="widget-note">{started ? 'Tap Hit ball, or press Space with that button focused. Wait for the ball to land, then hit again.' : 'Hit a few. Start a rally, then send the ball across the court.'} No timer, no pressure.</p>
  </div>;
}

function Barbell() {
  const [pairs, setPairs] = useState(0);
  const reduce = useReducedMotion();
  const { barWeight, plateWeight, maxPairs, unit } = barbellConfig;
  const total = barbellWeight(pairs, barbellConfig);
  return <div className="barbell-widget">
    <div className="widget-score"><span className="eyebrow">Load the bar / balanced pairs</span><output aria-live="polite" aria-label="Total barbell weight">{total} <span>{unit}</span></output></div>
    <svg className="barbell-drawing" viewBox="0 0 520 250" role="img" aria-label={`Illustrated barbell: ${barWeight} ${unit} bar plus ${pairs} pairs of ${plateWeight} ${unit} plates, ${total} ${unit} total`}>
      <defs><linearGradient id="bar-steel" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#e0e3d8" /><stop offset=".4" stopColor="#99a59a" /><stop offset="1" stopColor="#4b584e" /></linearGradient><pattern id="knurl" width="5" height="5" patternUnits="userSpaceOnUse"><path d="M0 0L5 5M5 0L0 5" stroke="#303d33" strokeWidth=".6" /></pattern></defs>
      <ellipse cx="260" cy="211" rx="208" ry="12" fill="#000" opacity=".25" />
      <path d="M32 218H488M78 237H442" stroke="#e4e7d3" opacity=".12" />
      <rect x="32" y="120" width="456" height="12" rx="4" fill="url(#bar-steel)" />
      <rect x="172" y="121" width="58" height="10" fill="url(#knurl)" /><rect x="290" y="121" width="58" height="10" fill="url(#knurl)" />
      <rect x="144" y="114" width="12" height="24" rx="2" fill="#e1e4d9" /><rect x="364" y="114" width="12" height="24" rx="2" fill="#e1e4d9" />
      <AnimatePresence>{Array.from({length:pairs},(_,i) => [-1,1].map(side => <motion.g key={`${side}-${i}`} initial={reduce ? false : { x:side*70,opacity:0 }} animate={{ x:0,opacity:1 }} exit={{ x:reduce ? 0 : side*70,opacity:0 }} transition={{ duration:reduce ? 0 : .25 }}>
        <rect x={side === -1 ? 123-i*23 : 378+i*23} y="60" width="20" height="132" rx="7" fill={i%2 ? '#b3bd93' : '#d4e455'} stroke="#eef1c4" strokeWidth="1.5" />
        <path d={`M${side === -1 ? 128-i*23 : 383+i*23} 70V182`} stroke="#263b25" opacity=".4" strokeWidth="2" />
        <text x={side === -1 ? 133-i*23 : 388+i*23} y="130" textAnchor="middle" fill="#24331d" fontSize="10" fontFamily="monospace" transform={`rotate(-90 ${side === -1 ? 133-i*23 : 388+i*23} 130)`}>{plateWeight} {unit.toUpperCase()}</text>
      </motion.g>))}</AnimatePresence>
    </svg>
    <div className="widget-controls"><button type="button" className="action-button action-primary" disabled={pairs >= maxPairs} onClick={() => setPairs(p => changePlatePairs(p,1,maxPairs))}><Plus size={16} /> Add pair</button><button type="button" className="action-button" disabled={pairs === 0} onClick={() => setPairs(p => changePlatePairs(p,-1,maxPairs))}><Minus size={16} /> Remove pair</button></div>
    <p className="weight-formula">{barWeight} {unit} bar + {pairs * 2} × {plateWeight} {unit} plates = {total} {unit}</p>
    <p className="widget-note">Matching {plateWeight} {unit} plates on each end. An interactive illustration, not a personal lifting record.</p>
  </div>;
}

function InterestCopy({ type }: { type: keyof typeof interests }) {
  const item = interests[type];
  return <><p className="interest-summary">{item.summary}</p><p className="interest-description">{item.description}</p>{item.details.length > 0 && <ul className="interest-details">{item.details.map(detail => <li key={detail}>{detail}</li>)}</ul>}{item.goals.length > 0 && <div className="interest-goals"><h4 className="eyebrow">Current goals</h4><ul>{item.goals.map(goal => <li key={goal}>{goal}</li>)}</ul></div>}</>;
}

export function Interests() {
  return <section id="interests" className="section-spacing interests-section"><div className="section-shell">
    <SectionHeading index="08" eyebrow="Beyond the screen" title="Court time. Iron time." description="Two interests outside the lab. A little room to play." />
    <div className="interests-layout">
      <Reveal><article id="tennis" className="interest tennis-interest"><div className="interest-heading"><p className="eyebrow">01 / Tennis</p><ArrowUpRight size={27} /></div><h3>{interests.tennis.title}</h3><InterestCopy type="tennis" /><TennisRally /></article></Reveal>
      <Reveal delay={.08}><article id="lifting" className="interest lifting-interest"><div className="interest-heading"><p className="eyebrow">02 / Weightlifting</p><Plus size={27} /></div><h3>{interests.lifting.title}</h3><InterestCopy type="lifting" /><Barbell /></article></Reveal>
    </div>
  </div></section>;
}

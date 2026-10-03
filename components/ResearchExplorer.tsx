'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { AudioLines, BrainCircuit, Waves } from 'lucide-react';

const studies = [
  { id: 'language', label: 'Language', icon: BrainCircuit, title: 'Small models. Big questions.', subtitle: 'Transformer research · Data Science @ Georgia Tech', metric: '7.56 → ~2.27', metricLabel: 'training loss within 1,000 steps', detail: 'A character-level Transformer trained on 100K WikiText-103 lines. Current experiments explore R-Drop and multi-token prediction under data scarcity.', bars: [{ label: 'Initial loss', value: '7.56', width: 100 }, { label: 'After training', value: '~2.27', width: 30 }], note: 'Reported training endpoints; not a validation metric.', href: '#experience-dsgt' },
  { id: 'environment', label: 'Environment', icon: Waves, title: 'Models beyond the training set.', subtitle: 'Water-quality forecasting · FSU Ye Lab', metric: '1.04M+', metricLabel: 'water-quality records curated', detail: '1,012 station-date samples and 43 predictors. Random, temporal, and spatial validation probe performance on future observations and unseen lakes.', steps: ['Random', 'Temporal', 'Spatial'], note: 'Best random-CV RMSE: 10.55. Validation schemes assess different settings.', href: '#experience-ye-lab' },
  { id: 'audio', label: 'Audio', icon: AudioLines, title: 'From sound to sheet music.', subtitle: 'HumSense · WebDev @ Georgia Tech', metric: '0.72 → 0.82', metricLabel: 'audio-classification macro-F1', detail: 'Preprocessing, augmentation, and threshold tuning improved classification. Spotify Basic Pitch connects audio to MIDI and editable sheet music.', bars: [{ label: 'Baseline', value: '0.72', width: 72 }, { label: 'Improved', value: '0.82', width: 82 }], note: '13.9% relative improvement in macro-F1.', href: '#experience-humsense' },
];

export function ResearchExplorer() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const study = studies[active];
  const Icon = study.icon;

  return <div className="research-console overflow-hidden rounded-2xl border border-white/15 bg-[#0c1924]/95 shadow-2xl">
    <div className="flex items-center justify-between border-b border-white/10 px-6 py-5"><p className="eyebrow text-[#9eaeb9]">Research explorer</p><span className="font-mono text-xs text-[#dcea62]">0{active + 1} / 03</span></div>
    <div role="tablist" aria-label="Explore research areas" className="grid grid-cols-3 gap-1 border-b border-white/10 p-3">
      {studies.map((item, index) => <button key={item.id} id={`study-tab-${item.id}`} role="tab" type="button" aria-selected={active === index} aria-controls={`study-panel-${item.id}`} tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={event => {
        let next = index;
        if (event.key === 'ArrowRight') next = (index + 1) % studies.length;
        else if (event.key === 'ArrowLeft') next = (index + studies.length - 1) % studies.length;
        else if (event.key === 'Home') next = 0;
        else if (event.key === 'End') next = studies.length - 1;
        else return;
        event.preventDefault(); setActive(next); document.getElementById(`study-tab-${studies[next].id}`)?.focus();
      }} className={`rounded-lg px-2 py-3 text-sm font-medium transition-colors ${active === index ? 'bg-[#dcea62] text-[#102d22]' : 'text-[#b5c2b3] hover:bg-white/5 hover:text-white'}`}>{item.label}</button>)}
    </div>
    <AnimatePresence mode="wait" initial={false}>
      <motion.div key={study.id} role="tabpanel" id={`study-panel-${study.id}`} aria-labelledby={`study-tab-${study.id}`} tabIndex={0} initial={reduce ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: reduce ? 0 : .18 }} className="min-h-[490px] p-6 sm:p-8">
        <div className="flex items-center gap-3 text-[#dcea62]"><Icon size={23} strokeWidth={1.5} /><span className="text-xs leading-5 text-[#b5c2b3]">{study.subtitle}</span></div>
        <h2 className="mt-5 text-2xl font-medium tracking-tight">{study.title}</h2>
        <p className="mt-7 font-mono text-[clamp(1.8rem,4vw,2.65rem)] tracking-tight text-[#e5f077]">{study.metric}</p>
        <p className="mt-1 text-sm text-[#b5c2b3]">{study.metricLabel}</p>
        <div className="my-7" aria-label={study.bars ? 'Comparison of reported results' : 'Validation approaches'}>
          {study.bars ? <div className="space-y-4">{study.bars.map((bar, index) => <div key={bar.label}><div className="mb-2 flex justify-between text-xs text-[#b7c5ce]"><span>{bar.label}</span><span className="font-mono">{bar.value}</span></div><div className="h-1.5 overflow-hidden rounded-full bg-white/8"><motion.div className={`h-full rounded-full ${index ? 'bg-[#e5f077]' : 'bg-[#718998]'}`} initial={reduce ? false : { width: 0 }} animate={{ width: `${bar.width}%` }} transition={{ duration: reduce ? 0 : .65, delay: reduce ? 0 : index * .1 }} /></div></div>)}</div> : <div className="grid grid-cols-3 gap-2">{study.steps?.map((step, index) => <div className="rounded-lg border border-white/12 p-3 text-center" key={step}><span className="font-mono text-xs text-[#dcea62]">0{index + 1}</span><p className="mt-2 text-xs text-[#c6d0d6]">{step}</p></div>)}</div>}
        </div>
        <p className="text-sm leading-6 text-[#acbbc5]">{study.detail}</p>
        <p className="mt-4 text-xs leading-5 text-[#8fa1ad]">{study.note}</p>
        <a href={study.href} className="mt-6 inline-block border-b border-[#dcea62]/50 pb-1 text-sm font-medium text-[#e5f077]">Explore this experience</a>
      </motion.div>
    </AnimatePresence>
  </div>;
}

'use client';

import { X, ExternalLink, Download } from 'lucide-react';
import { useEffect, useRef } from 'react';
import type { Poster } from '@/data/portfolio';

function PosterViewer({ poster, onClose }: { poster: Poster; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const element = dialog.current;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      element?.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus({ preventScroll: true });
    };
  }, []);

  return <dialog ref={dialog} aria-labelledby="poster-title" onCancel={event => { event.preventDefault(); onClose(); }} onClick={event => { if (event.target === event.currentTarget) { const rect = event.currentTarget.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) onClose(); } }} className="poster-dialog fixed inset-0 m-auto w-[min(1100px,calc(100%-24px))] max-w-none rounded-xl border border-white/20 bg-[#202923] p-0">
    <div className="flex items-center justify-between gap-3 border-b border-white/12 p-4">
      <p className="eyebrow text-[#dcea62]">Full-quality PDF</p>
      <button type="button" onClick={onClose} aria-label="Close poster" autoFocus className="grid size-11 shrink-0 place-items-center rounded-md border border-white/20 hover:border-[#dcea62]"><X size={20} /></button>
    </div>
    <div className="border-b border-white/12 p-4">
      <div className="flex flex-wrap gap-3"><a href={poster.pdf} target="_blank" rel="noopener noreferrer" className="action-button"><ExternalLink size={16} /> Open PDF<span className="sr-only"> in a new tab</span></a><a href={poster.pdf} download className="action-button"><Download size={16} /> Download PDF</a></div>
      <p className="mt-3 text-xs leading-5 text-[#b5c2b3]">Use the PDF viewer’s zoom controls to read the details. If the preview is unavailable, open or download the PDF above.</p>
    </div>
    <object data={`${poster.pdf}#view=Fit`} type="application/pdf" title={`${poster.title} — full-quality PDF`} className="block h-[60dvh] min-h-[280px] w-full bg-[#e9e7df]">
      <div className="p-8 text-[#233d2e]"><p>Your browser cannot display an embedded PDF.</p><a href={poster.pdf} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block underline">Open the full-quality poster in a new tab</a></div>
    </object>
    <div className="p-5"><h2 id="poster-title" className="text-base font-medium">{poster.title}</h2><p className="mt-2 text-sm text-[#b5c2b3]">{poster.institution}</p><button type="button" onClick={onClose} className="mt-4 min-h-11 text-sm underline underline-offset-4">Close poster</button></div>
  </dialog>;
}

export function PosterModal({ poster, onClose }: { poster: Poster | null; onClose: () => void }) {
  return poster ? <PosterViewer key={poster.id} poster={poster} onClose={onClose} /> : null;
}

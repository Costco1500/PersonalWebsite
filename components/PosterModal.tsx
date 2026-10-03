'use client';

import Image from 'next/image';
import { X, ZoomIn, ZoomOut } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import type { Poster } from '@/data/portfolio';

function PosterViewer({ poster, onClose }: { poster: Poster; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [zoomed, setZoomed] = useState(false);

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
      <p className="eyebrow text-[#dcea62]">Research poster</p>
      <div className="flex gap-2"><button type="button" aria-pressed={zoomed} aria-label={zoomed ? 'Fit poster to screen' : 'Enlarge poster'} onClick={() => setZoomed(!zoomed)} className="grid size-11 place-items-center rounded-md border border-white/20 hover:border-[#dcea62]">{zoomed ? <ZoomOut size={20} /> : <ZoomIn size={20} />}</button><button type="button" onClick={onClose} aria-label="Close poster" autoFocus className="grid size-11 place-items-center rounded-md border border-white/20 hover:border-[#dcea62]"><X size={20} /></button></div>
    </div>
    <div className="max-h-[65dvh] overflow-auto bg-[#e9e7df] p-3 sm:p-6"><Image src={poster.image} alt={`${poster.title} research poster`} width={poster.width * 2} height={poster.height * 2} sizes="(max-width: 768px) 100vw, 1100px" className={zoomed ? 'mx-auto h-auto w-[150%] max-w-none' : 'mx-auto h-auto max-h-[60dvh] w-auto max-w-full object-contain'} priority /></div>
    <div className="p-5"><h2 id="poster-title" className="text-base font-medium">{poster.title}</h2><p className="mt-2 text-sm text-[#b5c2b3]">{poster.institution}</p></div>
  </dialog>;
}

export function PosterModal({ poster, onClose }: { poster: Poster | null; onClose: () => void }) {
  return poster ? <PosterViewer key={poster.id} poster={poster} onClose={onClose} /> : null;
}

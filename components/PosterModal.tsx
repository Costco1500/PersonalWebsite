'use client';

import Image from 'next/image';
import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import type { Poster } from '@/data/portfolio';

export function PosterModal({ poster, onClose }: { poster: Poster | null; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!poster) return;
    const previous = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const keydown = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose(); };
    window.addEventListener('keydown', keydown);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', keydown); previous?.focus(); };
  }, [poster, onClose]);
  if (!poster) return null;
  return <div role="dialog" aria-modal="true" aria-label={`${poster.title} poster`} onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }} className="fixed inset-0 z-[100] overflow-auto bg-[#02070b]/95 p-4 backdrop-blur-md sm:p-8"><div className="mx-auto w-fit min-w-full"><div className="sticky top-0 z-10 mb-4 flex justify-end"><button ref={closeRef} type="button" onClick={onClose} aria-label="Close poster" className="grid size-12 place-items-center border border-white/20 bg-[#071018] text-white hover:border-[#d8bb61]"><X size={20} /></button></div><div className="mx-auto w-fit bg-white p-1 shadow-2xl"><Image src={poster.image} alt={`${poster.title} research poster`} width={poster.width * 3} height={poster.height * 3} className="h-auto max-w-none" priority /></div><p className="mx-auto mt-4 max-w-4xl text-center text-sm text-[#aeb9bf]">{poster.title} · {poster.institution}</p></div></div>;
}

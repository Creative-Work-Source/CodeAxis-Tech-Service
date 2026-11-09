"use client";

import { useEffect, useState } from "react";

export type Slide = { src: string; caption: string };

/** Cross-fading image sequence with a slow cinematic zoom, a light sweep and progress bars. */
export function HeroSlideshow({ slides, interval = 6000, className = "" }: { slides: Slide[]; interval?: number; className?: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), interval);
    return () => clearInterval(t);
  }, [slides.length, interval]);

  return (
    <div className={`relative overflow-hidden bg-surface-2 ${className}`}>
      {slides.map((s, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={s.src}
          src={s.src}
          alt={s.caption}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1600ms] ${
            i === index ? "kenburns opacity-100" : "opacity-0"
          }`}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}
      <div className="flash" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" aria-hidden />
      <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
        <p key={index} className="min-w-0 rounded-2xl bg-white/90 px-4 py-1.5 text-xs font-semibold text-slate-900 shadow-soft backdrop-blur">
          {slides[index].caption}
        </p>
        <div className="flex shrink-0 gap-1 sm:gap-1.5">
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show ${s.caption}`}
              className="relative h-1.5 w-4 overflow-hidden rounded-full bg-white/40 sm:w-8"
            >
              {i === index && <span key={index} className="absolute inset-0 origin-left animate-progress rounded-full bg-white" />}
              {i < index && <span className="absolute inset-0 rounded-full bg-white/80" />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

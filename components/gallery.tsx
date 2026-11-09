"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export function Gallery({ images, title }: { images: string[]; title: string }) {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (delta: number) => setIndex((i) => (i === null ? i : (i + delta + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, step]);

  return (
    <>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 2xl:columns-4">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setIndex(i)}
            className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-line bg-surface-2 shadow-soft"
            aria-label={`Open image ${i + 1} of ${images.length}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={`${title}, image ${i + 1}`} loading="lazy" className="slow-zoom w-full" />
            <div className="flash opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
          </button>
        ))}
      </div>

      {index !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} gallery`}
          onClick={close}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[index]}
            alt={`${title}, image ${index + 1}`}
            className="max-h-[88vh] max-w-full rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button type="button" onClick={close} className="absolute right-4 top-4 rounded-full bg-white/15 p-2 text-white hover:bg-white/25" aria-label="Close">
            <X className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/15 p-2 text-white hover:bg-white/25"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/15 p-2 text-white hover:bg-white/25"
            aria-label="Next image"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/70">
            {index + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}

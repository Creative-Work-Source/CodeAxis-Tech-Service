"use client";

import { useEffect, useRef, useState } from "react";

/** Counts the leading number of `value` up from zero when it scrolls into view ("15+" -> 0..15 then "+"). */
export function CountUp({ value, className = "" }: { value: string; className?: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : "";
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(target);

  useEffect(() => {
    if (!match || !ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setN(0);
    const el = ref.current;
    let raf = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / 1400);
        setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  return (
    <span ref={ref} className={className}>
      {match ? `${n}${suffix}` : value}
    </span>
  );
}

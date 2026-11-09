import { useId } from "react";

/** CodeAxis mark: code brackets around an axis origin, crossed by a drafting line. */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <defs>
        <linearGradient id={`lg${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4f46e5" />
          <stop offset="0.55" stopColor="#a855f7" />
          <stop offset="1" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill={`url(#lg${id})`} />
      <path d="M24 20 L13 32 L24 44" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M40 20 L51 32 L40 44" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M27 46 L37 18" fill="none" stroke="#fff" strokeOpacity="0.55" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="32" cy="32" r="4.5" fill="#fff" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark />
      <span className="font-display text-xl font-extrabold tracking-tight text-ink">
        Code<span className="text-gradient">Axis</span>
      </span>
    </span>
  );
}

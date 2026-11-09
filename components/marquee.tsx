/** Infinite horizontal ticker. Items are duplicated so the loop is seamless. */
export function Marquee({ items, reverse = false, className = "" }: { items: React.ReactNode[]; reverse?: boolean; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div className={`flex w-max gap-4 ${reverse ? "animate-marquee-rev" : "animate-marquee"} hover:[animation-play-state:paused]`}>
        {[...items, ...items].map((item, i) => (
          <div key={i} aria-hidden={i >= items.length}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

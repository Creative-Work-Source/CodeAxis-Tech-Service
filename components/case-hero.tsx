/** Full-bleed image hero with a cinematic zoom, used on architecture project pages. */
export function CaseHero({ image, kicker, title, children }: { image: string; kicker: string; title: string; children?: React.ReactNode }) {
  return (
    <section className="relative -mt-[4.5rem] h-[78vh] min-h-[520px] overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt={title} className="kenburns absolute inset-0 h-full w-full object-cover" />
      <div className="flash" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
      <div className="wrap relative flex h-full flex-col justify-end pb-14">
        <p data-reveal="up" className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">
          {kicker}
        </p>
        <h1 data-reveal="up" style={{ "--d": "100ms" } as React.CSSProperties} className="mt-4 max-w-5xl text-4xl font-extrabold leading-[1.05] text-white sm:text-6xl xl:text-7xl">
          {title}
        </h1>
        {children}
      </div>
    </section>
  );
}

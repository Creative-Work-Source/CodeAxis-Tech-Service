export function PageHero({
  eyebrow,
  title,
  description,
  containerClassName = "max-w-6xl",
}: {
  eyebrow: string;
  title: string;
  description: string;
  /** Outer width; use the same value as the section below for aligned columns (e.g. contact page). */
  containerClassName?: string;
}) {
  return (
    <section className={`mx-auto w-full ${containerClassName} px-6 pb-10 pt-20 md:px-8 md:pt-28`}>
      <div className="hero-panel relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/7 px-8 py-12 shadow-[0_20px_80px_rgba(2,8,23,0.45)] backdrop-blur-xl md:px-12 md:py-14">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.26em] text-cyan-100/90">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl md:leading-[1.05]">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{description}</p>
      </div>
    </section>
  );
}

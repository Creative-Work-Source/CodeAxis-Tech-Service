import { Aurora } from "@/components/aurora";

/**
 * Full-width page hero. With `media` it splits left (copy) / right (visual);
 * without it the copy spans the page.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  media,
  warm = false,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  media?: React.ReactNode;
  warm?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative -mt-[4.5rem] overflow-hidden pt-[4.5rem]">
      <Aurora warm={warm} />
      <div className="bg-grid absolute inset-0 opacity-60" aria-hidden />
      <div className={`wrap relative grid items-center gap-12 py-16 md:py-24 ${media ? "lg:grid-cols-[1.05fr_1fr]" : ""}`}>
        <div data-reveal="left" className={media ? "" : "max-w-5xl"}>
          <p className={warm ? "eyebrow-warm" : "eyebrow"}>
            <span className={`h-px w-8 ${warm ? "bg-orange-500" : "bg-indigo-500"}`} />
            {eyebrow}
          </p>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl lg:text-6xl xl:text-7xl">{title}</h1>
          {description && <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{description}</p>}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
        {media && (
          <div data-reveal="right" style={{ "--d": "150ms" } as React.CSSProperties}>
            {media}
          </div>
        )}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
  warm = false,
  light = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  center?: boolean;
  warm?: boolean;
  light?: boolean;
}) {
  return (
    <div data-reveal="up" className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={light ? "eyebrow !text-white/80" : warm ? "eyebrow-warm" : "eyebrow"}>{eyebrow}</p>
      <h2 className={`mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl ${light ? "text-white" : "text-ink"}`}>{title}</h2>
      {description && <p className={`mt-5 text-lg leading-8 ${light ? "text-white/80" : "text-muted"}`}>{description}</p>}
    </div>
  );
}

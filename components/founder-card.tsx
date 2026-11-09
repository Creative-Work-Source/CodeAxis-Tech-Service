import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Founder } from "@/data/portfolio";

const gradients = ["from-indigo-500 to-violet-500", "from-amber-400 to-rose-500", "from-cyan-400 to-indigo-500"];

export function FounderCard({ founder, index }: { founder: Founder; index: number }) {
  return (
    <div data-reveal="up" style={{ "--d": `${index * 120}ms` } as React.CSSProperties} className="card glow-border flex h-full flex-col overflow-hidden">
      <div className={`relative h-28 bg-gradient-to-br ${gradients[index % gradients.length]}`}>
        <div className="flash" aria-hidden />
      </div>
      <div className="relative z-10 -mt-12 flex flex-1 flex-col px-7 pb-7">
        {founder.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={founder.photo} alt={founder.name} className="h-24 w-24 rounded-3xl border-4 border-surface object-cover shadow-lift" />
        ) : (
          <span
            className={`flex h-24 w-24 items-center justify-center rounded-3xl border-4 border-surface bg-gradient-to-br ${
              gradients[index % gradients.length]
            } font-display text-3xl font-extrabold text-white shadow-lift`}
          >
            {founder.name
              .split(" ")
              .filter((p) => !p.endsWith("."))
              .map((p) => p[0])
              .join("")}
          </span>
        )}
        <h3 className="mt-5 text-2xl font-extrabold text-ink">{founder.name}</h3>
        <p className="mt-1 text-sm font-semibold text-indigo-600 dark:text-indigo-300">
          {founder.title} · {founder.focus}
        </p>
        <p className="mt-4 flex-1 text-sm leading-7 text-muted">{founder.bio}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {founder.expertise.map((e) => (
            <span key={e} className="chip">
              {e}
            </span>
          ))}
        </div>
        {founder.href && (
          <Link href={founder.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:gap-3 dark:text-indigo-300">
            View profile & portfolio <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  );
}

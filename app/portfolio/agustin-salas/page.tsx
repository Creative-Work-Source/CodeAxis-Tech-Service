import { Award } from "lucide-react";
import { ImageTile } from "@/components/arch-card";
import { Aurora } from "@/components/aurora";
import { CountUp } from "@/components/count-up";
import { Marquee } from "@/components/marquee";
import { SectionHeading } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { agustin, agustinCover, agustinProjects } from "@/data/agustin";

export const metadata = { title: `${agustin.name}, ${agustin.title} | CodeAxis` };

const spans = ["md:col-span-2 md:row-span-2", "md:row-span-2", "", "", "md:col-span-2", "", "md:row-span-2", ""];

export default function AgustinPage() {
  return (
    <PageShell>
      {/* Hero: copy left, portrait right */}
      <section className="relative -mt-[4.5rem] overflow-hidden pt-[4.5rem]">
        <Aurora warm />
        <div className="bg-grid absolute inset-0 opacity-60" aria-hidden />
        <div className="wrap relative grid items-center gap-14 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:py-24">
          <div data-reveal="left">
            <p className="eyebrow-warm">
              {agustin.title} · {agustin.focus}
            </p>
            <h1 className="mt-5 text-5xl font-extrabold leading-[1.02] text-ink sm:text-6xl xl:text-7xl">{agustin.name}</h1>
            <p className="text-gradient-warm mt-4 font-display text-2xl font-bold sm:text-3xl">{agustin.headline}</p>
            <blockquote className="mt-8 max-w-xl border-l-4 border-orange-400 pl-5 text-lg italic text-muted">“{agustin.quote}”</blockquote>
            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
              {agustin.stats.map((s) => (
                <div key={s.label} className="card px-5 py-5">
                  <CountUp value={s.value} className="text-gradient-warm font-display text-3xl font-extrabold" />
                  <p className="mt-1 text-xs leading-5 text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div data-reveal="right" className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-5 animate-spin-slow rounded-[3rem] bg-[conic-gradient(from_0deg,#f59e0b,#f43f5e,#8b5cf6,#06b6d4,#f59e0b)] opacity-60 blur-2xl" aria-hidden />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={agustin.photo} alt={agustin.name} className="relative aspect-[4/5] w-full rounded-[2.5rem] object-cover object-top shadow-lift" />
          </div>
        </div>
      </section>

      <div className="border-y border-line bg-surface/70 py-6">
        <Marquee
          items={agustin.specialties.map((s) => (
            <span key={s} className="px-6 font-display text-2xl font-extrabold text-ink/70">
              {s} <span className="ml-6 text-orange-400">✦</span>
            </span>
          ))}
        />
      </div>

      {/* Bio left, facts right */}
      <section className="wrap grid gap-12 py-24 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-6">
          {agustin.bio.map((p, i) => (
            <p key={p.slice(0, 24)} data-reveal="up" style={{ "--d": `${i * 100}ms` } as React.CSSProperties} className={`leading-8 text-muted ${i === 0 ? "text-xl text-ink" : "text-lg"}`}>
              {p}
            </p>
          ))}
        </div>
        <aside className="space-y-5">
          <div className="card p-7" data-reveal="right">
            <p className="eyebrow-warm">Design technology</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {agustin.skills.map((s) => (
                <span key={s} className="rounded-full bg-gradient-to-r from-amber-400 to-rose-500 px-3 py-1 text-xs font-semibold text-white">
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {agustin.tools.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="card p-7" data-reveal="right" style={{ "--d": "120ms" } as React.CSSProperties}>
            <p className="eyebrow-warm">Recognition</p>
            <ul className="mt-5 space-y-4">
              {agustin.recognition.map((r) => (
                <li key={r} className="flex gap-3 text-sm text-ink">
                  <Award className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      {/* Work bento */}
      <section className="relative overflow-hidden border-t border-line bg-surface py-24">
        <Aurora warm className="opacity-40" />
        <div className="wrap relative">
          <SectionHeading
            warm
            eyebrow="Selected work"
            title="Towers, districts and regenerative concepts."
            description="Projects Agustin designed before co-founding CodeAxis. Most were delivered as Lead Project Designer at Stantec; each project page states how it is credited."
          />
          <div className="mt-12 grid auto-rows-[250px] grid-flow-dense gap-5 md:grid-cols-4">
            {agustinProjects.map((p, i) => (
              <div key={p.slug} data-reveal="zoom" style={{ "--d": `${(i % 4) * 80}ms` } as React.CSSProperties} className={`min-h-[250px] ${spans[i % spans.length]}`}>
                <ImageTile
                  href={`/portfolio/agustin-salas/${p.slug}`}
                  image={agustinCover(p)}
                  title={p.title}
                  kicker={p.location}
                  badge={p.credit.startsWith("Designed while at Stantec") ? "Stantec" : p.credit.split(" · ")[0]}
                  large={i === 0}
                  className="h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

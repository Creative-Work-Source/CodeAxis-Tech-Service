import Link from "next/link";
import { ArrowRight, ArrowUpRight, Bot, Boxes, Building2, Cloud, HardHat, Layers, Server, Sofa } from "lucide-react";
import { Aurora } from "@/components/aurora";
import { Marquee } from "@/components/marquee";
import { DashboardMock } from "@/components/mockups";
import { PageHero, SectionHeading } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { disciplines } from "@/data/architecture";
import { processSteps, services, stackGroups } from "@/data/portfolio";

export const metadata = { title: "Services | CodeAxis" };

const softwareIcons = [Bot, Layers, Server, Cloud];
const archIcons = [Building2, Boxes, HardHat, Sofa];

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Software, architecture <span className="text-gradient">and engineering.</span>
          </>
        }
        description="Two practices under one roof: software and AI engineering, and architecture, BIM and civil engineering. Here is what each delivers and the tools our teams work in."
        media={
          <div className="relative h-[460px] sm:h-[520px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/agustin/the-living-nexus/01.jpg" alt="" className="absolute right-0 top-0 h-[78%] w-[78%] rounded-[2rem] object-cover shadow-lift" />
            <DashboardMock className="absolute bottom-0 left-0 w-[62%] animate-float" />
          </div>
        }
      >
        <a href="#software" className="btn-primary">
          Software practice
        </a>
        <a href="#architecture" className="btn-warm">
          Architecture practice
        </a>
      </PageHero>

      {/* Software: sticky heading left, rows right */}
      <section id="software" className="wrap scroll-mt-24 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.6fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading eyebrow="Practice 01 · Software" title="Capabilities across the full product lifecycle." />
            <Link href="/projects" className="btn-ghost mt-8">
              See software work <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="divide-y divide-line border-y border-line">
            {services.map((s, i) => {
              const Icon = softwareIcons[i];
              return (
                <div key={s.title} data-reveal="right" style={{ "--d": `${i * 90}ms` } as React.CSSProperties} className="group grid gap-6 py-9 sm:grid-cols-[auto_1fr_auto] sm:items-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow-lift transition duration-500 group-hover:rotate-6 group-hover:scale-105">
                    <Icon className="h-7 w-7" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-extrabold text-ink">{s.title}</h3>
                    <p className="mt-2 text-muted">{s.summary}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {s.items.map((it) => (
                        <span key={it} className="chip">
                          {it}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="hidden font-display text-5xl font-extrabold text-line transition group-hover:text-indigo-300 sm:block">0{i + 1}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Architecture: image left, staircase cards right on a warm band */}
      <section id="architecture" className="relative scroll-mt-24 overflow-hidden bg-surface py-24">
        <Aurora warm />
        <div className="wrap relative grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <div data-reveal="left" className="relative lg:sticky lg:top-28">
            <SectionHeading warm eyebrow="Practice 02 · Architecture & engineering" title="From concept design to construction set." />
            <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lift">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/architecture/bim-3d-floor-plans/01.jpg" alt="BIM 3D floor plan" className="kenburns h-full w-full object-cover" />
              <div className="flash" aria-hidden />
            </div>
            <Link href="/architecture" className="btn-warm mt-8">
              Architecture portfolio <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {disciplines.map((d, i) => {
              const Icon = archIcons[i];
              return (
                <div key={d.title} data-reveal="up" style={{ "--d": `${i * 120}ms` } as React.CSSProperties} className={`card p-7 ${i % 2 === 1 ? "sm:mt-16" : ""}`}>
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-rose-500 text-white shadow-lift">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-extrabold text-ink">{d.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{d.summary}</p>
                  <ul className="mt-5 space-y-2.5">
                    {d.items.map((it) => (
                      <li key={it} className="flex items-center gap-2.5 text-sm text-ink">
                        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-amber-400 to-rose-500" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process: horizontal timeline */}
      <section className="wrap py-24">
        <SectionHeading center eyebrow="Engagement" title="How every project runs." />
        <ol className="relative mt-16 grid gap-8 md:grid-cols-4">
          <span className="absolute left-0 right-0 top-8 hidden h-0.5 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-500 md:block" aria-hidden />
          {processSteps.map((p, i) => (
            <li key={p.step} data-reveal="up" style={{ "--d": `${i * 120}ms` } as React.CSSProperties} className="relative">
              <span className="relative flex h-16 w-16 items-center justify-center rounded-full border-4 border-canvas bg-gradient-to-br from-indigo-500 to-fuchsia-500 font-display text-lg font-extrabold text-white shadow-lift">
                {p.step}
              </span>
              <h3 className="mt-5 text-xl font-bold text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{p.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Stack: one ticker per group */}
      <section className="border-t border-line bg-surface-2/50 py-20">
        <div className="wrap">
          <SectionHeading eyebrow="Stack & tools" title="Languages, frameworks, infrastructure and design tools." />
        </div>
        <div className="mt-12 space-y-4">
          {stackGroups.map((g, i) => (
            <div key={g.title} className="flex items-center gap-4">
              <p className="hidden w-64 shrink-0 pl-16 text-sm font-bold text-ink lg:block">{g.title}</p>
              <Marquee
                reverse={i % 2 === 1}
                className="flex-1"
                items={[...g.items, ...g.items].map((t, k) => (
                  <span key={`${t}-${k}`} className="chip !px-5 !py-2 !text-sm !text-ink">
                    {t}
                  </span>
                ))}
              />
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

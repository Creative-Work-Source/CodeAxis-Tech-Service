import Link from "next/link";
import { ArrowRight, ArrowUpRight, Bot, Boxes, Building2, Cloud, HardHat, Layers, Server, Sofa, Sparkles } from "lucide-react";
import { ImageTile } from "@/components/arch-card";
import { Aurora } from "@/components/aurora";
import { CountUp } from "@/components/count-up";
import { HeroSlideshow } from "@/components/hero-slideshow";
import { Marquee } from "@/components/marquee";
import { DashboardMock } from "@/components/mockups";
import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/page-hero";
import { ProjectRow } from "@/components/project-card";
import { FounderCard } from "@/components/founder-card";
import { archCover, archProjects, disciplines } from "@/data/architecture";
import { agustinCover, agustinProjects } from "@/data/agustin";
import { featuredClients, founders, processSteps, projects, services, stackGroups, stats } from "@/data/portfolio";

const heroSlides = [
  { src: "/agustin/regenerative-concepts/03.jpg", caption: "Miami River vertical forest · design concept" },
  { src: "/agustin/the-living-nexus/02.jpg", caption: "The Living Nexus, Kuala Lumpur · design concept" },
  { src: "/architecture/oceanfront-residential-tower/05.jpg", caption: "Oceanfront Residential Tower" },
  { src: "/agustin/reflective-horizons/01.jpg", caption: "Reflective Horizons, Shanghai · design concept" },
  { src: "/architecture/mixed-use-commercial/01.jpg", caption: "Mixed-use & commercial development" },
];

const softwareIcons = [Bot, Layers, Server, Cloud];
const archIcons = [Building2, Boxes, HardHat, Sofa];

export default function HomePage() {
  const rail = [
    ...archProjects.slice(0, 4).map((p) => ({ href: `/architecture/${p.slug}`, image: archCover(p), title: p.title, kicker: p.category })),
    ...agustinProjects
      .filter((p) => !p.credit.startsWith("Designed while"))
      .map((p) => ({ href: `/portfolio/agustin-salas/${p.slug}`, image: agustinCover(p), title: p.title, kicker: "Agustin Salas · concept" })),
    ...archProjects.slice(4).map((p) => ({ href: `/architecture/${p.slug}`, image: archCover(p), title: p.title, kicker: p.category })),
  ];

  return (
    <PageShell>
      {/* ---------- Hero: copy left, cinematic slideshow + floating UI right ---------- */}
      <section className="relative -mt-[4.5rem] overflow-hidden pt-[4.5rem]">
        <Aurora />
        <div className="bg-grid absolute inset-0 opacity-70" aria-hidden />
        <div className="wrap relative grid min-h-[min(calc(100vh-4.5rem),920px)] items-center gap-14 py-14 lg:grid-cols-[1fr_1.15fr] lg:py-10">
          <div data-reveal="left">
            <span className="chip !bg-surface !py-1.5 shadow-soft">
              <Sparkles className="h-3.5 w-3.5 text-fuchsia-500" /> Software · Architecture · BIM · Civil engineering
            </span>
            <h1 className="mt-7 text-5xl font-extrabold leading-[1.02] text-ink sm:text-6xl xl:text-[5.5rem]">
              We engineer <span className="text-gradient">software</span> and the <span className="text-gradient-warm">buildings</span> it lives in.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted">
              CodeAxis builds high-performance platforms, SaaS products and AI systems, and designs, models and engineers residential, mixed-use and
              commercial buildings. One accountable team, from first sketch to production and construction.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Start a project <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href="/projects" className="btn-ghost">
                Software work
              </Link>
              <Link href="/architecture" className="btn-ghost">
                Architecture portfolio
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/agustin/profile.jpg" alt="" className="h-11 w-11 rounded-full border-2 border-surface object-cover" />
                <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-surface bg-gradient-to-br from-indigo-500 to-violet-500 text-xs font-bold text-white">
                  FZ
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-surface bg-gradient-to-br from-amber-400 to-rose-500 text-xs font-bold text-white">
                  DN
                </span>
              </div>
              <p className="text-sm leading-6 text-muted">
                <span className="font-semibold text-ink">Founder-led</span> by three co-founders
                <br />
                across software and the built environment
              </p>
            </div>
          </div>

          <div data-reveal="right" className="relative lg:pl-6" style={{ "--d": "150ms" } as React.CSSProperties}>
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-tr from-indigo-400/30 via-fuchsia-400/20 to-amber-300/30 blur-2xl" aria-hidden />
            <HeroSlideshow slides={heroSlides} className="relative aspect-[4/3.6] rounded-[2.25rem] shadow-lift ring-1 ring-white/40 lg:aspect-[4/4.3]" />
            <DashboardMock className="absolute -bottom-10 -left-4 hidden w-[58%] animate-float sm:block lg:-left-10" />
            <div className="absolute -right-3 top-8 hidden animate-float-late rounded-2xl border border-line bg-surface/90 px-4 py-3 shadow-lift backdrop-blur md:block">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-faint">BIM model</p>
              <p className="mt-1 text-sm font-bold text-ink">Revit · Navisworks · Civil 3D</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Client + capability tickers ---------- */}
      <section className="border-y border-line bg-surface/60 py-10 backdrop-blur">
        <p className="wrap text-center text-xs font-semibold uppercase tracking-[0.22em] text-faint">Trusted by teams behind</p>
        <Marquee
          className="mt-6"
          items={featuredClients.map((c) => (
            <a
              key={c.name}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-baseline gap-3 rounded-2xl px-6 py-2 transition hover:bg-surface-2"
            >
              <span className="font-display text-3xl font-extrabold tracking-tight text-ink/80 sm:text-4xl">{c.name}</span>
              <span className="text-xs uppercase tracking-[0.14em] text-faint">{c.sector}</span>
            </a>
          ))}
        />
        <Marquee
          reverse
          className="mt-5"
          items={stackGroups
            .flatMap((g) => g.items)
            .map((t) => (
              <span key={t} className="chip !px-4 !py-1.5 !text-sm">
                {t}
              </span>
            ))}
        />
      </section>

      {/* ---------- Two practices, edge to edge, left | right ---------- */}
      <section className="grid lg:grid-cols-2">
        <Link href="/services#software" className="group relative flex min-h-[560px] flex-col justify-between overflow-hidden bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 p-8 text-white sm:p-14">
          <Aurora className="opacity-60 mix-blend-screen" />
          <div className="relative" data-reveal="left">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/75">Practice 01</p>
            <h2 className="mt-4 max-w-md text-4xl font-extrabold leading-tight sm:text-5xl">Software, AI & cloud engineering</h2>
            <p className="mt-4 max-w-md text-white/80">SaaS platforms, AI agents, scalable APIs and the infrastructure to run them, delivered by senior engineers.</p>
          </div>
          <div className="relative mt-10 flex items-end justify-between gap-6">
            <DashboardMock className="w-full max-w-md transition duration-700 group-hover:-translate-y-2 group-hover:rotate-[-1deg]" />
            <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-indigo-700 transition group-hover:scale-110 sm:flex">
              <ArrowUpRight className="h-6 w-6" />
            </span>
          </div>
        </Link>
        <Link href="/architecture" className="group relative flex min-h-[560px] flex-col justify-between overflow-hidden p-8 text-white sm:p-14">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/agustin/regenerative-concepts/05.jpg" alt="" className="slow-zoom absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600/85 via-rose-500/55 to-transparent" />
          <div className="flash" aria-hidden />
          <div className="relative" data-reveal="right">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">Practice 02</p>
            <h2 className="mt-4 max-w-md text-4xl font-extrabold leading-tight sm:text-5xl">Architecture, BIM & civil engineering</h2>
            <p className="mt-4 max-w-md text-white/85">Concept design, coordinated BIM models, site and civil engineering, and construction-ready drawing sets.</p>
          </div>
          <div className="relative mt-10 flex flex-wrap items-end justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {disciplines.map((d) => (
                <span key={d.title} className="rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium backdrop-blur">
                  {d.title}
                </span>
              ))}
            </div>
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-orange-600 transition group-hover:scale-110">
              <ArrowUpRight className="h-6 w-6" />
            </span>
          </div>
        </Link>
      </section>

      {/* ---------- Stats on an aurora band ---------- */}
      <section className="relative overflow-hidden border-b border-line bg-surface py-20">
        <Aurora ribbon />
        <div className="wrap relative grid grid-cols-2 gap-y-12 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              data-reveal="up"
              style={{ "--d": `${i * 100}ms` } as React.CSSProperties}
              className={`px-4 text-center lg:border-l lg:border-line lg:first:border-l-0 ${i % 2 === 1 ? "border-l border-line lg:border-l" : ""}`}
            >
              <CountUp value={s.value} className="text-gradient font-display text-5xl font-extrabold sm:text-6xl" />
              <p className="mx-auto mt-3 max-w-[14rem] text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Services: sticky heading left, bento right ---------- */}
      <section id="services" className="wrap py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="What we do"
              title={
                <>
                  Eight disciplines, <span className="text-gradient">one partner.</span>
                </>
              }
              description="Software and built-environment teams under one roof, so platforms, buildings and the data between them are designed together."
            />
            <Link href="/services" className="btn-ghost mt-8">
              All services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid auto-rows-[minmax(220px,auto)] gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((s, i) => {
              const Icon = softwareIcons[i];
              return (
                <div
                  key={s.title}
                  data-reveal="up"
                  style={{ "--d": `${i * 80}ms` } as React.CSSProperties}
                  className={`card glow-border group p-7 transition duration-500 hover:-translate-y-1 hover:shadow-lift ${i === 0 ? "xl:col-span-2" : ""}`}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-md">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{s.summary}</p>
                  <p className="mt-4 text-xs leading-6 text-faint">{s.items.join(" · ")}</p>
                </div>
              );
            })}
            <Link
              href="/architecture"
              data-reveal="zoom"
              className="group relative row-span-2 overflow-hidden rounded-3xl shadow-soft sm:col-span-2 xl:col-span-1"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/agustin/1111-brickell-bay/02.jpg" alt="" className="slow-zoom absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">Built environment</p>
                <p className="mt-2 text-2xl font-extrabold">From massing study to construction set</p>
              </div>
            </Link>
            {disciplines.map((d, i) => {
              const Icon = archIcons[i];
              return (
                <div
                  key={d.title}
                  data-reveal="up"
                  style={{ "--d": `${i * 80}ms` } as React.CSSProperties}
                  className={`card group p-7 transition duration-500 hover:-translate-y-1 hover:shadow-lift ${i === 3 ? "xl:col-span-2" : ""}`}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-rose-500 text-white shadow-md">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-ink">{d.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{d.summary}</p>
                  <p className="mt-4 text-xs leading-6 text-faint">{d.items.join(" · ")}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- Process: staircase ---------- */}
      <section className="relative overflow-hidden bg-surface-2/60 py-24 lg:py-32">
        <Aurora className="opacity-40" />
        <div className="wrap relative">
          <SectionHeading center eyebrow="How we deliver" title="A delivery process that climbs, step by step." />
          <div className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <svg className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block" preserveAspectRatio="none" viewBox="0 0 100 100" aria-hidden>
              <path d="M2 92 L98 8" stroke="url(#stair)" strokeWidth="0.4" strokeDasharray="1.5 1.5" fill="none" vectorEffect="non-scaling-stroke" />
              <defs>
                <linearGradient id="stair" x1="0" x2="1">
                  <stop offset="0" stopColor="#6366f1" />
                  <stop offset="1" stopColor="#f97316" />
                </linearGradient>
              </defs>
            </svg>
            {processSteps.map((step, i) => (
              <div
                key={step.step}
                data-reveal="up"
                style={{ "--d": `${i * 140}ms` } as React.CSSProperties}
                className={`card glow-border relative p-7 ${["lg:mt-48", "lg:mt-32", "lg:mt-16", "lg:mt-0"][i]}`}
              >
                <span className="text-gradient font-display text-6xl font-extrabold">{step.step}</span>
                <h3 className="mt-4 text-xl font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Architecture rail: left-to-right scroll ---------- */}
      <section className="py-24 lg:py-32">
        <div className="wrap flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            warm
            eyebrow="Architecture · BIM · Civil"
            title={
              <>
                Designing the <span className="text-gradient-warm">built world</span>, too.
              </>
            }
            description="Towers, homes, interiors and construction documentation from our architecture and engineering practice. Scroll sideways to explore."
          />
          <Link href="/architecture" className="btn-warm">
            Full portfolio <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:px-8 lg:px-12 xl:px-16">
          {rail.map((r, i) => (
            <ImageTile
              key={r.href}
              {...r}
              large={i % 3 === 0}
              className={`shrink-0 snap-start ${i % 3 === 0 ? "h-[520px] w-[85vw] sm:w-[560px]" : "h-[520px] w-[75vw] sm:w-[380px]"}`}
            />
          ))}
        </div>
      </section>

      {/* ---------- Software work: zigzag ---------- */}
      <section className="relative overflow-hidden border-t border-line bg-surface py-24 lg:py-32">
        <Aurora className="opacity-40" />
        <div className="wrap relative">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Featured software work" title="Case studies with outcomes you can measure." />
            <Link href="/projects" className="btn-ghost">
              All software work <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-16 space-y-24">
            {projects.slice(0, 2).map((p, i) => (
              <ProjectRow key={p.slug} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Leadership: staggered ---------- */}
      <section className="wrap py-24 lg:py-32">
        <SectionHeading center eyebrow="Leadership" title="Three co-founders, two practices, one team." />
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {founders.map((f, i) => (
            <div key={f.name} className={i === 1 ? "lg:mt-16" : i === 2 ? "lg:mt-32" : ""}>
              <FounderCard founder={f} index={i} />
            </div>
          ))}
        </div>
      </section>

      {/* ---------- CTA band ---------- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 py-24 text-white lg:py-32">
        <Aurora ribbon className="mix-blend-screen" />
        <div className="grain absolute inset-0" aria-hidden />
        <div className="wrap relative grid items-center gap-10 lg:grid-cols-[1.5fr_1fr]">
          <h2 data-reveal="left" className="text-4xl font-extrabold leading-tight sm:text-5xl xl:text-6xl">
            Have a platform to build, or a building to design?
          </h2>
          <div data-reveal="right" className="lg:justify-self-end">
            <p className="max-w-md text-lg text-white/85">Send us a short brief. The right co-founder replies within one business day with a plan.</p>
            <Link
              href="/contact"
              className="shine relative mt-7 inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-7 py-3.5 text-sm font-bold text-indigo-700 shadow-xl transition hover:-translate-y-0.5"
            >
              Talk to CodeAxis <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

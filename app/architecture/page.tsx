import Link from "next/link";
import { ArrowRight, Boxes, Building2, HardHat, Sofa } from "lucide-react";
import { ImageTile } from "@/components/arch-card";
import { Aurora } from "@/components/aurora";
import { HeroSlideshow } from "@/components/hero-slideshow";
import { Marquee } from "@/components/marquee";
import { PageHero, SectionHeading } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { aecTools, archCover, archProjects, disciplines } from "@/data/architecture";
import { agustin, agustinCover, agustinProjects } from "@/data/agustin";

const icons = [Building2, Boxes, HardHat, Sofa];

export const metadata = { title: "Architecture & Engineering | CodeAxis" };

/** Bento spans for the portfolio grid, cycling so the layout never looks uniform. */
const spans = [
  "md:col-span-2 md:row-span-2",
  "",
  "",
  "md:row-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:row-span-2",
  "md:col-span-2",
];

export default function ArchitecturePage() {
  return (
    <PageShell>
      <PageHero
        warm
        eyebrow="Architecture · BIM · Civil engineering"
        title={
          <>
            Buildings designed, modelled and <span className="text-gradient-warm">engineered to be built.</span>
          </>
        }
        description="Led by co-founders David Nguyen and Agustin Salas, our architecture and engineering practice takes residential, mixed-use and commercial projects from first massing study through coordinated BIM models to permit and construction drawings."
        media={
          <HeroSlideshow
            className="aspect-[4/3.4] rounded-[2.25rem] shadow-lift"
            slides={archProjects.slice(0, 5).map((p) => ({ src: archCover(p), caption: p.title }))}
          />
        }
      >
        <a href="#portfolio" className="btn-warm">
          View portfolio <ArrowRight className="h-4 w-4" />
        </a>
        <Link href="/portfolio/agustin-salas" className="btn-ghost">
          Meet Agustin Salas
        </Link>
      </PageHero>

      <div className="border-y border-line bg-surface/70 py-6">
        <Marquee
          items={aecTools.map((t) => (
            <span key={t} className="px-6 font-display text-2xl font-extrabold text-ink/70">
              {t} <span className="ml-6 text-orange-400">✦</span>
            </span>
          ))}
        />
      </div>

      {/* Disciplines as a rising staircase */}
      <section className="wrap py-24">
        <SectionHeading warm eyebrow="Disciplines" title="Four disciplines that take a building from idea to site." />
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {disciplines.map((d, i) => {
            const Icon = icons[i];
            return (
              <div
                key={d.title}
                data-reveal="up"
                style={{ "--d": `${i * 120}ms` } as React.CSSProperties}
                className={`card group relative overflow-hidden p-7 ${["xl:mt-36", "xl:mt-24", "xl:mt-12", ""][i]}`}
              >
                <span className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-gradient-to-br from-amber-300/40 to-rose-400/30 blur-2xl transition duration-700 group-hover:scale-150" />
                <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-rose-500 text-white shadow-lift">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="relative mt-5 text-xl font-extrabold text-ink">{d.title}</h3>
                <p className="relative mt-2 text-sm leading-6 text-muted">{d.summary}</p>
                <ul className="relative mt-5 space-y-2">
                  {d.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-ink">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Design leadership: full-bleed split */}
      <section className="grid overflow-hidden lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-[480px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={agustin.photo} alt={agustin.name} className="absolute inset-0 h-full w-full object-cover object-top grayscale" />
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/40 via-transparent to-transparent mix-blend-multiply" />
        </div>
        <div className="relative overflow-hidden bg-surface p-8 sm:p-14 lg:p-20">
          <Aurora warm className="opacity-60" />
          <div className="relative" data-reveal="right">
            <p className="eyebrow-warm">Design leadership</p>
            <h2 className="mt-4 text-4xl font-extrabold text-ink sm:text-5xl">{agustin.name}</h2>
            <p className="mt-2 font-semibold text-orange-600 dark:text-amber-300">
              {agustin.title} · {agustin.focus}
            </p>
            <p className="mt-6 max-w-2xl leading-8 text-muted">{agustin.bio[0]}</p>
            <div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-6">
              {agustinProjects.slice(0, 6).map((p) => (
                <Link key={p.slug} href={`/portfolio/agustin-salas/${p.slug}`} className="group overflow-hidden rounded-2xl" title={p.title}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={agustinCover(p)} alt={p.title} loading="lazy" className="slow-zoom aspect-square w-full object-cover" />
                </Link>
              ))}
            </div>
            <Link href="/portfolio/agustin-salas" className="btn-warm mt-8">
              View {agustinProjects.length} projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio bento */}
      <section id="portfolio" className="wrap scroll-mt-24 py-24">
        <SectionHeading warm eyebrow="Portfolio" title="Selected architecture and engineering projects." />
        <div className="mt-12 grid auto-rows-[260px] grid-flow-dense gap-5 md:grid-cols-4">
          {archProjects.map((p, i) => (
            <div key={p.slug} data-reveal="zoom" style={{ "--d": `${(i % 4) * 80}ms` } as React.CSSProperties} className={`min-h-[260px] ${spans[i % spans.length]}`}>
              <ImageTile
                href={`/architecture/${p.slug}`}
                image={archCover(p)}
                title={p.title}
                kicker={p.sector}
                badge={p.category}
                large={i === 0}
                className="h-full"
              />
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

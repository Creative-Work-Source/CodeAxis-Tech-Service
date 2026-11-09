import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Aurora } from "@/components/aurora";
import { FounderCard } from "@/components/founder-card";
import { DashboardMock, ProjectVisual } from "@/components/mockups";
import { PageHero, SectionHeading } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { experienceItems, experiencePageIntro, founders, projects } from "@/data/portfolio";

export const metadata = { title: "Company | CodeAxis" };

const visuals = [
  <DashboardMock key="sw" className="w-full" />,
  // eslint-disable-next-line @next/next/no-img-element
  <img key="arch" src="/agustin/acqua-towers/01.jpg" alt="" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lift" />,
  <ProjectVisual key="web" domain="onbuy.com" index={3} className="aspect-[4/3] shadow-lift" />,
];

export default function ExperiencePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Company"
        title={
          <>
            Two practices, <span className="text-gradient">one accountable team.</span>
          </>
        }
        description={experiencePageIntro}
      >
        <Link href="/contact" className="btn-primary">
          Work with us <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      {/* Practice areas: zigzag */}
      <section className="wrap space-y-24 py-20">
        {experienceItems.map((item, i) => {
          const flip = i % 2 === 1;
          return (
            <article key={item.role} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
              <div data-reveal={flip ? "right" : "left"} className={flip ? "lg:order-2" : ""}>
                {visuals[i % visuals.length]}
              </div>
              <div data-reveal={flip ? "left" : "right"}>
                <span className="chip">{item.period}</span>
                <h2 className="mt-5 text-3xl font-extrabold text-ink sm:text-4xl">{item.role}</h2>
                <p className="mt-2 font-semibold text-indigo-600 dark:text-indigo-300">{item.company}</p>
                <p className="mt-5 leading-8 text-muted">{item.summary}</p>
                <ul className="mt-6 space-y-3">
                  {item.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm leading-7 text-ink">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white">
                        <Check className="h-3 w-3" />
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </section>

      <section className="relative overflow-hidden border-y border-line bg-surface py-24">
        <Aurora className="opacity-50" />
        <div className="wrap relative">
          <SectionHeading center eyebrow="Leadership" title="The people accountable for your project." />
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {founders.map((f, i) => (
              <div key={f.name} className={i === 1 ? "lg:mt-16" : i === 2 ? "lg:mt-32" : ""}>
                <FounderCard founder={f} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Case studies" title="Representative engagements." />
          <div className="flex gap-3">
            <Link href="/projects" className="btn-primary">
              Software work
            </Link>
            <Link href="/architecture" className="btn-warm">
              Architecture
            </Link>
          </div>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              data-reveal="up"
              style={{ "--d": `${(i % 2) * 120}ms` } as React.CSSProperties}
              className="card glow-border group flex items-start justify-between gap-6 p-7 transition hover:-translate-y-1 hover:shadow-lift"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-faint">{p.stack.join(" · ")}</p>
                <h3 className="mt-3 text-xl font-extrabold text-ink">{p.title}</h3>
                <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted">{p.summary}</p>
              </div>
              <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-indigo-500 transition group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

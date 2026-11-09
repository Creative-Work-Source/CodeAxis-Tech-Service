import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CaseHero } from "@/components/case-hero";
import { Gallery } from "@/components/gallery";
import { PageShell } from "@/components/page-shell";
import { archCover, archImages, archProjects } from "@/data/architecture";

export function generateStaticParams() {
  return archProjects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = archProjects.find((p) => p.slug === params.slug);
  return { title: project ? `${project.title} | CodeAxis` : "CodeAxis" };
}

export default function ArchProjectPage({ params }: { params: { slug: string } }) {
  const i = archProjects.findIndex((p) => p.slug === params.slug);
  if (i === -1) notFound();
  const project = archProjects[i];
  const next = archProjects[(i + 1) % archProjects.length];
  const story = [
    { heading: "The brief", text: project.challenge },
    { heading: "Our approach", text: project.approach },
    { heading: "Outcome", text: project.outcome },
  ];

  return (
    <PageShell>
      <CaseHero image={archCover(project)} kicker={`${project.category} · ${project.sector}`} title={project.title} />

      <section className="wrap grid gap-12 py-20 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <p data-reveal="up" className="text-2xl font-semibold leading-relaxed text-ink">
            {project.summary}
          </p>
          <div className="mt-12 space-y-6">
            {story.map((s, k) => (
              <div
                key={s.heading}
                data-reveal="left"
                style={{ "--d": `${k * 120}ms` } as React.CSSProperties}
                className={`card p-8 ${["", "lg:ml-12", "lg:ml-24"][k]}`}
              >
                <h2 className="text-gradient-warm text-sm font-extrabold uppercase tracking-[0.16em]">{s.heading}</h2>
                <p className="mt-4 leading-8 text-muted">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <div className="card p-7">
            <p className="eyebrow-warm">Scope</p>
            <ul className="mt-5 space-y-3">
              {project.scope.map((s) => (
                <li key={s} className="flex items-center gap-3 text-sm text-ink">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-r from-amber-400 to-rose-500" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-7">
            <p className="eyebrow-warm">Tools</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tools.map((t) => (
                <span key={t} className="chip !text-ink">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500 p-7 text-white shadow-lift">
            <div className="flash" aria-hidden />
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/80">Practice lead</p>
            <p className="mt-2 text-lg font-bold">David Nguyen, Co-founder</p>
          </div>
        </aside>
      </section>

      <section className="wrap pb-16">
        <h2 className="mb-8 text-3xl font-extrabold text-ink">Project gallery</h2>
        <Gallery images={archImages(project)} title={project.title} />
      </section>

      <section className="wrap flex flex-wrap justify-between gap-4 pb-24">
        <Link href="/architecture#portfolio" className="btn-ghost">
          <ArrowLeft className="h-4 w-4" /> All projects
        </Link>
        <Link href={`/architecture/${next.slug}`} className="btn-warm">
          Next: {next.title} <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </PageShell>
  );
}

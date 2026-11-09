import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Aurora } from "@/components/aurora";
import { ProjectVisual } from "@/components/mockups";
import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { domainOf } from "@/components/project-card";
import { projects } from "@/data/portfolio";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = projects.find((x) => x.slug === params.slug);
  return { title: p ? `${p.title} | CodeAxis` : "CodeAxis" };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const i = projects.findIndex((item) => item.slug === params.slug);
  if (i === -1) notFound();
  const project = projects[i];
  const next = projects[(i + 1) % projects.length];
  const story = [
    { label: "01 · The problem", text: project.problem },
    { label: "02 · Our solution", text: project.solution },
    { label: "03 · Results", text: project.results },
  ].filter((s): s is { label: string; text: string } => Boolean(s.text));

  return (
    <PageShell>
      <PageHero
        eyebrow="Software case study"
        title={project.title}
        description={project.summary}
        media={<ProjectVisual domain={domainOf(project.website)} index={i} className="aspect-[16/12] shadow-lift" />}
      >
        {project.website && (
          <a href={project.website} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Visit {domainOf(project.website)} <ExternalLink className="h-4 w-4" />
          </a>
        )}
        <Link href="/projects" className="btn-ghost">
          <ArrowLeft className="h-4 w-4" /> All work
        </Link>
      </PageHero>

      {/* Facts band: left to right */}
      <section className="relative overflow-hidden border-y border-line bg-surface">
        <Aurora className="opacity-40" />
        <div className="wrap relative grid divide-y divide-line lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          <div className="py-8 lg:pr-10">
            <p className="eyebrow">Stack</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span key={s} className="chip !text-ink">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="py-8 lg:px-10">
            <p className="eyebrow">Impact</p>
            <p className="mt-4 text-sm leading-7 text-ink">{project.impact}</p>
          </div>
          <div className="py-8 lg:pl-10">
            <p className="eyebrow">Our role</p>
            <p className="mt-4 text-sm leading-7 text-ink">{project.role}</p>
          </div>
        </div>
      </section>

      {/* Story: stair-stepped columns */}
      <section className="wrap py-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {story.map((s, k) => (
            <article
              key={s.label}
              data-reveal="up"
              style={{ "--d": `${k * 140}ms` } as React.CSSProperties}
              className={`card glow-border p-8 ${["", "lg:mt-14", "lg:mt-28"][k]}`}
            >
              <p className="text-gradient font-display text-sm font-extrabold uppercase tracking-[0.16em]">{s.label}</p>
              <p className="mt-5 leading-8 text-muted">{s.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="wrap pb-24">
        <Link
          href={`/projects/${next.slug}`}
          className="group relative flex flex-col justify-between gap-6 overflow-hidden rounded-[2rem] bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 p-10 text-white sm:flex-row sm:items-center"
        >
          <Aurora ribbon className="mix-blend-screen" />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">Next case study</p>
            <p className="mt-2 text-2xl font-extrabold sm:text-3xl">{next.title}</p>
          </div>
          <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white text-indigo-700 transition group-hover:translate-x-2">
            <ArrowRight className="h-6 w-6" />
          </span>
        </Link>
      </section>
    </PageShell>
  );
}

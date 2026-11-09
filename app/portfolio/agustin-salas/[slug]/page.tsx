import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CaseHero } from "@/components/case-hero";
import { Gallery } from "@/components/gallery";
import { PageShell } from "@/components/page-shell";
import { agustin, agustinCover, agustinImages, agustinProjects } from "@/data/agustin";

export function generateStaticParams() {
  return agustinProjects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = agustinProjects.find((x) => x.slug === params.slug);
  return { title: p ? `${p.title} | ${agustin.name} | CodeAxis` : "CodeAxis" };
}

export default function AgustinProjectPage({ params }: { params: { slug: string } }) {
  const i = agustinProjects.findIndex((p) => p.slug === params.slug);
  if (i === -1) notFound();
  const project = agustinProjects[i];
  const next = agustinProjects[(i + 1) % agustinProjects.length];
  const facts = [
    ["Role", project.role],
    ["Credit", project.credit],
    ...(project.client ? [["Client", project.client]] : []),
  ];

  return (
    <PageShell>
      <CaseHero image={agustinCover(project)} kicker={project.location} title={project.title} />

      {/* Stats ribbon overlapping the hero */}
      <section className="wrap relative z-10 -mt-12">
        <div className="grid grid-cols-2 overflow-hidden rounded-3xl border border-line bg-surface shadow-lift md:grid-cols-4">
          {project.stats.map((s) => (
            <div key={s.label} className="border-b border-r border-line px-6 py-6 last:border-r-0 md:border-b-0">
              <p className="text-gradient-warm font-display text-3xl font-extrabold">{s.value}</p>
              <p className="mt-1 text-xs text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap grid gap-12 py-20 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <p data-reveal="up" className="text-2xl font-semibold leading-relaxed text-ink">
            {project.summary}
          </p>
          {project.body.map((p, k) => (
            <p key={p.slice(0, 24)} data-reveal="up" style={{ "--d": `${k * 100}ms` } as React.CSSProperties} className="mt-6 text-lg leading-8 text-muted">
              {p}
            </p>
          ))}
        </div>
        <aside className="space-y-4 lg:sticky lg:top-28 lg:self-start">
          {facts.map(([k, v]) => (
            <div key={k} className="card p-6">
              <p className="eyebrow-warm">{k}</p>
              <p className="mt-2 text-sm leading-6 text-ink">{v}</p>
            </div>
          ))}
          <Link href="/portfolio/agustin-salas" className="card glow-border flex items-center gap-4 p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={agustin.photo} alt="" className="h-14 w-14 rounded-2xl object-cover" />
            <div>
              <p className="text-sm font-bold text-ink">{agustin.name}</p>
              <p className="text-xs text-muted">
                {agustin.title}, {agustin.focus}
              </p>
            </div>
          </Link>
        </aside>
      </section>

      <section className="wrap pb-16">
        <h2 className="mb-8 text-3xl font-extrabold text-ink">Gallery</h2>
        <Gallery images={agustinImages(project)} title={project.title} />
      </section>

      <section className="wrap flex flex-wrap justify-between gap-4 pb-24">
        <Link href="/portfolio/agustin-salas" className="btn-ghost">
          <ArrowLeft className="h-4 w-4" /> All of Agustin&apos;s work
        </Link>
        <Link href={`/portfolio/agustin-salas/${next.slug}`} className="btn-warm">
          Next: {next.title} <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </PageShell>
  );
}

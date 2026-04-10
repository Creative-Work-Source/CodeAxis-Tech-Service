import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { PageShell } from "@/components/page-shell";
import { projects } from "@/data/portfolio";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) notFound();

  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:px-8 md:pt-28">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/7 backdrop-blur-xl">
          <div className="relative border-b border-white/10 px-8 py-14 md:px-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_35%)]" />
            <div className="relative max-w-4xl">
              <p className="text-sm uppercase tracking-[0.22em] text-cyan-200">Project Detail</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">{project.title}</h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{project.summary}</p>
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition hover:text-white"
                >
                  {project.website.replace(/^https?:\/\//, "")}
                  <ExternalLink className="h-4 w-4" aria-hidden />
                </a>
              )}
            </div>
          </div>

          <div className="grid gap-8 px-8 py-10 md:grid-cols-[1.5fr_0.9fr] md:px-12">
            <div>
              {project.website ? (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/45 px-6 py-20 text-center text-slate-400 transition hover:border-cyan-300/25 hover:text-slate-200"
                >
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-cyan-200/90 group-hover:text-cyan-100">
                    Open live site <ExternalLink className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="mt-2 block text-xs text-slate-500">Replace this block with a screenshot or product video when you have one.</span>
                </a>
              ) : (
                <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/45 px-6 py-20 text-center text-slate-400">
                  Replace this with a real screenshot, product video, or animated mockup.
                </div>
              )}

              {project.problem || project.solution || project.results ? (
                <div className="mt-8 space-y-8">
                  {project.problem && (
                    <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                      <h2 className="text-xl font-semibold text-white">Client &amp; the problem</h2>
                      <p className="mt-4 leading-8 text-slate-300">{project.problem}</p>
                    </div>
                  )}
                  {project.solution && (
                    <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                      <h2 className="text-xl font-semibold text-white">Solution</h2>
                      <p className="mt-4 leading-8 text-slate-300">{project.solution}</p>
                    </div>
                  )}
                  {project.results && (
                    <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                      <h2 className="text-xl font-semibold text-white">Results</h2>
                      <p className="mt-4 leading-8 text-slate-300">{project.results}</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                  <h2 className="text-2xl font-semibold text-white">Overview</h2>
                  <p className="mt-4 leading-8 text-slate-300">{project.description}</p>
                </div>
              )}
            </div>

            <aside className="space-y-6">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white">Stack</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{project.stack.join(" · ")}</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white">Impact</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{project.impact}</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white">Role</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{project.role}</p>
              </div>
              <Link href="/projects" className="inline-flex rounded-full border border-white/15 bg-white/6 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10">
                Back to projects
              </Link>
            </aside>
          </div>
        </div>
      </section>
      <Footer />
    </PageShell>
  );
}

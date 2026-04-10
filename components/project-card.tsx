import Link from "next/link";
import type { Project } from "@/data/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-[0_14px_50px_rgba(15,23,42,0.18)] backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:border-cyan-300/20 hover:bg-white/8 hover:shadow-[0_24px_70px_rgba(14,165,233,0.12)]">
      <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 px-4 py-16 text-center text-sm text-slate-400">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_45%)] opacity-80 transition duration-300 group-hover:scale-110" />
        <span className="relative">Project Preview</span>
      </div>
      <h3 className="mt-6 text-2xl font-semibold text-white">{project.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{project.summary}</p>
      <p className="mt-4 text-sm text-slate-400">{project.stack.join(" · ")}</p>
      <p className="mt-4 text-sm leading-7 text-slate-200">{project.impact}</p>
      <Link href={`/projects/${project.slug}`} className="mt-6 inline-flex text-sm font-medium text-cyan-200 underline underline-offset-4 transition duration-300 hover:text-white">
        View project page
      </Link>
    </article>
  );
}

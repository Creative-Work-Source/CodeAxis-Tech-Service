import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectVisual } from "@/components/mockups";
import type { Project } from "@/data/portfolio";

export function domainOf(url?: string) {
  if (!url) return undefined;
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

/** Zigzag row: visual and copy swap sides on every other project. */
export function ProjectRow({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1;
  return (
    <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
      <Link
        href={`/projects/${project.slug}`}
        data-reveal={flip ? "right" : "left"}
        className={`group block ${flip ? "lg:order-2" : ""}`}
        aria-label={project.title}
      >
        <div className="slow-zoom">
          <ProjectVisual domain={domainOf(project.website)} index={index} className="aspect-[16/11]" />
        </div>
      </Link>
      <div data-reveal={flip ? "left" : "right"} style={{ "--d": "120ms" } as React.CSSProperties}>
        <p className="font-display text-sm font-bold text-faint">0{index + 1}</p>
        <h3 className="mt-3 text-2xl font-extrabold leading-tight text-ink sm:text-3xl">{project.title}</h3>
        <p className="mt-4 leading-8 text-muted">{project.summary}</p>
        <div className="mt-5 rounded-2xl border border-line bg-surface-2/70 p-4 text-sm leading-7 text-ink">
          <span className="font-semibold text-indigo-600 dark:text-indigo-300">Impact · </span>
          {project.impact}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </div>
        <Link href={`/projects/${project.slug}`} className="btn-ghost mt-7">
          Read the case study <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

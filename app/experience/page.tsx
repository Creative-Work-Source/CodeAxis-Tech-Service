import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { SectionTitle } from "@/components/section-title";
import { experienceItems, experiencePageIntro, projects } from "@/data/portfolio";

export default function ExperiencePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Experience"
        title="Delivery track record, roles, and representative projects."
        description="A concise view of how I work with teams—plus case studies that map real outcomes to stack and responsibilities."
      />

      <section className="mx-auto max-w-6xl px-6 pb-12 md:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/6 p-8 shadow-[0_10px_50px_rgba(15,23,42,0.2)] backdrop-blur-xl md:p-10">
          <p className="max-w-3xl text-lg leading-8 text-slate-300">{experiencePageIntro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 md:px-8">
        <SectionTitle eyebrow="Roles" title="Where I’ve focused my energy over the years." />
        <div className="mt-10 space-y-6">
          {experienceItems.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className="rounded-[2rem] border border-white/10 bg-white/6 p-8 shadow-[0_10px_40px_rgba(15,23,42,0.18)] backdrop-blur-xl transition duration-300 hover:border-cyan-300/20 md:p-10"
            >
              <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-6 md:flex-row md:items-start">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-200">
                    <Briefcase className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-white md:text-2xl">{item.role}</h2>
                    <p className="mt-1 text-slate-300">{item.company}</p>
                  </div>
                </div>
                <p className="shrink-0 text-sm font-medium uppercase tracking-[0.14em] text-slate-500 md:text-right">{item.period}</p>
              </div>
              <p className="mt-6 text-base leading-7 text-slate-400">{item.summary}</p>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-300">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/80" aria-hidden />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-8">
        <SectionTitle eyebrow="Sample projects" title="Representative engagements with measurable scope." />
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
          Each card links to a full write-up: problem, approach, stack, and outcomes—aligned with the roles above.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group flex flex-col rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-8 shadow-[0_14px_50px_rgba(15,23,42,0.2)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:shadow-[0_24px_60px_rgba(14,165,233,0.12)]"
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-200/80">Case study</p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-white group-hover:text-cyan-100">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">{project.summary}</p>
              <p className="mt-4 text-xs text-slate-500">{project.stack.join(" · ")}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition group-hover:gap-3 group-hover:text-white">
                View project <ArrowRight className="h-4 w-4" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/6 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            All projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <Footer />
    </PageShell>
  );
}

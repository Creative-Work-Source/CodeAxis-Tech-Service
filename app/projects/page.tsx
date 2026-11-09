import { ExternalLink } from "lucide-react";
import { Aurora } from "@/components/aurora";
import { ProjectVisual } from "@/components/mockups";
import { PageHero, SectionHeading } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { ProjectRow } from "@/components/project-card";
import { clientLinks, projects, toLinkLabel } from "@/data/portfolio";

export const metadata = { title: "Software work | CodeAxis" };

const tileColors = [
  "hover:from-indigo-500 hover:to-violet-500",
  "hover:from-fuchsia-500 hover:to-rose-500",
  "hover:from-cyan-500 hover:to-sky-500",
  "hover:from-emerald-500 hover:to-teal-500",
  "hover:from-amber-500 hover:to-orange-500",
];

export default function ProjectsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Software work"
        title={
          <>
            Platforms we have <span className="text-gradient">engineered, shipped and scaled.</span>
          </>
        }
        description="From global consumer brands to venture-backed startups: live client platforms, followed by in-depth case studies covering the problem, our approach, the stack and the results."
        media={
          <div className="relative h-[440px] sm:h-[500px]">
            <ProjectVisual domain="bitvavo.com" index={0} className="absolute left-0 top-0 w-[82%] -rotate-2 shadow-lift" />
            <ProjectVisual domain="onbuy.com" index={1} className="absolute bottom-0 right-0 w-[72%] rotate-2 animate-float shadow-lift" />
          </div>
        }
      />

      <section className="relative overflow-hidden border-y border-line bg-surface py-20">
        <Aurora className="opacity-40" />
        <div className="wrap relative">
          <SectionHeading eyebrow="Client platforms" title="Live sites we have delivered for." description="Open any of them in a new tab." />
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {clientLinks.map((href, i) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                data-reveal="zoom"
                style={{ "--d": `${(i % 5) * 60}ms` } as React.CSSProperties}
                className={`group flex items-center justify-between gap-2 rounded-2xl border border-line bg-gradient-to-br from-surface to-surface-2 px-5 py-5 transition duration-500 hover:-translate-y-1 hover:border-transparent hover:shadow-lift ${tileColors[i % tileColors.length]}`}
              >
                <span className="truncate font-display text-base font-bold text-ink transition group-hover:text-white">{toLinkLabel(href)}</span>
                <ExternalLink className="h-4 w-4 shrink-0 text-faint transition group-hover:text-white" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap py-24">
        <SectionHeading eyebrow="Case studies" title="The problem, our approach, and what changed." />
        <div className="mt-16 space-y-28">
          {projects.map((p, i) => (
            <ProjectRow key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}

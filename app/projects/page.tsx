import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/portfolio";

export default function ProjectsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Projects"
        title="Selected work with room to grow into full case studies."
        description="Each project now lives on its own page, so you can expand your portfolio over time with deeper screenshots, architecture notes, and outcomes."
      />
      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
      <Footer />
    </PageShell>
  );
}

import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { ProjectCard } from "@/components/project-card";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/portfolio";

const preworks = [
  "https://localhomesmarket.com",
  "https://Kiteworks.com",
  "https://imgprep.com",
  "https://insolebuddy.com",
  "https://ppt-auto-fill-generator-1.onrender.com",
  "https://www.bitvavo.com",
  "https://www.reya.xyz",
  "https://www.bentley.com",
  "https://www.worcester-bosch.co.uk",
  "https://www.mccann.com",
  "https://www.twitch.tv/",
  "https://www.netflix.com/",
  "https://www.bbc.com/",
];

function toLinkLabel(href: string) {
  try {
    return new URL(href).hostname.replace(/^www\./, "");
  } catch {
    return href;
  }
}

export default function ProjectsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Projects"
        title="Selected work with room to grow into full case studies."
        description="Each project now lives on its own page, so you can expand your portfolio over time with deeper screenshots, architecture notes, and outcomes."
      />
      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-8">
        <div className="space-y-10">
          <div className="rounded-[2rem] border border-white/10 bg-white/6 px-8 py-8 shadow-[0_10px_50px_rgba(15,23,42,0.25)] backdrop-blur-xl">
            <h2 className="text-lg font-semibold text-white">Have a look at my work here</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {preworks.map((href) => {
                const label = toLinkLabel(href);
                return (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/6 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                  >
                    {label}
                    <ExternalLink className="h-4 w-4" aria-hidden />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </PageShell>
  );
}

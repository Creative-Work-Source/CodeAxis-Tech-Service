import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, Send, Sparkles } from "lucide-react";
import { Footer } from "@/components/footer";
import { PageShell } from "@/components/page-shell";
import { ProjectCard } from "@/components/project-card";
import { credibilityItems, projects, siteInfo, socialLinks } from "@/data/portfolio";

export default function HomePage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-6 pb-14 pt-20 md:px-8 md:pt-28">
        <div className="hero-panel relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 px-8 py-12 shadow-[0_20px_80px_rgba(2,8,23,0.45)] backdrop-blur-xl md:px-12 md:py-16">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-cyan-100">
              <Sparkles className="h-3.5 w-3.5" /> Full-Stack Engineer
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-7xl md:leading-[1.05]">
              Building scalable web platforms and SaaS products.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              I create high-performance applications with modern web technologies and integrate AI automation where it improves real-world workflows.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/projects" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_10px_30px_rgba(56,189,248,0.35)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(56,189,248,0.45)]">
                View Projects <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/6 px-5 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10">
                Contact Me
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-5 text-sm text-slate-300">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} className="inline-flex items-center gap-2 transition duration-300 hover:text-white">
                  {link.icon === "github" && <Github className="h-4 w-4" />}
                  {link.icon === "linkedin" && <Linkedin className="h-4 w-4" />}
                  {link.icon === "mail" && <Mail className="h-4 w-4" />}
                  {link.icon === "telegram" && <Send className="h-4 w-4" />}
                  <span>{link.icon === "telegram" ? siteInfo.telegramHandle : link.label}</span>
                </a>
              ))}
              <a href="/resume.pdf" className="transition duration-300 hover:text-white">Resume</a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid grid-cols-1 gap-4 rounded-[2rem] border border-white/10 bg-white/6 p-4 shadow-[0_10px_50px_rgba(15,23,42,0.25)] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-5">
          {credibilityItems.map((item) => (
            <div key={item} className="rounded-[1.5rem] border border-white/8 bg-slate-950/35 px-4 py-5 text-sm leading-6 text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-slate-900/60">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-400">Featured Work</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              A multi-page portfolio focused on web engineering first.
            </h2>
          </div>
          <Link href="/projects" className="hidden text-sm text-cyan-200 underline underline-offset-4 md:inline-flex">See all projects</Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.slice(0, 2).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
      <Footer />
    </PageShell>
  );
}

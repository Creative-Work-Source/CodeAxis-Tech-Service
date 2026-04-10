import Link from "next/link";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { SectionTitle } from "@/components/section-title";
import { services, stackGroups } from "@/data/portfolio";

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Services & stack"
        title="What I deliver—and the tooling I use to ship it."
        description="Engagement models, capabilities, and a concise view of languages and platforms. One page so clients and hiring teams can scan both the offer and the technical range without jumping around the site."
      />

      <section className="mx-auto max-w-6xl px-6 pb-6 md:px-8">
        <nav className="flex flex-wrap gap-3" aria-label="On this page">
          <a
            href="#services"
            className="rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-300/30 hover:bg-white/10 hover:text-white"
          >
            Services
          </a>
          <a
            href="#stack"
            className="rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-300/30 hover:bg-white/10 hover:text-white"
          >
            Stack & tools
          </a>
        </nav>
      </section>

      <section id="services" className="mx-auto max-w-6xl scroll-mt-28 px-6 pb-16 md:px-8">
        <SectionTitle eyebrow="Services" title="Capabilities across the full product lifecycle." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-[0_10px_40px_rgba(15,23,42,0.18)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20"
            >
              <h2 className="text-lg font-semibold text-white">{service.title}</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                {service.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="stack" className="mx-auto max-w-6xl scroll-mt-28 px-6 pb-20 md:px-8">
        <SectionTitle eyebrow="Stack & tools" title="Languages, frameworks, and infrastructure I work with." />
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
          Not an exhaustive list—projects often combine a subset of these depending on constraints, team skills, and client stack.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {stackGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-[0_10px_40px_rgba(15,23,42,0.18)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20"
            >
              <h2 className="text-lg font-semibold text-white">{group.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">{group.items.join(" · ")}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-slate-500">
          Looking for case studies?{" "}
          <Link href="/projects" className="font-medium text-cyan-200 underline underline-offset-4 hover:text-white">
            Browse projects
          </Link>{" "}
          or{" "}
          <Link href="/experience" className="font-medium text-cyan-200 underline underline-offset-4 hover:text-white">
            see experience & sample work
          </Link>
          .
        </p>
      </section>
      <Footer />
    </PageShell>
  );
}

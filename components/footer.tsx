import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Aurora } from "@/components/aurora";
import { Logo } from "@/components/logo";
import { siteInfo } from "@/data/portfolio";

const columns = [
  {
    title: "Software",
    links: [
      { label: "Software services", href: "/services#software" },
      { label: "Software work", href: "/projects" },
    ],
  },
  {
    title: "Architecture & Engineering",
    links: [
      { label: "Disciplines", href: "/services#architecture" },
      { label: "Architecture portfolio", href: "/architecture" },
      { label: "Agustin Salas, design", href: "/portfolio/agustin-salas" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About CodeAxis", href: "/experience" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden border-t border-line bg-surface">
      <Aurora className="opacity-50" />
      <div className="wrap relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div className="max-w-md">
            <Logo />
            <p className="mt-5 text-sm leading-7 text-muted">{siteInfo.description}</p>
            <Link href="/contact" className="btn-primary mt-6">
              Tell us about your project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <nav className="grid gap-10 sm:grid-cols-3" aria-label="Footer">
            {columns.map((column) => (
              <div key={column.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-faint">{column.title}</p>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm font-medium text-muted transition hover:text-ink">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-line pt-8 text-xs text-faint sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteInfo.name}. All rights reserved.
          </p>
          <p>Software · Architecture · BIM · Civil engineering</p>
        </div>
      </div>
    </footer>
  );
}

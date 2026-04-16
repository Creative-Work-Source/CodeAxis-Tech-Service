"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteInfo } from "@/data/portfolio";

const links = [
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Experience", href: "/experience" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/60 backdrop-blur-2xl">
      <p className="mx-auto max-w-6xl px-6 py-1.5 text-center text-[11px] leading-4 text-slate-200/90 md:px-8">
        Feel Free To Contact Me Any Time! I Am Always Open To Discussion With You!
      </p>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:text-cyan-200">
          {siteInfo.name}
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm transition duration-300 ${
                  active
                    ? "bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
                    : "text-slate-300 hover:bg-white/6 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

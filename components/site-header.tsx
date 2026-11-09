"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { label: "Services", href: "/services" },
  { label: "Software", href: "/projects" },
  { label: "Architecture", href: "/architecture" },
  { label: "Company", href: "/experience" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-line bg-canvas/75 shadow-soft backdrop-blur-xl" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="wrap flex h-[4.5rem] items-center justify-between gap-6">
        <Link href="/" aria-label="CodeAxis home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-line bg-surface/70 p-1 shadow-soft backdrop-blur lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-5 py-2 text-sm font-medium transition duration-300 ${
                isActive(link.href)
                  ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md"
                  : "text-muted hover:bg-surface-2 hover:text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link href="/contact" className="btn-primary hidden !px-5 !py-2.5 sm:inline-flex">
            Start a project <ArrowUpRight className="h-4 w-4" />
          </Link>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-ink lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="wrap border-t border-line bg-canvas/95 pb-6 pt-3 backdrop-blur-xl lg:hidden">
          {[...links, { label: "Contact", href: "/contact" }].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block rounded-2xl px-4 py-3 text-base font-medium ${isActive(link.href) ? "bg-surface-2 text-ink" : "text-muted"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

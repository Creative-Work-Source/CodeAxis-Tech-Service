import { Github, Linkedin, Mail, Send } from "lucide-react";
import { siteInfo, socialLinks } from "@/data/portfolio";

function linkIcon(icon: (typeof socialLinks)[number]["icon"]) {
  const className = "h-4 w-4 shrink-0";
  if (icon === "github") return <Github className={className} />;
  if (icon === "linkedin") return <Linkedin className={className} />;
  if (icon === "mail") return <Mail className={className} />;
  return <Send className={className} />;
}

export function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-white/10 bg-slate-950/75 backdrop-blur-2xl">
      <div className="mx-auto w-full max-w-none px-6 py-12 md:px-10 md:py-14 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Contact</p>
            <p className="mt-2 text-lg font-semibold tracking-tight text-white">{siteInfo.name}</p>
            <p className="mt-1 text-sm text-slate-400">
              <a href={`mailto:${siteInfo.email}`} className="transition hover:text-cyan-200">
                {siteInfo.email}
              </a>
            </p>
          </div>
          <nav className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-3 lg:justify-end" aria-label="Social and contact links">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {linkIcon(link.icon)}
                <span>{link.label === "Telegram" ? siteInfo.telegramHandle : link.label}</span>
              </a>
            ))}
          </nav>
        </div>
        <p className="mt-10 border-t border-white/10 pt-8 text-center text-xs text-slate-500 md:text-left">
          Built with Next.js, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

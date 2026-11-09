import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/** Full-bleed image tile with an overlaid title, used for every architecture listing. */
export function ImageTile({
  href,
  image,
  title,
  kicker,
  badge,
  className = "",
  large = false,
}: {
  href: string;
  image: string;
  title: string;
  kicker?: string;
  badge?: string;
  className?: string;
  large?: boolean;
}) {
  return (
    <Link href={href} className={`group relative block overflow-hidden rounded-3xl bg-surface-2 shadow-soft ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt={title} loading="lazy" className="slow-zoom absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
      <div className="flash opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
      {badge && (
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-800 backdrop-blur">
          {badge}
        </span>
      )}
      <span className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white text-slate-900 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <ArrowUpRight className="h-4 w-4" />
      </span>
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        {kicker && <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-200">{kicker}</p>}
        <h3 className={`mt-1 font-extrabold leading-tight text-white ${large ? "text-2xl sm:text-4xl" : "text-lg sm:text-xl"}`}>{title}</h3>
      </div>
    </Link>
  );
}

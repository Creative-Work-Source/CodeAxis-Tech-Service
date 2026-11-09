import { Check } from "lucide-react";

const palettes = [
  "from-indigo-500 via-violet-500 to-fuchsia-500",
  "from-cyan-500 via-sky-500 to-indigo-500",
  "from-emerald-400 via-teal-500 to-cyan-600",
  "from-amber-400 via-orange-500 to-rose-500",
];

/** Illustrative product dashboard drawn in HTML: a stand-in for software screenshots. */
export function DashboardMock({ className = "" }: { className?: string }) {
  const bars = [40, 65, 52, 80, 62, 92, 74, 88, 70, 96];
  return (
    <div className={`overflow-hidden rounded-2xl border border-line bg-surface shadow-lift ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-line bg-surface-2 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <span className="ml-3 h-4 flex-1 rounded-full bg-line/70" />
      </div>
      <div className="grid grid-cols-[3.25rem_1fr]">
        <div className="space-y-3 border-r border-line p-3">
          <span className="block h-7 w-7 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400" />
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="block h-2 w-7 rounded-full bg-line" />
          ))}
        </div>
        <div className="p-4">
          <div className="grid grid-cols-3 gap-2">
            {["from-indigo-500/15", "from-fuchsia-500/15", "from-cyan-500/15"].map((c) => (
              <div key={c} className={`rounded-xl bg-gradient-to-br ${c} to-transparent p-2.5`}>
                <span className="block h-1.5 w-8 rounded-full bg-faint/40" />
                <span className="mt-2 block h-3 w-12 rounded-full bg-ink/70" />
              </div>
            ))}
          </div>
          <div className="mt-4 flex h-24 items-end gap-1.5">
            {bars.map((h, i) => (
              <span
                key={i}
                className="flex-1 origin-bottom animate-grow rounded-t-md bg-gradient-to-t from-indigo-500 to-fuchsia-400"
                style={{ height: `${h}%`, animationDelay: `${i * 120}ms` }}
              />
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Build", "Test", "Deploy"].map((s) => (
              <span key={s} className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-300">
                <Check className="h-3 w-3" /> {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Abstract browser preview for a software case study, labelled with the live site's domain. */
export function ProjectVisual({ domain, index = 0, className = "" }: { domain?: string; index?: number; className?: string }) {
  const palette = palettes[index % palettes.length];
  return (
    <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${palette} p-6 sm:p-10 ${className}`}>
      <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/20 blur-2xl" aria-hidden />
      <div className="flash" aria-hidden />
      <div className="relative overflow-hidden rounded-2xl border border-white/30 bg-white/90 shadow-2xl backdrop-blur dark:bg-slate-900/85">
        <div className="flex items-center gap-1.5 border-b border-black/5 px-4 py-2.5 dark:border-white/10">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <span className="ml-3 truncate rounded-full bg-black/5 px-3 py-0.5 text-[11px] text-slate-500 dark:bg-white/10 dark:text-slate-300">
            {domain ?? "product"}
          </span>
        </div>
        <div className="grid gap-4 p-5 sm:grid-cols-[1.4fr_1fr]">
          <div>
            <span className="block h-3 w-3/4 rounded-full bg-slate-800/80 dark:bg-white/80" />
            <span className="mt-2 block h-3 w-1/2 rounded-full bg-slate-800/80 dark:bg-white/80" />
            <span className="mt-4 block h-2 w-full rounded-full bg-slate-300 dark:bg-white/20" />
            <span className="mt-2 block h-2 w-5/6 rounded-full bg-slate-300 dark:bg-white/20" />
            <span className={`mt-5 inline-block h-7 w-24 rounded-full bg-gradient-to-r ${palette}`} />
          </div>
          <div className={`hidden rounded-xl bg-gradient-to-br ${palette} opacity-80 sm:block`} />
        </div>
      </div>
    </div>
  );
}

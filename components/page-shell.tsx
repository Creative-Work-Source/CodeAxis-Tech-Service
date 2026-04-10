import { SiteHeader } from "@/components/site-header";
import { AnimatedBackground } from "@/components/animated-background";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative min-h-screen overflow-hidden text-slate-100">
      <AnimatedBackground />
      <SiteHeader />
      {children}
    </main>
  );
}

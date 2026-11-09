import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

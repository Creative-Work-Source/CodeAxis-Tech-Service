import type { Metadata } from "next";
import "./globals.css";
import { siteInfo } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `${siteInfo.name} | ${siteInfo.role}`,
  description: `${siteInfo.role} building scalable web platforms and SaaS products.`,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { RevealObserver } from "@/components/reveal-observer";
import { siteInfo } from "@/data/portfolio";

const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const display = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-display", weight: ["500", "600", "700", "800"], display: "swap" });

export const metadata: Metadata = {
  title: `${siteInfo.name} | ${siteInfo.tagline}`,
  description: siteInfo.description,
};

/** Runs before paint: applies the saved theme (light by default) and marks JS as available. */
const themeScript = `(function(){var d=document.documentElement;d.classList.add('js');try{if(localStorage.getItem('theme')==='dark'){d.classList.add('dark');}}catch(e){}})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}

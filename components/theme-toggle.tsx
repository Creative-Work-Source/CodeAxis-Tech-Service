"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* storage unavailable: theme still switches for this visit */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to day mode" : "Switch to night mode"}
      title={dark ? "Day mode" : "Night mode"}
      className="relative flex h-10 w-[4.25rem] items-center rounded-full border border-line bg-surface-2 p-1 transition-colors"
    >
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-full shadow-soft transition-all duration-500 ${
          dark ? "translate-x-[1.75rem] bg-indigo-500 text-white" : "translate-x-0 bg-white text-amber-500"
        }`}
      >
        {dark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      </span>
    </button>
  );
}

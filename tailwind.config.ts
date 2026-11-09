import type { Config } from "tailwindcss";

const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: ["./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}", "./data/**/*.ts"],
  theme: {
    extend: {
      colors: {
        canvas: token("canvas"),
        surface: token("surface"),
        "surface-2": token("surface-2"),
        ink: token("ink"),
        muted: token("muted"),
        faint: token("faint"),
        line: token("line"),
      },
      fontFamily: {
        sans: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        wide: "1600px",
      },
      boxShadow: {
        soft: "0 1px 2px rgb(15 23 42 / 0.04), 0 12px 40px -12px rgb(15 23 42 / 0.12)",
        lift: "0 2px 4px rgb(15 23 42 / 0.04), 0 30px 60px -20px rgb(79 70 229 / 0.35)",
      },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        "marquee-rev": { from: { transform: "translateX(-50%)" }, to: { transform: "translateX(0)" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-14px)" } },
        "spin-slow": { to: { transform: "rotate(360deg)" } },
        grow: { from: { transform: "scaleY(0.25)" }, to: { transform: "scaleY(1)" } },
        progress: { from: { transform: "scaleX(0)" }, to: { transform: "scaleX(1)" } },
      },
      animation: {
        marquee: "marquee 45s linear infinite",
        "marquee-rev": "marquee-rev 50s linear infinite",
        float: "float 7s ease-in-out infinite",
        "float-late": "float 8s ease-in-out -3s infinite",
        "spin-slow": "spin-slow 24s linear infinite",
        grow: "grow 2.4s ease-in-out infinite alternate",
        progress: "progress 6s linear forwards",
      },
    },
  },
  plugins: [],
};

export default config;

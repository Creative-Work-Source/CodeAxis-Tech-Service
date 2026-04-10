import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eff8ff",
          100: "#dbeffe",
          200: "#bfe6fe",
          300: "#93d7fd",
          400: "#5ac0fa",
          500: "#30a8f2",
          600: "#1b89d0",
          700: "#176da9",
          800: "#185c8c",
          900: "#194d74"
        }
      },
      boxShadow: {
        glow: "0 12px 50px rgba(34, 211, 238, 0.18)",
      },
      animation: {
        float: "float 12s ease-in-out infinite",
        "float-slow": "float 18s ease-in-out infinite",
        shimmer: "shimmer 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) scale(1)" },
          "50%": { transform: "translateY(-16px) scale(1.04)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

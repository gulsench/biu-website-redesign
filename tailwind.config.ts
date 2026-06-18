import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          900: "var(--brand-900)",
          700: "var(--brand-700)",
          600: "var(--brand-600)",
          500: "var(--brand-500)",
          400: "var(--brand-400)",
          glow: "var(--brand-glow)",
        },
        ink: "var(--ink)",
        mid: "var(--mid)",
        muted: "var(--muted)",
        border: "var(--border)",
        surface: "var(--surface)",
        white: "rgb(255 255 255 / <alpha-value>)",
        acc: {
          modules: "var(--acc-modules)",
          sitemap: "var(--acc-sitemap)",
          roadmap: "var(--acc-roadmap)",
          journey: "var(--acc-journey)",
          cases: "var(--acc-cases)",
        },
        mod: {
          ci: "var(--mod-ci)",
          rep: "var(--mod-rep)",
          ecom: "var(--mod-ecom)",
          voice: "var(--mod-voice)",
        },
        up: "var(--up)",
        down: "var(--down)",
        warn: "var(--warn)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      borderRadius: {
        card: "16px",
        chip: "8px",
        pill: "999px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(0,0,0,.04), 0 8px 30px rgba(0,0,0,.06)",
        lift: "0 2px 4px rgba(0,0,0,.05), 0 18px 50px rgba(0,0,0,.10)",
      },
      letterSpacing: {
        eyebrow: "0.12em",
      },
      backgroundImage: {
        "brand-grad": "var(--brand-grad)",
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "var(--color-oat)",
        card: "var(--color-card)",
        garden: "var(--color-garden)",
        deep: "var(--color-deep-garden)",
        sunflower: "var(--color-copper)",
        softyellow: "#F6D76B",
        tomato: "#9B2C2C",
        basil: "#6FA36F",
        soil: "#6E4C2F",
        linen: "var(--color-linen)",
        charcoal: "var(--color-charcoal)",
        muted: "var(--color-muted)",
        borderwarm: "var(--color-border)",
        warning: "#9B2C2C",
      },
      boxShadow: {
        soft: "0 10px 24px rgba(110, 76, 47, 0.12)",
        card: "3px 3px 0 rgba(110, 76, 47, 0.14)",
      },
      fontFamily: {
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;

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
        cream: "#FFF8E5",
        card: "#FAFAF7",
        garden: "#4A7C59",
        deep: "#2F5D3A",
        sunflower: "#E8A020",
        softyellow: "#F6D76B",
        tomato: "#B83A2E",
        basil: "#6FA36F",
        soil: "#6E4C2F",
        linen: "#FFF3D1",
        charcoal: "#2D2D2D",
        muted: "#757575",
        borderwarm: "#E0DDD8",
        warning: "#C0392B",
      },
      boxShadow: {
        soft: "0 16px 45px rgba(47, 93, 58, 0.12)",
        card: "0 10px 25px rgba(45, 45, 45, 0.08)",
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

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#09090B",
        card: "#18181B",
        foreground: "#FAFAFA",
        muted: "#94A3B8",
        border: "#27272A",
        accent: "#2563EB",
        link: "#3B82F6",
        destructive: "#DC2626",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

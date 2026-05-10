import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        retro: ["Segoe UI", "Geneva", "Lucida Grande", "Tahoma", "sans-serif"]
      }
    }
  },
  plugins: []
} satisfies Config;

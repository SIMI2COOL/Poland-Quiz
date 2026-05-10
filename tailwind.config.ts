import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        retro: ["Tahoma", "MS Sans Serif", "Microsoft Sans Serif", "sans-serif"]
      }
    }
  },
  plugins: []
} satisfies Config;

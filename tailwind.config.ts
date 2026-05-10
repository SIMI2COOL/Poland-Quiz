import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        xp: ["Tahoma", "MS Sans Serif", "Segoe UI", "sans-serif"]
      },
      boxShadow: {
        xp: "inset -1px -1px 0 #0b0b0b, inset 1px 1px 0 #fff, 3px 3px 0 rgba(0,0,0,0.25)",
        "xp-panel": "inset -1px -1px 0 #808080, inset 1px 1px 0 #fff"
      }
    }
  },
  plugins: []
} satisfies Config;

import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        christmas: ['"Mountains of Christmas"', 'cursive'],
        lora: ['Lora', 'serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      colors: {
        primary: "var(--christmas-green)",
        secondary: "var(--christmas-red)",
        light: "var(--snow-white)",
        accent: "var(--christmas-gold)",
        background: "var(--snow-white)",
        "background-alt": "var(--pine-dark)",
        foreground: "var(--pine-dark)",
        "foreground-alt": "var(--snow-white)",
      },
      borderColor: {
        DEFAULT: "var(--christmas-gold)",
      },
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        wiggle: 'wiggle 3s linear infinite',
      },
      keyframes: {
        wiggle: {
          '50%': { transform: 'translateY(-5px)' },
          // '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
} satisfies Config;

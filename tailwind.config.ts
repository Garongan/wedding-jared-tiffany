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
        moveUpDown: 'moveUpDown 3s linear infinite',
        scaleUpAndFade: 'scaleUpAndFade 5s linear infinite',
      },
      keyframes: {
        moveUpDown: {
          '50%': { transform: 'translateY(-5px)' },
        },
        scaleUpAndFade: {
          '0%' : {transform: 'scale(1)', opacity: '0'},
          '5%' : {transform: 'scale(1.005)', opacity: '1'},
          '50%' : {transform: 'scale(1.05)', opacity: '1'},
          '95%' : {transform: 'scale(1.095)', opacity: '1'},
          '100%' : {transform: 'scale(1.1)', filter: 'brightness(0.9)', opacity: '0'}
        }
      }
    },
  },
  plugins: [],
} satisfies Config;

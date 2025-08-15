import type { Config } from "tailwindcss";

const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#baddff',
          300: '#7ac1ff',
          400: '#38a2ff',
          500: '#0088ff',
          600: '#006ee6',
          700: '#0057cc',
          800: '#0044a3',
          900: '#003380',
        },
        secondary: {
          50: '#f6f8fa',
          100: '#edf1f5',
          200: '#dce3eb',
          300: '#bbc7d4',
          400: '#8fa3b7',
          500: '#67829e',
          600: '#4b6584',
          700: '#364c6a',
          800: '#243550',
          900: '#142236',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#1e293b',
            a: {
              color: '#0ea5e9',
              '&:hover': {
                color: '#0369a1',
              },
            },
            h1: {
              color: '#0f172a',
              fontWeight: '800',
            },
            h2: {
              color: '#1e293b',
              fontWeight: '700',
            },
            h3: {
              color: '#334155',
              fontWeight: '600',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
});

export default config;
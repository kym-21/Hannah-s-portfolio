import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        serif: ['var(--font-serif)', 'serif'],
      },
      colors: {
        ink: '#111111',
        paper: '#f8f5ef',
        ivory: '#fcfaf6',
        gold: '#b68d40',
        stone: '#6f675d',
        line: '#e6ddd0',
      },
      boxShadow: {
        soft: '0 24px 70px rgba(17, 17, 17, 0.08)',
      },
      letterSpacing: {
        wider: '0.18em',
      },
    },
  },
  plugins: [],
};

export default config;

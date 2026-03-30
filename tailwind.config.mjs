/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        surface: '#18181b',
        border: '#27272a',
        accent: '#6366f1',
        'accent-hover': '#4f46e5',
      },
      boxShadow: {
        glow: '0 32px 80px rgba(0, 0, 0, 0.35)',
      },
    },
  },
  plugins: [],
};

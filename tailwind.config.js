/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        concrete: {
          50: '#F2F3F0',
          100: '#E8E9E5',
          200: '#D8DAD4',
          300: '#BFC2BA',
          400: '#9DA198',
          600: '#5C6058',
          800: '#2C2E2A',
        },
        ink: '#16181A',
        signal: {
          DEFAULT: '#E8490F',
          dark: '#C43C0A',
        },
        blueprint: {
          DEFAULT: '#1F45C9',
          dark: '#16329A',
        },
      },
      fontFamily: {
        display: ['Archivo', 'sans-serif'],
        body: ['Newsreader', 'Georgia', 'serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'venture-blue': '#1a6ef5',
        'deep-night': '#0a0f1e',
        'night2': '#141b30',
        'night3': '#1e2a45',
        'growth-green': '#00d68f',
        'blue-mid': '#4d9fff',
        'muted': '#8899bb',
        'amber': '#f0a500',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

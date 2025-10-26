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
        'pawpid-red': '#460000',
        'pawpid-red-light': '#5a0000',
        'pawpid-pink': '#FFE2E6',
        'pawpid-cream': '#FFF5F7',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        display: ['var(--font-fredoka)', 'cursive'],
      },
    },
  },
  plugins: [],
}

export default config
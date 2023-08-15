import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      minWidth: {
        'full': '100%',
        'half': '50%',
        'quarter': '25%',
      },
      maxWidth: {
        'half': '50%',
        'quarter': '25%',
        '50': '50px',
        '100': '100px',
        '150': '150px',
      },
      minHeight: {
        'full': '100%',
        'half': '50%',
        'quarter': '25%',
        '100vw': '100vw',
        '100vh': '100vh',
      },
      fontFamily: {
        heading: ['Bebas'],
        sans: ['Montserrat']
      },
      lineHeight: {
        default: "1.7"
      }
    },
  },
  plugins: [],
}
export default config
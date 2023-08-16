/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {

  // Customize content if styles are not being applied https://tailwindcss.com/docs/content-configuration
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // Customize the default Tailwind CSS theme https://tailwindcss.com/docs/theme
  theme: {
    extend: {
      // Add brand colors here https://tailwindcss.com/docs/customizing-colors
      colors: {
        'primary': '#4287f5',
        'secondary': '#f5b642',
        'tertiary': '#f54242',
        'quaternary': '#42f560',
        'black': '#000000',
        'white': '#FFFFFF',
        'gray': '#F2F2F2',
        'gray-800': '#1F2937',
        'gray-300': '#D1D5DB',
      },
      // Add fonts here https://tailwindcss.com/docs/font-family
      fontFamily: {
        heading: ['arial', 'sans-serif'],
        sans: ['Montserrat']
      },
      lineHeight: {
        default: "1.7"
      },
      // Customize font styles here https://tailwindcss.com/docs/font-size
      // Customize default head tag styles './app/globals.css'
      fontSize: {
        'h1': [
          '4rem', {
            lineHeight: '82px',
            fontWeight: '700',
            fontFamily: 'Bebas',
          }
        ],
        'h1-alt': [
          '4rem', {
            lineHeight: '82px',
            fontWeight: '400',
            fontFamily: 'Bebas',
          }
        ],
        'h2': [
          '3rem', {
            lineHeight: '61px',
            fontWeight: '700',
            fontFamily: 'Bebas',
          }
        ],
        'h2-alt': [
          '3rem', {
            lineHeight: '61px',
            fontWeight: '400',
            fontFamily: 'Bebas',
          }
        ],
        'h3': [
          '2rem', {
            lineHeight: '41px',
            fontWeight: '700',
            fontFamily: 'Bebas',
          }
        ],
        'body': [
          '1.1rem', {
            lineHeight: '31px',
            fontWeight: '400',
            fontFamily: 'Montserrat',
          }
        ],
        'body-alt': [
          '1rem', {
            lineHeight: '31px',
            fontWeight: '500',
            fontFamily: 'Bebas',
          }
        ],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      //
      //
      // Customize widths and heights as they apear in Figma
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
        '50': '50px',
      },
    },
  },
  plugins: [
    plugin(function({ addComponents }:any) {
      // Add your custom styles here
      addComponents({
        '.btn-primary': {
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          backgroundColor: '#4287f5',
          fontWeight: '600',
          '&:hover': {
            opacity: '.8'
          },
        },
        '.btn-secondary': {
          backgroundColor: '#f5b642',
          color: '#fff',
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '600',
          '&:hover': {
            opacity: '.8'
          },
        },
        '.btn-tertiary': {
          backgroundColor: '#e3342f',
          color: '#fff',
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '600',
          '&:hover': {
            opacity: '.8'
          },
        },
      })
    })
  ],
}
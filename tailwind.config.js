/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    preflight: false,
  },
  important: '#root',
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-title': {
          'font-size': '16vw',
          'text-wrap': 'nowrap'
        },
        '.text-name': {
          'font-size': '13vw',
          'text-wrap': 'nowrap'
        },
        '.text-header': {
          'font-size': '3vw',
        },
        '.text-link': {
          'font-size': '1.5vw',
        },
        '.p-mode': {
          'padding-top': '0.5vw',
          'padding-bottom': '0.5vw',
          'padding-left': '1vw',
          'padding-right': '1vw',
        },
        '.circle': {
          'min-width': '2vw',
          'min-height': '2vw',
        },
        '.p-header': {
          'padding-top': '1.5vw',
          'padding-bottom': '1.5vw',
          'padding-left': '5vw',
          'padding-right': '5vw',
        },
        '.m-body': {
          'margin-right': '5vw',
          'margin-left': '5vw',
        },
        '.letter-spacing': {
          'letter-spacing': '1vw'
        }
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
    require('@tailwindcss/forms'),
  ],
}
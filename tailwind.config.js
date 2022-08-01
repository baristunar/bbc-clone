/** @type {import('tailwindcss').Config} */
const colors = require('./src/tailwind/colors');
const screens = require('./src/tailwind/screens');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/hooks/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontSize: {
        '2xs': '0.5rem'
      },
      outline: {
        off: 'none'
      },
      width: {
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%'
      },
      transitionProperty: {
        'max-width': 'max-width'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '0rem',
        sm: '2rem',
        '2xl': '0rem'
      }
    },
    fontFamily: {
      sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
    },
    colors,
    screens
  },
  plugins: [require('@tailwindcss/line-clamp')]
};

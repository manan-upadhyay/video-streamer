/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme'),
  plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/common/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      aspectRatio: {},
      fontFamily: {
        sans: ['"Raleway"', 'sans-serif'],
        Inter: ['"Inter"', 'sans-serif'],
        ...defaultTheme.fontFamily.sans,
      },
      colors: {
        transparent: 'transparent',
        theme: '#23303B',
        disbale: '#5F5A45',
        primary: '#0f172a',
      },
    },
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      xxs: '370px',
      xs: '480px',
      sm: '576px',
      md: '767px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px',
    },
  },
  plugins: [
    plugin(function ({addBase, addComponents}) {
      addBase({});
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen xxs': {
            maxWidth: '95%',
          },
          '@screen xs': {
            maxWidth: '95%',
          },
          '@screen sm': {
            maxWidth: '98%',
          },
          '@screen md': {
            maxWidth: '98%',
          },
          '@screen lg': {
            maxWidth: '98%',
          },
          '@screen xl': {
            maxWidth: '98%',
          },
          '@screen xxl': {
            maxWidth: '98%',
          },
        },
      });
    }),
  ],
};

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
        theme: {
          // light: '#EAE7DC',
          // secondary: '#D8C3A5',
          // dark: {
          //   100: '#8E8D8A',
          //   200: '#282828',
          //   300: '#1A1A1A',
          // },
          // primary: {
          //   100: '#E98074',
          //   200: '#E98074',
          //   300: '#E85A4F',
          // },
          light: '#F6F6F2',
          secondary: '#C2EDCE',
          primary: {
            100: '#BADFE7',
            200: '#6FB3B8',
            300: '#388087',
          },
        },
        disable: '#5F5A45',
        danger: '#EF4444',
        yellow: '#deaf14',
      },
    },
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      xxs: '320px',
      xs: '480px',
      sm: '576px',
      md: '767px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px',
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents }) {
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
  important: true,
};

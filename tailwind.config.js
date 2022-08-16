const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layout/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    fontFamily: {
      ja: [...defaultTheme.fontFamily.sans],
      en: [...defaultTheme.fontFamily.sans],
    },
    spacing: {
      ['20px']: '20px',
      container: 'calc(100% - 32px)',
    },
    maxWidth: {
      container: '992px',
    },
    extend: {
      colors: {
        theme: {
          light: '#ffffff',
          medium: '#cccccc',
          DEFAULT: '#242424',
          dark: '#111111',
        },
        primary: {
          white: '#ffffff',
          pink: '#E64980',
          dark: '#25262B',
          gray: '#E9ECEF',
        },
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};

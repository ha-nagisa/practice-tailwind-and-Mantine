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
      0: '0px',
      '2px': '2px',
      '5px': '5px',
      '7px': '7px',
      '12px': '12px',
      '13px': '13px',
      '14px': '14px',
      '15.5px': '15.5px',
      '16px': '16px',
      '16px': '16px',
      '18px': '18px',
      '18.5px': '18.5px',
      '20px': '20px',
      '21px': '21px',
      '24px': '24px',
      '28px': '28px',
      '42.5px': '42.5px',
      container: 'calc(100% - 32px)',
    },
    maxWidth: {
      container: '992px',
    },
    fontSize: {
      base: '16px',
      lg: '18px',
      xl: '26px',
      '2xl': '28px',
      '3xl': '36px',
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
      // rotate: {
      //   '-45': '-45deg',
      // },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

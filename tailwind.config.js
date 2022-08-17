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
      '4px': '4px',
      '5px': '5px',
      '7px': '7px',
      '8px': '8px',
      '10px': '10px',
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
      '22px': '22px',
      '24px': '24px',
      '28px': '28px',
      '30px': '30px',
      '42.5px': '42.5px',
      '42.5px': '42.5px',
      '53.5px': '53.5px',
      '61px': '61px',
      '63.5px': '63.5px',
      '85.5px': '85.5px',
      '101px': '85.5px',
      container: 'calc(100% - 32px)',
    },
    maxWidth: {
      container: '992px',
    },
    fontSize: {
      sm: '12px',
      base: '16px',
      lg: '18px',
      '22px': '22px',
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
          'gray-light': '#909296',
        },
      },
      borderRadius: {
        '32px': '32px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

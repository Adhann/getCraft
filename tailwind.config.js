const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      green: colors.green,
      blue: colors.blue,
    },
    extend: {
      colors: {
        'gray-21': '#212121',
        'orange-f1': '#f15e45'
      }
    },
    fontFamily: {
      'sans': 'ui-sans-serif, system-ui',
      'serif': 'ui-serif, Georgia',
      'mono': 'ui-monospace, SFMono-Regular',
      'display': 'Oswald',
      'body': 'Open Sans',
      'epilogue': 'Epilogue, sans-serif',
      'barlow': 'Barlow,sans-serif',
      'rubik': 'Rubik,sans-serif'
     },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

const colors = require('tailwindcss/colors')

module.exports = {
  future: {

  },
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      coinGecko:"#84CC16",
      ...colors,
    },
    extend: {},
    screens: {
      "mb": "320px",
      "sm": "640px",
      "md": "1024px",
      "lg": "1280px"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

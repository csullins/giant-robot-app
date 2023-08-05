/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '26': '26px'
      },
      width: {
        '177': '177px',
        '376': '376px'
      },
      colors: {
        'grey': '#585858',
        'off-white': '#EAEAEA',
        'citrus': '#FFAB44'
      },
      fontSize: {
        '16': '16px',
        '32': '32px'
      },
      fontFamily: {
        serif: ['Merriweather'],
      }
    },
  },
  plugins: [],
}


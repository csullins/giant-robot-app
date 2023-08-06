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
        '376': '376px',
        '455': '455px'
      },
      colors: {
        'grey': '#585858',
        'off-white': '#EAEAEA',
        'citrus': '#FFAB44',
        'label-grey': '#666666',
        'input-grey': '#F7F7F7',
        'invalid': '#E70000',
        'valid': '#OOADEE',
        'active-border': '#OOADEE',
      },
      fontSize: {
        '12': '12px',
        '14': '14px',
        '16': '16px',
        '24': '24px',
        '32': '32px'
      },
      fontFamily: {
        serif: ['Merriweather'],
        sans: ['Roboto'],
      }
    },
  },
  plugins: [],
}


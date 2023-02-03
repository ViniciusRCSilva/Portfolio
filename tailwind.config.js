/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['Lexend', 'sans-serif']
      },
      boxShadow: {
        middle: "0 0 15px"
      }
    }
  },
  plugins: [],
}

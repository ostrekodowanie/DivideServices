/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#852FF2',
        secondary: '#AE6EFF'
      },
      gridTemplateColumns: {
        autoFit: 'repeat(auto-fit, minmax(2in, 1fr))',
        auto: 'auto 1fr'
      },
      gridTemplateRows: {
        auto: 'repeat(2, auto)'
      }
    },
  },
  plugins: [],
}

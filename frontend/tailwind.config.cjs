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
      },
      backgroundImage: {
        insideShadowPrimary: 'linear-gradient(270deg, rgba(133, 47, 242, 0.05) 0%, rgba(217, 217, 217, 0) 100%, #F6EFFE 100%);', 
        insideShadowGray: 'linear-gradient(270deg, rgba(204, 202, 206, 0.05) 0%, rgba(217, 217, 217, 0) 100%, #F6EFFE 100%);'
      }
    },
  },
  plugins: [],
}

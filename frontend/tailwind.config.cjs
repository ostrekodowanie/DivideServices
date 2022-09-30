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
        secondary: '#AE6EFF',
        background: '#FCFBFD'
      },
      gridTemplateColumns: {
        autoFit: 'repeat(auto-fit, minmax(2in, 1fr))',
        auto: 'auto 1fr'
      },
      gridTemplateRows: {
        auto: 'repeat(2, auto)'
      },
      backgroundImage: {
        insideShadowPrimary: 'linear-gradient(270deg, rgba(133, 47, 242, 0.23) 0%, rgba(217, 217, 217, 0) 100%, #F6EFFE 100%);', 
        insideShadowGray: 'linear-gradient(270deg, rgba(204, 202, 206, 0.05) 0%, rgba(217, 217, 217, 0) 100%, #F6EFFE 100%);',
        productShadow: 'linear-gradient(179.04deg, rgba(0, 0, 0, 0) 47.11%, rgba(0, 0, 0, 0.1715) 89.53%);'
      },
      boxShadow: {
        outsideShadowPrimary: '0px 4px 60px rgba(179, 126, 242, 0.24);',
        outsideGray: '0px 4px 97px rgba(168, 102, 246, 0.08);'
      }
    },
  },
  plugins: [],
}

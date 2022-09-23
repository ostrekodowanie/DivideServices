/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
<<<<<<< HEAD
        primary: '#852FF2'
=======
        primary: '#852FF2',
        secondary: '#AE6EFF'
      },
      gridTemplateColumns: {
        autoFit: 'repeat(auto-fit, minmax(2in, 1fr))'
>>>>>>> 3c2ed0cddd75ed6e9557813653db17832890fc6b
      }
    },
  },
  plugins: [],
}

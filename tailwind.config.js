/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': 'Inter',
        'lato' : 'Lato',
        'montserrat' : ['Montserrat', 'sans-serif']
      },
      backgroundImage: {

      },
  },
  plugins: [],
}}


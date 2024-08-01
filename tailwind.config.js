/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html"

  ],
  theme: {
    extend: {
      fontFamily: {
        'ceci': ['Ceci', 'sans-serif'],
        'mandrel': ['Mandrel', 'sans-serif'],
      },
      backgroundImage: {
        'img_principal': "url('../img/img_principal.jpg')",
        'img_1': "url('../img/img_1.jpg')",
        'img_2': "url('../img/img_2.jpg')",
        'img_3': "url('../img/img_3.jpg')",
        'img_4': "url('../img/img_4.jpg')",
        'img_5': "url('../img/img_5.jpg')",
        'img_6': "url('../img/img_6.jpg')",
        'img_7': "url('../img/img_7.jpg')",
        'img_8': "url('../img/img_8.jpg')",
        'img_9': "url('../img/img_9.jpg')"

      },
      colors: {
        'blue-450': '#4773B2',
        'blue-550': '#244F88'
      },
      screens: {
        's-sm': '350px',
        'big-sm': '450px',
        'big-screen': '1900px'
      },
      spacing: {
        '672': '42rem',
        '950': '950px',
        '1376': '86rem'
      }
    },
  },
  plugins: [],
}


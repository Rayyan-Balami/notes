/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js,php}"],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['ABCFavorit', 'Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-mobile': "url('/images/pattern-bg-mobile.png)",
        'hero-desktop': "url('/images/pattern-bg-mobile.png)",
      },
      width: {
        '128': '32rem'
      },
    },
  },
  plugins: [],
}

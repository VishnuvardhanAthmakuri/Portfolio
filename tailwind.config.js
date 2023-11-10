/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,ts}"],
  theme: {
    extend: {
      display: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [],
}


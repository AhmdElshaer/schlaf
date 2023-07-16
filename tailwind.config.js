/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'schlafBlue': '#112857'
        // 'schlafBlue': '#14325c'
      }
    },
  },
  plugins: [],
}
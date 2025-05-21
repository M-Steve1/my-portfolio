/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",  // Ensures Tailwind processes your templates and components
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        sofia: ['Sofia', 'cursive'],
      },
      screens: {
        custom1001: '1001px'
      }
    },
  },
  plugins: [],
}
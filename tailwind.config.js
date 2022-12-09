/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
         'hero-pattern': "linear-gradient(to right, rgba(107, 120, 255, 0.99), rgba(134, 9, 233, 1), rgba(134, 9, 233, 0)), url('../src/pages/Login/assets/image1.png')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

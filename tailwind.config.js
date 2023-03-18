/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        main: 'rgba(69.7%,10%,60.7%,1)',
        gr:'linear-gradient(to top,black,rgba(69.7%,10%,60.7%,0.2),black)'
      }
    },
  },
  plugins: [],
}
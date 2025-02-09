/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A1F71',
        accent: '#6F42C1',
        highlight: '#00D4FF',
        background: '#121212',
        textLight: '#F5F5F5',
      },
    },
  },
  plugins: [],
}

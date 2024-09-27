/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'white': '0 2px 4px rgba(0,252,0,0,4)',
        'red': '0 2px 4px rgba(255, 0, 0, 0.5)',
        'blue': '0 2px 2px 4px rgba(23, 234, 200, 0.5)',
      },
    },
  },
  plugins: [],
}
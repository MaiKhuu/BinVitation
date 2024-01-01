/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'coral-pink': '#FF6262',
        'pink': '#FFAD9E',
        'mauve': '#B20040',
        'burgundy': '#B20040',
        'blue': '#273B7A',
        'yellow': '#FFC61B'
      }
    },
  },
  plugins: [],
}


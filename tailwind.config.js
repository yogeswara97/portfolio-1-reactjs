/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  // darkMode: 'media',
  theme: {
    extend: {
      fontFamily:{
        mono: ['"Lato"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}


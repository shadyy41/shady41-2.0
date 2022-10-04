/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'ibm-mono': ['IBM Plex Mono', 'monospace'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': '#000b11',
        'accent': '#0066fe',
      }
    },
  },
  plugins: [],
}
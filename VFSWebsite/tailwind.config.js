/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'white': '#ffffff',
      'black': '#040F0F',
      'red': '#AD113D',
      'blue': '#191E42',
      'yellow': '#FFD35A',
      'grey': '#252933',
    }
  },
  plugins: [],
}

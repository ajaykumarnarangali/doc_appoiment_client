/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Outfit'],
      },
      colors: {
        bannerColor: '#5F6FFF',
        footerText:'#4B5566',
        formText:'#5E5E5E',
        bookingButton:'#5F6FFF'
      }
    },
  },
  plugins: [],
}
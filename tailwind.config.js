/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm:'360px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    fontFamily:{
      barlow: 'Barlow, sans-serif',
      bellefair: 'Bellefair, serif',
      kumbhSans: 'Kumbh Sans, sans-serif'
    },
    extend: {
      animation: {
        fade: 'fadeOut 5s ease-in-out',
      },
      keyframes: theme => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.red.300') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
      }),
      colors: {
        myBlack : 'hsl(230, 35%, 7%)',
        myBlue: 'hsl(231, 77%, 90%)',
        myWhite: 'hsl(0, 0%, 100%)'
      }
    },
  },
  plugins: [],
}
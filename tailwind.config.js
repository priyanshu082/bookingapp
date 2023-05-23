/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif']
      }
    },
    screens: {
      "xxsm":'300px',
      'xsm': '400px',
      'sm': '540px',
      'md': '700px',
      'lg': '800px',
      'xl': '1050px',
      '2xl': '1300px',
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}


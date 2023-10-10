/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend:{
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
       jharna:{
        800: '#00AEEF',
        700: '#1ab6f1',
        600: '#33bef2',
        500: '#4dc6f4',
        400: '#66cef5',
        300: '#80d7f7',
        200: '#99dff9',
        100: '#b3e7fa',
        50: '#cceffc'
       },
       dark:{
        500: '#000000',
        400: '#001118',
        300: '#334155',
        200: '#64748b',
        100: '#cbd5e1',
       }
      }
    },
    variants:{
      extend: {
        backgroundColor: ["active"],
      }
    }
  },
  plugins: [],
}
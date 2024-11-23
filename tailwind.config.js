/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Poppins' : ['Poppins', 'sans-serif']
      },
      colors: {
        'dark' : '#151618',
        'dark-light' : '#1E1E1E',
        'light' : '#FFFFFF',
        'light-dark' : '#BABABA',
        'detail' : '#FFCC41',
        'detail-green' : '#1ED760',
        'detail-red' : '#FF0000',
      }
    },
  },
  plugins: [],
};
      
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'buttercup': {  
          DEFAULT: '#F59E0B',  
          50: '#F9C162',  
          100: '#DD9909',  
          200: '#AC8807',  
          300: '#7B6E05',  
          400: '#4A4903',  
          500: '#171901',  
          600: '#000000',  
          700: '#000000',  
          800: '#000000',  
          900: '#000000',  
          950: '#000000'},
      }
    },
  },
  plugins: [],
}
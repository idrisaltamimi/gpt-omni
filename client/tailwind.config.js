/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      seaGreen: '#20B2AB',
      white: '#FFFFFF',
      black: '#1A1615',
      gunmetal: '#242B2B',
      darkGrey: '#646061',
    },
    screens: {
      sm: '425px',
      md: '768px',
      lg: '1024px'
    }
  },
  plugins: [],
}


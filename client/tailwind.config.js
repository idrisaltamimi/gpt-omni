/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      jungle: '#0FA37F',
      white: '#FFFFFF',
      jet: '#444654',
      charcoal: '#343541',
      grey: '#40414f',
    },
    screens: {
      sm: '425px',
      md: '768px',
      lg: '1024px'
    },
    boxShadow: {
      sm: '0 0 10px rgba(0,0,0,0.10)'
    }
  },
  plugins: [],
}


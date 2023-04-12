/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blue: '#0F85A3',
      jungle: '#0FA37F',
      white: '#FFFFFF',
      charcoal: '#444654',
      jet: '#343541',
      grey: '#40414f',
      lightGrey: '#d1d5db',
    },
    screens: {
      sm: '425px',
      md: '768px',
      lg: '1024px'
    },
    boxShadow: {
      sm: '0 0 10px rgba(0,0,0,0.10)'
    },
    animation: {
      'spin': 'spin 1s ease-in infinite',
    }
  },
  plugins: [],
}


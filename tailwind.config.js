/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue:    '#1B3A8C',
          blueDark:'#122970',
          blueLight:'#2550C0',
          gold:    '#F5B400',
          goldDark:'#D49A00',
          black:   '#111111',
          charcoal:'#1E1E1E',
          gray:    '#F5F5F5',
          darkGray:'#2A2A2A',
        },
      },
      fontFamily: {
        heading: ['Barlow Condensed', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #111111 0%, #1B3A8C 60%, #111111 100%)',
      },
    },
  },
  plugins: [],
}

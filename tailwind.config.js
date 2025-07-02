module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'indian-red': '#C2272D',
        'indian-gold': '#FFD700',
        'indian-maroon': '#800000',
        'indian-yellow': '#FF9933',
      },
      fontFamily: {
        'sanskrit': ['"Sanskrit Text"', 'serif'],
        'hind': ['Hind', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
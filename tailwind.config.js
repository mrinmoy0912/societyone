/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        iimGreen: {
          DEFAULT: '#1f5d08',
          dark: '#164305',
          light: '#2c7f0b',
          subtle: '#f2f8f0'
        },
        iimGold: {
          DEFAULT: '#d4af37',
          light: '#f4e4a6',
          dark: '#b3922c'
        },
        iimNavy: '#0f291e'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif']
      }
    },
  },
  plugins: [],
}
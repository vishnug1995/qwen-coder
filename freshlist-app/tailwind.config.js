/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fresh: {
          50: '#FDFCF8',
          100: '#F5F4ED',
          200: '#E8E6D9',
          300: '#D4D0BC',
          400: '#B8B296',
          500: '#9A9272',
          600: '#7A7358',
          700: '#5F5A46',
          800: '#4D493A',
          900: '#413D32',
        },
        green: {
          50: '#F2F9F3',
          100: '#E0F0E4',
          200: '#C5E0CC',
          300: '#9FC9A9',
          400: '#6FA87D',
          500: '#4CAF50',
          600: '#2E7D32',
          700: '#1B5E20',
          800: '#154A1A',
          900: '#113D16',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

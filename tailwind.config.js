/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#0F6E56',
          light: '#1D9E75',
          dark: '#085041',
        },
      },
    },
  },
  plugins: [],
}
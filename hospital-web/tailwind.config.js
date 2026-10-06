/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B6B7B',
          light: '#E8F4F7',
        },
        secondary: '#4CAF82',
        accent: '#F4A261',
        surface: '#F8FAFB',
        'text-base': '#1A2E35',
        'text-muted': '#6B8A92',
      },
      fontFamily: {
        heading: ['Nunito', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

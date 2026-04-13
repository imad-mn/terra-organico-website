/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary:   '#2D6A2D',
        secondary: '#4A7C3F',
        accent:    '#8B5E3C',
        khaki:     '#E8E0C8',
        dark:      '#1E2D1E',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body:    ['"Lato"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

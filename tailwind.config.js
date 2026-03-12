/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mda-cream': '#FCF5E5',
        'mda-maroon': '#41061C',
        'mda-pink': '#F9A4B4',
        'mda-yellow': '#FAE5A8',
        'mda-dark': '#41061C',
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        display: ['Bebas Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}



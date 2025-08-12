/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
        DM: ["DM Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        'hero-image': "url('/src/assets/Framer/Rectangle2.png')",
        'about-image': "url('/src/assets/Framer/Rectangle4.png')",
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': "linear-gradient(135deg, rgba(105,105,138,1) 14%, rgba(47,47,69,1) 82%)",
      }
    }
  },
  plugins: [],
}
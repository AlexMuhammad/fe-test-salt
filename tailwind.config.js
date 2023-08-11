/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-1": "#029FE4",
        "primary-2": "#3D46A2",
        "primary-3": "#777777",
        "primary-4": "#A7A7A7"
      },
      fontSize: {
        "36": "36px",
        "16": "16px",
        "18": "18px",
        "14": "14px",
        "24": "24px"
      }
    },
  },
  plugins: [],
}


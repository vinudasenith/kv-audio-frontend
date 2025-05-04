import { SiAccenture } from 'react-icons/si';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FBFBFB",
        secondary: "#578FCA",
        accent: "#3674B5"
      }
    },
  },
  plugins: [],
}


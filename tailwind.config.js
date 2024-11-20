/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./apps/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

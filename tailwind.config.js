/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      white: "#fff",
      black: "#000",
      "stone-gray": "#7a7a7a",
      "mint-green": "#64b496",
      "light-gray": "#e9e9e9",
      "ghost-gray": "#f0f0f0",
      gray: "#838383",
      "leafy-green": "#3bb77e",
      "charcoal-blue": "#253d4e",
      "fire-orange": "#FE7300",
      "silver-gay": " #b6b6b6",
    },
    extend: {
      fontFamily: {
        sans: ["Poppins"],
      },
    },
  },
  plugins: [],
};

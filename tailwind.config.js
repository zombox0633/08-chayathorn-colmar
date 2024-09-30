/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}", "./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        mukta_light: ["Mukta", "sans-serif"],
      },
      colors: {
        anti_flash_white: "#F3F5F5",
        timber_wolf: "#D8D8D8",
        battleship_gray: "#9B9B9B",
        davy_gray: "#4A4A4A",
      },
    },
  },
  plugins: [],
};

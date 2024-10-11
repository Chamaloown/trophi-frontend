/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./presets/**/*.{js,vue,ts}",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      green: "#6C9A8B",
      grey: "#AD2D8",
      blue: "#143642",
      yellow: "#EC9A29",
      red: "#A8201A",
    },
    extend: {
      fontFamily: {
        sans: ['"Albert Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-primeui")],
};

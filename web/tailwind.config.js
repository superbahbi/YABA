/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      blue: "#3D7AE5",
      blueLight: "#01B8E3",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      green: "#37DF34",
      red: "#DF3434",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: {
        100: "#cffafe",
        200: "#a5f3fc",
        300: "#67e8f9",
        400: "#22d3ee",
        500: "#06b6d4",
        600: "#0891b2",
        700: "#0e7490",
        800: "#155e75",
        900: "#164e63",
      },
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
    },
    fontFamily: {
      sans: ["Sora", "sans-serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        xl: "0.5rem",
        "2xl": "1rem",
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

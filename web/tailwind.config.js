/** @type {import('tailwindcss').Config} */
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
      blue: "#3D7AE5",
      blueLight: "#01B8E3",
      black: "#050624",
      grey: "#A4B4CB",
      white: "#fff",
      green: "#37DF34",
      red: "#DF3434",
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

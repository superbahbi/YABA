/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "992px",
      xl: "1440px",
      xxl: "1920px",
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
      backgroundImage: {
        "auth-background": "linear-gradient(90deg, neutral 70%, accent 70%)",
      },
    },
  },
  daisyui: {
    themes: [
      {
        night: {
          primary: "#bbdff9",
          secondary: "#edc528",
          accent: "#d8f298",
          neutral: "#212236",
          "base-100": "#262650",
          info: "#6CBFEF",
          success: "#1FE069",
          warning: "#F6B623",
          error: "#F0574C",
        },
      },
      {
        light: {
          primary: "#edae28",
          secondary: "#9ea0ef",
          accent: "#bb67e5",
          neutral: "#271E38",
          "base-100": "#EAEBEB",
          info: "#97ADF7",
          success: "#169282",
          warning: "#FABB3D",
          error: "#EE686E",
        },
      },
    ],
  },

  plugins: [require("daisyui"), require("@tailwindcss/forms")],
};

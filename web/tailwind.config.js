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
          primary: "#38bdf8",
          secondary: "#818CF8",
          accent: "#bb67e5",
          neutral: "#1E293B",
          "neutral-focus": "#273449",
          "base-100": "#0F172A",
          info: "#0CA5E9",
          success: "#2DD4BF",
          warning: "#F4BF50",
          error: "#FB7085",
        },
      },
      {
        light: {
          primary: "#047AFF",
          secondary: "#463AA2",
          accent: "#bb67e5",
          neutral: "#021431",
          "base-100": "#ffffff",
          "base-200": "#F2F7FF",
          "base-300": "#E3E9F4",
          "base-content": "#394E6A",
          info: "#93E7FB",
          success: "#81CFD1",
          warning: "#EFD7BB",
          error: "#E58B8B",
        },
      },
    ],
  },

  plugins: [require("daisyui"), require("@tailwindcss/forms")],
};

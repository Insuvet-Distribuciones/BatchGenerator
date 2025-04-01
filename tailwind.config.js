/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      scale: {
        30: ".3",
        60: ".6",
        85: ".85",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#FFDD00",
        secondary: "#00A650",
        dark: "#3B3B3B",
        third: "#EA3427",
        neutral: "#F5F5F6",
      },
    },
  },
  plugins: [],
};

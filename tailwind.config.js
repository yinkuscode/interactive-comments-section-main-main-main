/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGray: "hsl(223, 19%, 93%)",
        moderateBlue: "(238, 40%, 52%)",
        customBlueB: "#73e3e8.",
        darkBlue: "hsl(212, 24%, 26%);",
        white: "#ffffff",
        grayishBlue: "hsl(211, 10%, 45%)",
        veryLightGray: "#f0f7fa",
        lightgrayishblue: "hsl(239, 57%, 85%)",
      },
      fontFamily: {
        rubik: ["'Rubik', sans-serif"],
      },
      width: {
        128: "30rem",
        120: "20rem",
        119: "18rem,",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grayColor: "#707070",
      },
      fontFamily: {
        Inter: ["Inter"],
        dinBlack: ["dinBlack"],
        dinBold: ["dinBold"],
        dinHeavy: ["dinHeavy"],
        dinLight: ["dinLight"],
        dinMedium: ["dinMedium"],
        dinRegular: ["dinRegular"],
        dinUltraLight: ["dinUltraLight"],
      },
    },
  },
  plugins: [],
};

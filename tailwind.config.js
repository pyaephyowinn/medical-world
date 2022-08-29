/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blueLight: "#14c2f7",
        blueDark: "#00aaef",
        customGray: "#f9f9f9",
        customGreen: "#4d7582",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueLight: "#14c2f7",
        blueDark: "#00aaef",
        GrayLight: "#f9f9f9",
        GrayDark: "#f2f2f2",
        customGreen: "#4d7582",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

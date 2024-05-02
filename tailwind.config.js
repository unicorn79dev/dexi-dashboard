const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      baseBackground: "#070917",
      baseForeground: "#FDFDFD",
      baseGrey: "#B8B8B8",
      lightGrey: "#E9E9E9",
      lightSky: "#469BF5",
      darkSky: "#161C38",
      heavyDarkSky: "#0F142E",
      semiDarkSky: "#242D5B"
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
};

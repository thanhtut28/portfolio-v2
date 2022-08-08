/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

const colors = ["red", "lime", "teal", "sky", "violet", "pink", "rose"];

module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            sans: ["Ginto Nord", "Neue Montreal", ...defaultTheme.fontFamily.sans],
            neue: "Neue Montreal",
         },

         colors: {
            ...getColors(),
         },
         backgroundImage: {
            "pattern-image": `url('../public/assets/pattern_circles.png')`,
            wave: `url('../public/assets/wave.svg')`,
         },
         screens: {
            "small-phones": { max: "400px" },
         },
         animation: {
            wave: "wave 30s linear infinite",
         },
         keyframes: {
            wave: {
               "0%": { transform: "rotate(0deg)" },
               "100%": { transform: "rotate(3600deg)" },
            },
         },
      },
   },
   plugins: [],
   safelist: colors.map(color => `bg-${color}-100`),
};

function getColors() {
   return {
      tacao: {
         DEFAULT: "#F0B38C",
         50: "#FFFFFF",
         100: "#FFFFFF",
         200: "#FEFBF8",
         300: "#F9E3D4",
         400: "#F5CBB0",
         500: "#F0B38C",
         600: "#EA925A",
         700: "#E37129",
         800: "#BB5818",
         900: "#8A4112",
      },
      "pixie-green": {
         DEFAULT: "#AFD7B3",
         50: "#FFFFFF",
         100: "#FFFFFF",
         200: "#FFFFFF",
         300: "#E5F2E7",
         400: "#CAE5CD",
         500: "#AFD7B3",
         600: "#8AC48F",
         700: "#64B26C",
         800: "#4A9451",
         900: "#376E3D",
      },
      "apricot-peach": {
         DEFAULT: "#FBC5C4",
         50: "#FFFFFF",
         100: "#FFFFFF",
         200: "#FFFFFF",
         300: "#FFFFFF",
         400: "#FEEBEA",
         500: "#FBC5C4",
         600: "#F7918F",
         700: "#F45E5B",
         800: "#F02A26",
         900: "#D0120E",
      },
   };
}

/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            sans: ["Ginto Nord", ...defaultTheme.fontFamily.sans],
         },

         colors: {
            ...getColors(),
         },
         backgroundImage: {
            "pattern-image": `url('../public/assets/pattern_circles.png')`,
         },
         screens: {
            "small-phones": { max: "400px" },
         },
      },
   },
   plugins: [],
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

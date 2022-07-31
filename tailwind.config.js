/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "2xs": "0.5rem",
      },
      outline: {
        off: "none",
      },
      width: {
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
      },
      transitionProperty: {
        "max-width": "max-width",
      },
    },
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      primary: {
        DEFAULT: "#000000",
        hover: "#181818",
        foreground: "#ffffff",
        100: "#525252",
        200: "#404040",
        300: "#3d3d3d",
        400: "#333333",
        500: "#2d2d2d",
        600: "#292929",
        700: "#2b2b2b",
        800: "#181818",
        900: "#000000",
      },
      secondary: {
        DEFAULT: "#e95151",
        hover: "#d03838",
        foreground: "#ffffff",
        100: "#ffb7b7",
        200: "#ff9e9e",
        300: "#ff8484",
        400: "#ff6b6b",
        500: "#e95151",
        600: "#d72b01",
        700: "#b61e1e",
        800: "#9d0505",
        900: "#830000",
      },
      black: {
        DEFAULT: "#000000",
        100: "#525252",
        200: "#404040",
        300: "#3d3d3d",
        400: "#333333",
        500: "#2d2d2d",
        600: "#292929",
        700: "#2b2b2b",
        800: "#181818",
        900: "#000000",
      },
      gray: {
        DEFAULT: "#ebebeb",
        25: "#fdfdfd",
        50: "#f7f7f7",
        100: "#f5f5f5",
        150: "#f4f4f4",
        200: "#eeeeee",
        300: "#ebebeb",
        400: "#d7d7d7",
        450: "#d4d4d4",
        500: "#c9c9c9",
        600: "#9d9d9d",
        700: "#686868",
        800: "#615f62",
        850: "#58585a",
        900: "#4a4f54",
        950: "#424242",
      },
      error: {
        DEFAULT: "#d72b01",
        100: "#e20008",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "0rem",
        sm: "2rem",
        "2xl": "0rem",
      },
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    screens: {
      xs: "575px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1170px",
      "2xl": "1370px",
    },
  },
  plugins: [],
};

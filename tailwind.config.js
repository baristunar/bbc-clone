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
        DEFAULT: "#B80000",
        foreground: "#ffffff",
      },
      black: {
        DEFAULT: "#000000",
        100: '#141414',
        200: "#222222",
      },
      gray: {
        DEFAULT: "#ebebeb",
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
      sans: ['ReithSans', 'Helvetica', 'Arial', 'sans-serif'],
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

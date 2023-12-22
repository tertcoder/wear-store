/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        lg2: "1172px",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        coiny: ["Coiny"],
      },
      colors: {
        // Text Colors
        "txt-main": "#28231c",
        "txt-gray": "#766f6a",

        // Button Background Colors
        "btn-main-bg": "#FDBD8E",
        "btn-light-bg": "#fad5bb",
        "btn-white-bg": "#fffaf6",
        "btn-gray-bg": "#f2f1ee",

        // Border Colors
        "bd-main": "#28231c",
        "bd-gray": "#d4d2cf",

        // input
        "input-main": "#474747",

        // Background
        "main-bg": "#fffaf6",
      },
      backgroundColor: {
        "hero-bg": "#FDBD8E",
      },
      backgroundImage: {
        "linear-bg":
          "linear-gradient(261deg, #FDBD8E 8.31%, rgba(255, 174, 115, 0.65) 33.4%, rgba(255, 185, 133, 0.41) 64.8%, rgba(253, 189, 142, 0.21) 83.3%, rgba(253, 189, 142, 0.00) 100%);",
        "hero-img-bg":
          "linear-gradient(0deg, rgba(255, 174, 115, 0.75) 0%, rgba(255, 174, 115, 0.75) 100%), url(src/assets/images/hero.webp);",
      },
      boxShadow: {
        "shdw-main": "0px 4px 20px 0px rgba(40, 35, 28, 0.10);",
      },
      borderRadius: {
        "rd-main": "0.625rem",
      },
      borderColor: {
        lineColor: "rgba(55, 40, 28, 0.15)",
      },
    },
  },
  plugins: [
    // require("@tailwindcss/typography"),
    // require("@tailwindcss/forms"),
    // require("@tailwindcss/aspect-ratio"),
  ],
};

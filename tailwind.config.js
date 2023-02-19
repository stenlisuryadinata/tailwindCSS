module.exports = {
  purge: ["./dist/**/*.html", "./dist/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
      },
      colors: {
        "blue-main": "#175DDC",
        "blue-navy": "#1A3B66",
      },
    },
  },
  variants: {
    extend: {
      transform: ["hover", "focus"],
    },
  },
  plugins: [],
};

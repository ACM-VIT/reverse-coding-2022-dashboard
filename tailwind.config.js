module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      screens: {
        "2xl": { min: "1550px" },
        "3xl": { min: "1921px", max: "2560px" },
      },
      height: {
        100: "28rem",
      },
      fontSize: {
        "1.5xl": "1.4rem",
        "4.5xl": "2.5rem",
        "5.5xl": "3.5rem",
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        one: "49%",
      },
      colors: {
        progressBg: "#e5e7eb",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

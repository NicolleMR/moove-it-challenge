module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        cork: "url('./assets/images/cork-bg.jpg')",
      },
      borderWidth: {
        16: "1rem",
      },
      maxWidth: {
        280: "17.5rem",
      },
      height: {
        280: "17.5rem",
      },
      gridTemplateColumns: {
        "auto-fill": "repeat(auto-fill, minmax(18rem, 1fr))",
      },
    },
  },
  plugins: [],
};

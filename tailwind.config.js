module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        cork: "url('./assets/images/cork-bg.jpg')",
      },
      gridTemplateColumns: {
        "auto-fill": "repeat(auto-fill, minmax(18rem, 1fr))",
      },
    },
  },
  plugins: [],
};

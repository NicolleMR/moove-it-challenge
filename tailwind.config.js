module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        cork: "url('./assets/images/cork-bg.jpg')",
      },
      backgroundColor: {
        overlay: "rgba(0,0,0,0.8)",
      },
      gridTemplateColumns: {
        "auto-fill": "repeat(auto-fill, minmax(18rem, 1fr))",
      },
    },
  },
  plugins: [],
};

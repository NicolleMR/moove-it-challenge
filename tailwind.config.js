module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        cork: "url('./assets/images/cork-bg.jpg')",
        "crumpled-paper-yellow": "url('./assets/images/crumpled-paper-yellow.jpg')",
        "crumpled-paper-orange": "url('./assets/images/crumpled-paper-orange.jpg')",
        "crumpled-paper-purple": "url('./assets/images/crumpled-paper-purple.jpg')",
        "crumpled-paper-green": "url('./assets/images/crumpled-paper-green.jpg')",
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

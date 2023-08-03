module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      main: "#0c0c0c",
      purple: "#8767fe",
      lightBlue: "#66c7fc",
      lightPurple: "#7d87fc",
      blue: "#769efc",
      background: "#0c0c0c",
      secondary: "#1B1B1B",
      tertirary: "#171717",
      black: "#000",
      gold: "#ffd700",
      secondarytext: "#9D9D9D",
      white: "#fff",
      red: "#ff0000",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1124px",
      xl: "1280px",
      "2xl": "1536px",
    },

    extend: {
      keyframes: {
        move: {
          "0%, 100%": { transform: "translateY(-15px)" },
          "50%": { transform: "translateY(15px)" },
        },
      },
    },
  },
  plugins: [],
};

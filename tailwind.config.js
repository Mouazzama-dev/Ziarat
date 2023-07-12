/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#030B15",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        gold: "#b18f40",
        btn_primary: "#1da1f2",
        btn_primary_hover: "#2287C9",
        borderLight: "#353535",
        borderDark: "#00ADD8",
        textColor: "#7D7D7D",
        footerColor: "#00C4F4",
        blueGray: "#37474f",
      },
      animation: {
        textanimate: "textanimate 1s",
      },
      keyframes: {
        textanimate: {
          "0%": {
            opacity: 0,
            maxHeight: "15px",
          },
          "100%": {
            opacity: 1,
            maxHeight: "350px",
          },
        },
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
});

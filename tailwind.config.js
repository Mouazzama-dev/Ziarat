/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000235",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        lightGray: "#9C9DC2",
        dimGray: "#787AA5",
        dimGrayText: "#5C5D75",
        gold: "#b18f40",
        btn_primary: "#0B021E",
        btn_primary_hover: "#2287C9",
        borderLight: "#353535",
        borderDark: "#96F5EB",
        textColor: "#7D7D7D",
        lightTextColor: "#5C5D75",
        footerColor: "#00C4F4",
        blueGray: "#37474f",
        iconBg: "#5F5F5F",
        grayColor: "#A8A7A8",
        navColor: "#787AA5",
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

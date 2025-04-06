/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#242424",
      grey: "#F3F3F3",
      "dark-grey": "#6B6B6B",
      red: "#FF4E4E",
      transparent: "transparent",
      twitter: "#1DA1F2",
      purple: "#8B46FF",
    },

    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1330px",
    },

    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "30px",
      "4xl": "36px",
      "5xl": "48px",
      "6xl": "60px",
      "7xl": "72px",
      "8xl": "96px",
      "9xl": "128px",
    },
    // extend: {
    //   fontFamily: {
    //     roboto: ["Roboto", "sans-serif"],
    //   },
    // },
  },
  plugins: [],
};

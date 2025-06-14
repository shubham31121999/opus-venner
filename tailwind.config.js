/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#54595F",
        textBase: "#7A7A7A",
        accent: "#030303",
        darkGray: "#222222",
        olive: "#949B34",
        themeGreen: "#919734",
        themeLight: "#d4da46",
      },
      boxShadow: {
        green: "0 4px 20px rgba(34, 197, 94, 0.5)",
      },
      fontFamily: {
        primary: ["Oswald", "sans-serif"],
        secondary: ['"Roboto Condensed"', "sans-serif"],
        text: ["Roboto", "sans-serif"],
        accent: ["Roboto", "sans-serif"],
      },
      fontWeight: {
        primary: "600",
        secondary: "400",
        text: "400",
        accent: "500",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.7s cubic-bezier(.39,.575,.565,1) forwards",
      },
    },
  },
  plugins: [],
};

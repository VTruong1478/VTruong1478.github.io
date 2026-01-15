/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      borderRadius: {
        xl: "var(--radius)",
      },
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        window: "rgb(var(--window) / <alpha-value>)",
        widget: "rgb(var(--widget) / <alpha-value>)",
        section: "rgb(var(--section) / <alpha-value>)",
        grey98: "rgb(var(--grey-98) / <alpha-value>)",
        darkgrey: "rgb(var(--dark-grey) / <alpha-value>)",
        text: "rgb(var(--text) / <alpha-value>)",
        primary: "rgb(var(--primary) / <alpha-value>)",
        secondary: "rgb(var(--secondary) / <alpha-value>)",
        tertiary: "rgb(var(--tertiary) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        pixel: ["Pixelify Sans", "monospace"],
      },
      fontSize: {
        // matches your Figma list: size / line-height
        h1: ["32px", "48px"],
        p24: ["24px", "36px"],
        p20: ["20px", "30px"],
        p16: ["16px", "24px"],
        p14: ["14px", "21px"],
        p12: ["12px", "18px"],
      },
    },
  },
  plugins: [],
};

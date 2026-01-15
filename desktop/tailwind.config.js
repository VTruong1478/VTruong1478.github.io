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
        bg: "var(--bg)",
        window: "var(--window)",
        widget: "var(--widget)",
        section: "var(--section)",
        grey98: "var(--grey-98)",
        darkgrey: "var(--dark-grey)",
        text: "var(--text)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        border: "var(--border)",
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

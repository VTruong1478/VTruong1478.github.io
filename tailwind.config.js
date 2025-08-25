/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#55A1D1", // light blue
        secondary: "#ccc0f4", // light purple
        accent: "#2FB6A6", // light teal
        background: "#f9fafb", // very light gray for background
        text: "#2C2F33", // dark gray for text
        secondaryText: "#6B7280", // medium gray for secondary text
        card: "#D3D8D9", // very light gray for cards
      },
    },
  },
  plugins: [],
};

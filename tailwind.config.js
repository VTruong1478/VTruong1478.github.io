/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4faec7", // light blue
        secondary: "#ccc0f4", // light purple
        tertiary: "#9d2feb", //
        text: "#2C2F33", // dark gray for text
        secondaryText: "#6B7280", // medium gray for secondary text
        background: "#f9fafb", // very light gray for background
        accent: "#83d3c7", // light teal
        accentDark: "#14b8a5", // darker teal
        card: "#daeaef" // very light blue for cards
      },
    },
  },
  plugins: [],
}

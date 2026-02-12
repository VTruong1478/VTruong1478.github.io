// Breakpoints (match Figma)
// - mobile: 375px–767px
// - tablet: 768px–1023px
// - small desktop: 1024px–1439px
// - large desktop: 1440px+
//
// Usage pattern:
// - default styles = mobile-first (applies below 768px)
// - md: tablet and up (>=768px)
// - lg: small desktop and up (>=1024px)
// - xl: large desktop and up (>=1440px)

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      borderRadius: {
        m: "var(--radius)",
      },
      colors: {
        bg: "var(--background)",
        window: "var(--window-background)",
        widget: "var(--widget-background)",
        grey98: "var(--98-grey)",
        darkgrey: "var(--dark-grey)",
        text: "var(--text)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        white: "var(--white)",
        black: "var(--black)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        pixel: ["Pixelify Sans", "monospace"],
      },
    },
  },
  plugins: [],
};

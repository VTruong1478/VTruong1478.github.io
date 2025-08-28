/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontSize: theme("fontSize.4xl")[0],
              fontWeight: "700",
              lineHeight: theme("lineHeight.tight"),
              marginBottom: theme("spacing.4"),
              color: theme("colors.gray.900"),
            },
            h2: {
              fontSize: theme("fontSize.2xl")[0],
              fontWeight: "600",
              marginTop: theme("spacing.8"),
              marginBottom: theme("spacing.3"),
              color: theme("colors.gray.800"),
            },
            h3: {
              fontSize: theme("fontSize.xl")[0],
              fontWeight: "600",
              marginTop: theme("spacing.6"),
              marginBottom: theme("spacing.2"),
              color: theme("colors.gray.800"),
            },
            p: {
              marginTop: theme("spacing.4"),
              marginBottom: theme("spacing.4"),
              lineHeight: theme("lineHeight.relaxed"),
              color: theme("colors.gray.700"),
            },
            strong: {
              fontWeight: "600",
              color: theme("colors.gray.900"),
            },
            a: {
              color: theme("colors.blue.600"),
              fontWeight: "500",
              textDecoration: "underline",
              "&:hover": {
                color: theme("colors.blue.800"),
              },
            },
            ul: {
              paddingLeft: theme("spacing.6"),
              listStyleType: "disc",
              marginTop: theme("spacing.4"),
              marginBottom: theme("spacing.4"),
            },
            li: {
              marginTop: theme("spacing.2"),
              marginBottom: theme("spacing.2"),
            },
            blockquote: {
              fontStyle: "italic",
              borderLeft: `4px solid ${theme("colors.gray.300")}`,
              paddingLeft: theme("spacing.4"),
              color: theme("colors.gray.600"),
            },
          },
        },
      }),
      colors: {
        primary: "#55A1D1", // light blue
        primaryShade: "#3C71A2", // 30% darker

        secondary: "#8F7EC9", // light purple
        secondaryShade: "#655B91", // 30% darker

        accent: "#2FB6A6", // light teal
        accentShade: "#227F75", // 30% darker
        // Text
        text: "#2C2F33", // dark gray for text
        secondaryText: "#6B7280", // medium gray for secondary text
        // Areas
        background: "#f9fafb", // very light gray for background
        card: "#dce9f4", // very light purple for cards
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

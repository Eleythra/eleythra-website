/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0F1B2D",
          "dark-section": "#0B1320",
          accent: "#00A8E8",
          "accent-hover": "#0093CC",
          highlight: "#6C63FF",
          bg: "#F6F8FB",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-sora)", "var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

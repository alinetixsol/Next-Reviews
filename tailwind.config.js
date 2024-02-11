/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{jsx,tsx}", "./components/**/*.{jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-exo2)", "sans-serif"],
        Orbitron: ["var(--font-orbitron)", "sans-serif"],
        // Pacifico: ["var(--font-pacifico)", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

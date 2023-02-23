/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1.2rem",
      xl: "1.25rem",
      "2xl": "1.8rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {
      fontFamily: {
        Playfair: ["Playfair Display"],
      },
    },
  },
  plugins: [],
};

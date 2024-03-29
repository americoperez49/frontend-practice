/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: { mobile: "375px", desktop: "1440px" },
    colors: {
      White: "hsl(0,0%,100%)",
      "light-gray": "hsl(212,45%,89%)",
      "grayish-blue": "hsl(220,15%,55%)",
      "dark-blue": "hsl(218,44%,22%)",
    },
    fontFamily: {
      outfit: "Outfit, sans-serif",
    },
    extend: {},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        DMsans: ["DM Sans", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#E92928",
        secondary: "#E0E5F2",
        tertiary: "#2B3674",
      },
    },
  },
  plugins: [],
};

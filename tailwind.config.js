/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        medium: ["Red Hat", "sans-serif"],
        bold: ["Red Hat Bold", "Red Hat", "sans-serif"],
        black: ["Red Hat Black", "Red Hat", "sans-serif"],
      },
      colors: {
        paleBlue: "hsl(225, 100%, 94%)",
        brightBlue: "hsl(245, 75%, 52%)",
        veryPaleBlue: "hsl(225, 100%, 98%)",
        desaturatedBlue: "hsl(224, 23%, 55%)",
        darkBlue: "hsl(223, 47%, 23%)",
      },
    },
  },
  plugins: [],
};

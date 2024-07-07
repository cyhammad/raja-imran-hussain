/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FCFFE4",
        orange: "#FDC068",
        gray: "#8F8F8F",
        darkGray: "#2B2B2B"
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primary1: "#000000",
        primary2: "#ffffff",
        secondary1: "#cd0f03",
        secondary2: "#A6DBFC",
      },
      fontFamily: {
        Lucky: ["Luckiest Guy", "cursive"],
        Source: ["Source Sans 3", "sans-serif"],
        Expose: ["EXPOSE"],
        Hevyhea: ["HEAVYHEA"],
        Markin: ["MARKIN"],
        Optima: ["OPTIMA"],
        Hatty: ["HATTY"],
        Menu: ["MENU"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#5BB5A2",
          secondary: "#E8F2EE",
          accent: "#F1DFDF",
          neutral: "#D6AE7B",
          main: "#DFEAF1",
         
          "base-100": "#ffffff",
        },
      },
      "light",
      "cupcake",
    ],
  },
};
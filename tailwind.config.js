/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Mitr: ["Mitr", "sans-serif"],
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0D1B46",
          secondary: "#65BCBF",
          accent: "#37cdbe",
          neutral: "#000000",
          "base-100": "#ffffff",
        },
        draktheme: {
          primary: "#1f41ab",
          secondary: "#65BCBF",
          accent: "#37cdbe",
          neutral: "#000000",
          "base-100": "#2d2d2d",
        },
      },
    ],
  },
};

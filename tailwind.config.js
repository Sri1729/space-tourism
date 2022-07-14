/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      sm: "420px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      backgroundImage: {
        homeDesktopBG: "url('/src/assets/background-home-desktop.jpg')",
        homeTabBG: "url('/src/assets/background-home-tablet.jpg')",
        homeMobileBG: "url('/src/assets/background-home-mobile.jpg')",
      },
      colors: {
        headerMenuBgColor: "rgba(255, 255, 255, 0.04)",
      },
    },
  },
  plugins: [],
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
};

/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    screens: {
      sm: "420px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      fontFamily: {
        sans: ["Barlow"],
        heading: ["Bellefair"],
      },
      backgroundImage: {
        homeDesktopBG: "url('/src/assets/background/home-desktop.jpg')",
        homeTabBG: "url('/src/assets/background/home-tablet.jpg')",
        homeMobileBG: "url('/src/assets/background/home-mobile.jpg')",
        destinationDesktopBG:
          "url('/src/assets/background/destination-desktop.jpg')",
        destinationTabBG:
          "url('/src/assets/background/destination-tablet.jpg')",
        destinationMobileBG:
          "url('/src/assets/background/destination-mobile.jpg')",
        crewDesktopBG: "url('/src/assets/background/crew-desktop.jpg')",
        crewTabBG: "url('/src/assets/background/crew-tablet.jpg')",
        crewMobileBG: "url('/src/assets/background/crew-mobile.jpg')",
        technologyDesktopBG:
          "url('/src/assets/background/technology-desktop.jpg')",
        technologyTabBG: "url('/src/assets/background/technology-tablet.jpg')",
        technologyMobileBG:
          "url('/src/assets/background/technology-mobile.jpg')",
      },
      colors: {
        headerMenuBgColor: "rgba(255, 255, 255, 0.04)",
        textPrimary: "#ffffff",
        textSecondary: "#D0D6F9",
        divider: "#383B4B",
      },
    },
  },
  plugins: [],
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
};

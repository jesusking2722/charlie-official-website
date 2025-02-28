/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      gradientColorStops: {
        "custom-1": "#CE89CA",
        "custom-2": "#5885BF",
        "custom-3": "#7258DF",
        "custom-4": "#75EEA3",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right, rgba(0, 0, 0, 0.7) 15%, rgba(206, 137, 202, 0.3) 50%, rgba(88, 133, 191, 0.4) 70%, rgba(114, 88, 223, 0.1) 85%, rgba(0, 0, 0, 0.1) 100%)",
        "custom-gradient-button":
          "linear-gradient(90deg, #CE89CA 0%, #5885BF 33.33%, #7258DF 66.67%, #75EEA3 100%)",
      },
     
      backgroundOpacity: {
        50: "0.5",
        75: "0.75",
        90: "0.9",
      },
      clipPath: {
        custom:
          "olypgon(0% 0.5em, 0.5em 0%, 100% 0%, 100% calc(100% - 0.5em), calc(100% - 0.5em) 100%, 0 100%)",
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};


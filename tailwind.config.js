/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enables class-based dark mode
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        gradient: "gradient 8s ease infinite",
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      colors: {
        "primary-color": "#4ade80", // Neon green
        "secondary-color": "#9333ea", // Purple
        "bg-color": "#10172F", // Dark background
        "form-bg": "rgba(255, 255, 255, 0.1)", // Glass effect background
        "text-color": "#FFFFFF", // White text
      },
    },
  },
  plugins: [],
};

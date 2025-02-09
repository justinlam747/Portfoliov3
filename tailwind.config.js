/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        pulse: "pulse 3s cubic-bezier(0.4, 0.2, 0.8, 1) infinite", // Slowed to 3 seconds
      },
      colors: {
        customDark: "#0e100f", // You can name it anything you like
        customWhite: "#ffffe3",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
      },
    },
  },
  plugins: [],
};

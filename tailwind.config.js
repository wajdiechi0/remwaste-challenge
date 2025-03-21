/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px", 
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px"
    },
    extend: {
      colors: {
        dark: {
          900: "#121212",
          700: "#1C1C1C",
          600: "#2a2a2a",
          400: "#394150",
        },
        blue: {
          700: "#0d2984",
          600: "#133aba",
        },
      },
    },
  },
  plugins: [],
};

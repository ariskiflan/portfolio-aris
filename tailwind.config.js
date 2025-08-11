/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1DA1F2", // contoh warna custom
        highlight: "#004A99",
        secondary: {
          light: "#E5F6FF",
          DEFAULT: "#0A95FF",
          dark: "#004A99",
        },
      },
    },
  },
  plugins: [],
};

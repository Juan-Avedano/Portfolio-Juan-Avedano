/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // <--- ESTA ES LA CLAVE
  theme: {
    extend: {
      colors: {
        enterprise: {
          blue: "#0052CC",
          dark: "#172B4D",
        },
        navy: {
          900: "#0f172a", // El color que usamos en App.tsx
        },
      },
    },
  },
  plugins: [],
};

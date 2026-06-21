/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: "#111118",
        base: "#0a0a0f",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(109,40,217,0.25), transparent)",
      },
      animation: {
        "bounce-slow": "bounce 2s infinite",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

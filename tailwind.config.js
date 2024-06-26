/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        blue: {
          primary: "#0097D9",
        },
        red: {
          primary: "#ff022c",
        },
      },
      fontFamily: {
        bebas: ["Bebas Neue Bold", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        dela: ["Dela Gothic One", "sans-serif"],
      },
    },
  },
  plugins: [],
};

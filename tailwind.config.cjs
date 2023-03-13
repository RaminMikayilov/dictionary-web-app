/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#2563eb",
        "custom-gray": "#64748b",
        "custom-white": "#e2e8f0",
      },
    },
  },
  plugins: [],
};

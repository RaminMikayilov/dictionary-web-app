/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#2563eb",
        "custom-gray": "#64748b",
      },
    },
  },
  plugins: [],
};

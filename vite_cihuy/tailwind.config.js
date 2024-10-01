/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundSize: {
        "custom-small": "400px 300px", // Custom size for background
      },
    },
  },
  plugins: [],
};

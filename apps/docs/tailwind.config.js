const config = require("@org/tailwind-config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...config,
  content: ["src/**/*.{ts,tsx}", "../../packages/core/src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#58B2DC",
      },
    },
  },
};

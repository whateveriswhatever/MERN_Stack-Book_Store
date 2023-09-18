// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   purge: ["./src/**/*.html", "./src/**/*.js"],
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

// module.exports = {
//   mode: "jit",
//   purge: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
//   darkMode: false,
//   theme: {},
//   variants: {},
//   plugins: [],
// };

// module.exports = {
//   // ...
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//     "postcss.config": {}, // Update the import statement
//   },
// };

// module.exports = {
//   // ...
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//     "postcss.config": {}, // Update the import statement
//   },
// };

// module.exports = {
//   // ...
//   plugins: [
//     require("tailwindcss"),
//     require("autoprefixer"),
//     // Add any additional PostCSS plugins here
//   ],
// };

// module.exports = {
//   // ...
//   plugins: [
//     require("tailwindcss"),
//     require("autoprefixer"),
//     require("./postcss.config.cjs"), // Update the import statement
//     // Add any additional PostCSS plugins here
//   ],
// };

import postcssConfig from "./postcss.config.cjs";

module.exports = {
  // ...
  content: ["./pages/**/*.{html, js}", "./components/**/*.{html,js}"],
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    postcssConfig,
    // Add any additional PostCSS plugins here
  ],
};

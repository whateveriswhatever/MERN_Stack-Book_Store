// export default {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// };

// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// };

// module.exports = {
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

module.exports = {
  plugins: {
    // Add your PostCSS plugins here
    "postcss-import": {},
    "postcss-preset-env": {},
    tailwindcss: {},
    autoprefixer: {},
  },
};

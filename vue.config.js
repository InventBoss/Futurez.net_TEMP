/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */

module.exports = {
  pages: {
    index: {
      title: "Futurez - Become a Capitalist",
      entry: "./src/main.js",
      template: "public/index.html",
      filename: "index.html",
    },
    updates: {
      title: "Futurez - Update Stream",
      entry: "./src/pages/updates/main.js",
      template: "public/index.html",
      filename: "updates.html",
    },
  },
};

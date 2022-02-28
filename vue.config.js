/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */

module.exports = {
  pages: {
    index: {
      entry: "./src/main.js",
      template: "public/index.html",
      filename: "index.html",
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
    updates: {
      entry: "./src/pages/updates/main.js",
      template: "public/index.html",
      filename: "updates.html",
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
  },
};

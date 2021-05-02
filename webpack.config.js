const path = require("path");

module.exports = {
  entry: {
    index: [
      "./public/js/autoFill.js",
      "./public/js/quillConfig.js",
      "./public/js/validateForm.js",
      "./public/js/updateForm.js",
    ],
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/public/dist",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

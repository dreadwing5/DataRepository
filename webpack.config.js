const path = require("path");

module.exports = {
  mode: "development",
  devtool: false,
  entry: {
    index: [
      "./public/js/autoFill.js",
      "./public/js/quillConfig.js",
      "./public/js/validateForm.js",
      "./public/js/updateForm.js",
      "./public/js/modalWindow.js",
      "./public/js/utils.js",
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

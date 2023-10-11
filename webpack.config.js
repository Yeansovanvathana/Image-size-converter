const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  // mode: "development",
  entry: {
    popup: "./src/popup-page/index.js",
    // sandbox: "./src/js/tesseract.js",
  },
  resolve: {
    extensions: [".*", ".js", ".jsx", ".json"],
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "./public/manifest.json", to: "./manifest.json" },
        { from: "./src/popup-page/popup.html", to: "./popup.html" },
        { from: "./src/popup-page/sandbox.html", to: "./sandbox.html" },
        { from: "./public/img/icon22.png", to: "./img/icon22.png" },
        { from: "./public/img/icon128.png", to: "./img/icon128.png" },
        { from: "./public/img/icon48.png", to: "./img/icon48.png" },
        { from: "./public/img/icon16.png", to: "./img/icon16.png" },
      ],
    }),
  ],
};

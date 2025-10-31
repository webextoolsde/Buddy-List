const path = require("path");

const config = {
  mode: "production",
  entry: "./src/buddy-list.js",
  output: {
    path: path.resolve(__dirname, "src/build"),
    filename: "buddy-list.js",
    publicPath: "build/"
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;

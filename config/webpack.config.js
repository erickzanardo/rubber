const webpack = require("webpack")

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "./public/js/game.js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/
    }]
  },
  plugins: [new webpack.EnvironmentPlugin(["GAME_PLATFORM"])]
};

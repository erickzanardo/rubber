const webpack = require("webpack")
const config = require("../config/webpack.config")
const { runRubberBin } = require("./utils")

module.exports = platform => {
  if (platform) {
    process.env.GAME_PLATFORM = platform
    webpack(config).run((err, stats) => {
      if (err) {
        console.log("Could not build project", err)
      } else {
        console.log("Build complete!")
      }
    })
  } else {
    throw "No platform specified"
  }
}

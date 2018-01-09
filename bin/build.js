const webpack = require("webpack")
const config = require("../config/webpack.config")
const { runRubberBin } = require("./utils")

const validPlatforms = ["browser", "android"]

module.exports = (platform, ...params) => new Promise((resolve, reject) => {
  console.log("Building game")
  if (platform) {
    if (validPlatforms.indexOf(platform) === -1) {
      console.log(`${platform} is not a valid platform`)
      return
    }

    if (params.indexOf("--debug") !== -1) {
      process.env.DEBUG = true
    }

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
})

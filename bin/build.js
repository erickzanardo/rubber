const { runRubberBin } = require("./utils")

module.exports = platform => {
  if (platform) {
    process.env.GAME_PLATFORM = platform
    runRubberBin("webpack")
    console.log("Rubber build complete")
  } else {
    throw "No platform specified"
  }
}

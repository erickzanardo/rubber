const { runRubber, runRubberBin } = require("./utils")

module.exports = () => {
  process.env.GAME_PLATFORM = "browser"
  runRubber("build")
  runRubberBin("serve public")
}


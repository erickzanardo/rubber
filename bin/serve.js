const { runRubber, runRubberBin } = require("./utils")

module.exports = () => {
  runRubber("build browser")
  runRubberBin("serve public")
}


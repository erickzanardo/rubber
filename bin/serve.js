const { runRubber, runRubberBin } = require("./utils")

module.exports = (...params) => {
  runRubber(`build browser ${params.join(" ")}`)
  runRubberBin("serve public")
}


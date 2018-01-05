const { runRubberBin } = require("./utils")

module.exports = () => {
  runRubberBin("webpack")
  console.log("Rubber build complete")
}

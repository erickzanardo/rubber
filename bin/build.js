const { runRubberBin } = require("./utils")

module.exports = () => {
  runRubberBin("webpack").then(() => console.log("Rubber build complete"));
}

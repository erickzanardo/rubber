const { exec } = require("child_process");

module.exports = () => {
  exec("webpack", (err, stdout, stderr) => {
    if (err) {
      return console.error(err)
    }

    console.log("Rubber build complete")
  })
}

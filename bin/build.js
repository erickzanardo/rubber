const { exec } = require("child_process");

module.exports = () => {
  exec("./node_modules/rubber/node_modules/.bin/webpack", (err, stdout, stderr) => {
    if (err) {
      return console.log(stdout)
    }

    console.log(stdout)
    console.log("Rubber build complete")
  })
}

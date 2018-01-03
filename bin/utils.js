const { spawn } = require("child_process");

module.exports = {
  runRubberBin: (command, ...args) => new Promise((resolve, reject) => {
    const s = spawn(`./node_modules/rubber/node_modules/.bin/${command}`, args)

    s.stdout.on("data", data => console.log(data.toString()))
    s.stderr.on("data", data => console.log(data.toString()))
    s.on("exit", code => {
      if (code == 0) resolve()
      else reject()
    })
  })
}

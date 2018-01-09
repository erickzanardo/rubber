const shell = require("shelljs");

const homedir = process.cwd()

module.exports = {
  rm: path => shell.rm("-rf", path),
  cp: (from, to) => {
    const result = shell.cp("-Rf", from, to)

    if (result.stdout) {
      console.log(result.stdout)
    }

    if (result.stderr) {
      console.log(result.stderr)
    }

    return result
  },

  runRubber: command => {
    const result = shell.exec(`rubber ${command}`)

    if (result.stdout) {
      console.log(result.stdout)
    }

    if (result.stderr) {
      console.log(result.stderr)
    }

    return result
  },
  runRubberBin: (command, folder) => {
    if (folder) {
      shell.cd(folder)
    }

    const result = shell.exec(`${homedir}/node_modules/rubber/node_modules/.bin/${command}`)

    if (result.stdout) {
      console.log(result.stdout)
    }

    if (result.stderr) {
      console.log(result.stderr)
    }

    // Reset location
    shell.cd(homedir)

    return result
  }
}

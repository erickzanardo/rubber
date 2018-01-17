const fs = require("fs")
const prompt = require("prompt-sync")()

const { cp, rm, runRubberBin } = require("../utils")

const build = require("../build")

module.exports = (platform, ...params) => {
  if (!fs.existsSync("./platforms/mobile")) {
    const id = prompt("Game mobile id?")
    const name = prompt("Game mobile name?")

    runRubberBin(`cordova create ./platforms/mobile ${id} ${name}`)
  }

  if (!fs.existsSync(`./platforms/mobile/platforms/${platform}`)) {
    runRubberBin(`cordova platform add ${platform}`, "./platforms/mobile")
  }

  return build(platform, ...params).then(() => {
    rm("./platforms/mobile/www/*")

    // TODO We must add the cordova.js to the index.html file
    cp("./public/*", "./platforms/mobile/www")

    runRubberBin(`cordova run ${platform}`, "./platforms/mobile")
  })
}

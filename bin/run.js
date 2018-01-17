const fs = require("fs")

const runMobile = require("./run/mobile")

module.exports = (platform, ...params) => {
  if (!fs.existsSync("./platforms")) fs.mkdirSync("./platforms")

  if (platform == "android" || platform == "ios") {
    runMobile(platform, ...params).then(() => console.log("Done"))
  }
}

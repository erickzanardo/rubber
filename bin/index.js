#!/usr/bin/env node

const build = require("./build")
const serve = require("./serve")
const run = require("./run")

const [_, bin, task, param] = process.argv

switch(task) {
  case "serve":
    return serve()
  case "run":
    return run(param)
  case "build":
    return build(param)
  default:
    console.log("No task specified")
}

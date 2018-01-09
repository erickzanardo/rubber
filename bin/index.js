#!/usr/bin/env node

const build = require("./build")
const serve = require("./serve")
const run = require("./run")

const [_, bin, task, ...params] = process.argv

switch(task) {
  case "serve":
    return serve(...params)
  case "run":
    return run(...params)
  case "build":
    return build(...params)
  default:
    console.log("No task specified")
}

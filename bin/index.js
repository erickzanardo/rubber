#!/usr/bin/env node

const build = require("./build")
const serve = require("./serve")

const [_, bin, task] = process.argv

switch(task) {
  case "serve":
    return serve()
  default:
    return build()
}

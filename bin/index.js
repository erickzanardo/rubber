#!/usr/bin/env node

var program = require("commander");

const build = require("./build.js")

program
  .version("1.0.0")
  .parse(process.argv);

build()

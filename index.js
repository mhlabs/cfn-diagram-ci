#!/usr/bin/env node
const Pageres = require("pageres");
process.argv.push("--ci-mode");
require("@mhlabs/cfn-diagram/index");
const tempDir = require("temp-dir");
const path = require("path");

if (process.argv.includes("html")) {
  new Pageres({ filename: "cfn-diagram" })
    .src(`file://${path.join(tempDir, "cfn-diagram", "index.html")}`, ["1024x768"], {
      crop: true,
    })
    .dest(".")
    .run();
}

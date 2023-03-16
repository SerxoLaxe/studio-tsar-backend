const express = require("express");

const main_router = express.Router();

main_router
  .use("/client/:id?", require("./clients"))
  .use("/artist/:id?", require("./artists"))
  .use("/studio/:id?", require("./studios"));

  module.exports = main_router
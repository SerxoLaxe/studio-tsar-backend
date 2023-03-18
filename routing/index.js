const express = require("express");

const api_router = express
  .Router({ mergeParams: true })
  .use("/clients", require("./clients"))
  .use("/artists", require("./artists"))
  .use("/studios", require("./studios"));

const main_router = express
  .Router({ mergeParams: true })
  .use("/api", api_router);

module.exports = main_router;

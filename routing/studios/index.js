const express = require("express");
const studios = require("../../controllers/studios");

const id_router = express
  .Router({ mergeParams: true })
  .put("/edit", studios.edit)
  .delete("/remove", studios.remove)
  .use("/projects", require("./projects"));

const studios_router = express
  .Router({ mergeParams: true })
  .post("/create", studios.create)
  .get("/search", studios.search)
  .use("/:studioId", id_router)

module.exports = studios_router;

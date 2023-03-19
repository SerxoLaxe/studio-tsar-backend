const express = require("express");
const studios = require("./controllers");

const id_router = express
  .Router({ mergeParams: true })
  .put("/", studios.edit)
  .delete("/", studios.remove)
  .get('/', studios.getById)
  .use("/projects", require("./components/projects/routes"))
  .use("/clients", require("./components/clients/routes"))
  .use("/artists", require("./components/artists/routes"))
  .use("/events", require("./components/events/routes"));

const studios_router = express
  .Router({ mergeParams: true })
  .post("/", studios.create)
  .get("/search", studios.search)
  .use("/:studioId", id_router);

module.exports = studios_router;
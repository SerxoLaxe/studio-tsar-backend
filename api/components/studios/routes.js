const express = require("express");
const studios = require("./controllers");

const id_router = express
  .Router({ mergeParams: true })
  .put("/edit", studios.edit)
  .delete("/remove", studios.remove)
  .use("/projects", require("./components/projects/routes"))
  .use("/clients", require("./components/clients/routes"))
  .use("/artists", require("./components/artists/routes"))
  .use("/events", require("./components/events/routes"));

const studios_router = express
  .Router({ mergeParams: true })
  .post("/create", studios.create)
  .get("/search", studios.search)
  .use("/:studioId", id_router);

module.exports = studios_router;
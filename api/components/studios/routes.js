const express = require("express");
const controllers = require("./controllers");

const id_router = express
  .Router({ mergeParams: true })
  .put("/", controllers.edit)
  .delete("/", controllers.remove)
  .get('/', controllers.getById)
  .use("/projects", require("./components/projects/routes"))
  .use("/clients", require("./components/clients/routes"))
  .use("/artists", require("./components/artists/routes"))
  .use("/events", require("./components/events/routes"));

const studiosRouter = express
  .Router({ mergeParams: true })
  .post("/", controllers.create)
  .get("/search", controllers.search)
  .use("/:studioId", id_router);

module.exports = studiosRouter;
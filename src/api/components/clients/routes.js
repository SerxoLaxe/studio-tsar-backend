const express = require("express");
const clients = require("./handlers");

const idRouter = express
  .Router({ mergeParams: true })
  .get('/', clients.getById)
  .put("/", clients.edit)
  .put("/validate", clients.validate)
  .put("/preferences", clients.edit_preferences)
  .delete("/", clients.remove);

const clientsRouter = express
  .Router({ mergeParams: true })
  .post("/", clients.register)
  .get('/search', clients.search)
  .use("/:clientId", idRouter);

module.exports = clientsRouter;

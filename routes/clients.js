const express = require("express");
const clients = require("../controllers/users/clients");

const idRouter = express
  .Router({ mergeParams: true })
  .put("/edit", clients.edit)
  .put("/validate", clients.validate)
  .put("/preferences", clients.edit_preferences)
  .delete("/remove", clients.remove);

const clientsRouter = express
  .Router({ mergeParams: true })
  .post("/create", clients.create)
  .use("/:clientId", idRouter);

module.exports = clientsRouter;

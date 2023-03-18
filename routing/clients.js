const express = require("express");
const clients = require("../controllers/users/clients");

const id_router = express
  .Router({ mergeParams: true })
  .put("/edit", clients.edit)
  .put("/validate", clients.validate)
  .put("/preferences", clients.edit_preferences)
  .delete("/remove", clients.remove);

const clients_router = express
  .Router({ mergeParams: true })
  .post("/create", clients.create)
  .use("/:clientId", id_router);

module.exports = clients_router;

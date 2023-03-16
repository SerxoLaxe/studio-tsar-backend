const express = require('express')
const clients_router = express.Router({ mergeParams: true });
const clients = require("../controllers/users/clients");
clients_router
  .post("/create", clients.create)
  .put("/edit", clients.edit)
  .put("/validate", clients.validate)
  .put("/preferences", clients.edit_preferences)
  .delete("/remove", clients.remove);

  module.exports = clients_router
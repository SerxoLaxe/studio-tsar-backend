const express = require('express')
const artists_router = express.Router({ mergeParams: true });
const artists = require("../controllers/users/artists");
artists_router
  .post("/create", artists.create)
  .put("/edit", artists.edit)
  .put("/validate", artists.validate)
  .put("/preferences")
  .delete("/remove", artists.remove);

module.exports = artists_router
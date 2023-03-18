const Router = require("express").Router;
const artists = require("./controllers");

const idRouter = Router({ mergeParams: true })
  .put("/edit", artists.edit)
  .put("/validate", artists.validate)
  .put("/preferences")
  .delete("/remove", artists.remove);

const artistsRouter = Router({ mergeParams: true })
  .post("/create", artists.create)
  .use("/:artistId", idRouter);

module.exports = artistsRouter;

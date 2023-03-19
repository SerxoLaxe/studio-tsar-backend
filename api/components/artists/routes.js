const Router = require("express").Router;
const artists = require("./handlers");

const idRouter = Router({ mergeParams: true })
  .put("/", artists.edit)
  .put("/validate", artists.validate)
  .put("/preferences")
  .delete("/", artists.remove)
  .get("/", artists.getById);

const artistsRouter = Router({ mergeParams: true })
  .post("/", artists.create)
  .get("/search", artists.search)
  .use("/:artistId", idRouter);

module.exports = artistsRouter;

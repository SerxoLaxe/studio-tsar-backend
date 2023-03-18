const Router = require("express").Router;
const events = require("./controllers");

const idRouter = Router({ mergeParams: true })
  .put("/edit", events.edit)
  .delete("/remove", events.remove);

const eventsRouter = Router({ mergeParams: true })
  .post("/create", events.create)
  .get("/search", events.search)
  .use('/:eventId', idRouter)

module.exports = eventsRouter;

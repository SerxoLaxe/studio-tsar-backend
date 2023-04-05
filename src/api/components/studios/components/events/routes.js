const Router = require("express").Router;
const events = require("./handlers");

const idRouter = Router({ mergeParams: true })
  .put("/", events.edit)
  .delete("/", events.remove)
  .get('/', events.getById);

const eventsRouter = Router({ mergeParams: true })
  .post("/", events.create)
  .get("/search", events.search)
  .use('/:eventId', idRouter)

module.exports = eventsRouter;

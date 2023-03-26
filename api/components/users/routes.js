const Router = require("express").Router;
const { validate } = require("express-validation");
const handlers = require("./handlers");

const idRouter = Router({ mergeParams: true })
  .put("/", handlers.edit)
  .put("/validate", handlers.validate)
  .put("/preferences")
  .delete("/", handlers.remove)
  .get("/", handlers.getById);

const usersRouter = Router({ mergeParams: true })
  .post("/", validate(handlers.register.validation, {}, {}) ,handlers.register.controller)
  .get("/search", handlers.search)
  .use("/:userId", idRouter);

module.exports = usersRouter;

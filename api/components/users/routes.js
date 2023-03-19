const Router = require("express").Router;
const users = require("./handlers");

const idRouter = Router({ mergeParams: true })
  .put("/", users.edit)
  .put("/validate", users.validate)
  .put("/preferences")
  .delete("/", users.remove)
  .get("/", users.getById);

const usersRouter = Router({ mergeParams: true })
  .post("/", users.register)
  .get("/search", users.search)
  .use("/:userId", idRouter);

module.exports = usersRouter;

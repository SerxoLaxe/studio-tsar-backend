const Router = require("express").Router;
const { validate } = require("express-validation");
const handlers = require("./handlers");
const commonValidations = require('./validations')

const idRouter = Router({ mergeParams: true })
  .put("/", validate(handlers.edit.validation), handlers.edit.handler)
  .put("/validate", handlers.validate)
  .put("/preferences")
  .delete("/", handlers.remove)
  .get("/", handlers.getById.handler);

const usersRouter = Router({ mergeParams: true })
  .post("/", validate(handlers.register.validation) ,handlers.register.handler)
  .get("/search", handlers.search)
  .use("/:userId", validate(commonValidations.idSchema), idRouter);

module.exports = usersRouter;

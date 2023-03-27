const Router = require("express").Router;
const { validate } = require("express-validation");
const controllers = require("./controllers");
const commonValidations = require('./validations')
const md = require('./middlewares')

const idRouter = Router({ mergeParams: true })
  .put("/", validate(controllers.edit.validation), controllers.edit.handler)
  .put("/validate", controllers.validate)
  .put("/preferences")
  .delete("/", controllers.remove)
  .get("/", controllers.getById.handler);

const usersRouter = Router({ mergeParams: true })
  .post("/", validate(controllers.register.validation) ,controllers.register.handler)
  .get("/search", controllers.search)
  .use("/:userId", validate(commonValidations.idSchema), md.userExists, idRouter);

module.exports = usersRouter;

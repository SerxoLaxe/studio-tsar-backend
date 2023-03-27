const Router = require("express").Router;
const { validate } = require("express-validation");
const ctrl = require("./controllers");
const validations = require("./validations");
const md = require("./middlewares");

const idRouter = Router({ mergeParams: true })
  .put(
    "/",
    validate(ctrl.edit.validation),
    md.isUserVerified,
    ctrl.edit.handler
  )
  .put(
    "/verify/:verificationCode",
    validate(ctrl.verify.validation),
    ctrl.verify.handler
  )
  .delete("/", ctrl.remove.handler)
  .get("/", ctrl.getById.handler);

const usersRouter = Router({ mergeParams: true })
  .post("/", validate(ctrl.register.validation), ctrl.register.handler)
  .get("/search", validate(ctrl.search.validation), ctrl.search.handler)
  .use(
    "/:userId",
    validate(validations.idSchema),
    md.userExists,
    md.isUserDeleted,
    md.isUserInactive,
    idRouter
  );

module.exports = usersRouter;

const Router = require("express").Router;
const { validate } = require("express-validation");

//Controllers
const {
  edit,
  register,
  remove,
  verify,
  search,
  getById,
} = require("./controllers");

//Components
const {auth} = require('./components')

//middlewares
const {
  userExists,
  isUserDeleted,
  isUserInactive,
  isUserVerified,
} = require("./middlewares");

//validations
const { idSchema } = require("./validations");

const idRouter = Router({ mergeParams: true })
  .put("/", validate(edit.validation), isUserVerified, edit.handler)
  .put("/verify/:verificationCode", validate(verify.validation), verify.handler)
  .delete("/", remove.handler)
  .get("/", getById.handler);

const usersRouter = Router({ mergeParams: true })
  .post("/", validate(register.validation), register.handler)
  .get("/search", validate(search.validation), search.handler)
  .use('/auth', auth.routes)
  .use(
    "/:userId",
    validate(idSchema),
    userExists,
    isUserDeleted,
    isUserInactive,
    idRouter
  );

module.exports = usersRouter;

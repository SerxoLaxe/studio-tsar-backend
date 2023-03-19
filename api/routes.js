const Router = require("express").Router;

const api_router = Router({ mergeParams: true })
  .use("/clients", require("./components/clients/routes"))
  .use("/users", require("./components/users/routes"))
  .use("/studios", require("./components/studios/routes"));

const main_router = Router({ mergeParams: true })
  .use("/api", api_router);

module.exports = main_router;
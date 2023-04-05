const Router = require("express").Router;
const {clients, users, studios} = require('./components')

const api_router = Router({ mergeParams: true })
  .use("/clients", clients.routes)
  .use("/users", users.routes)
  .use("/studios", studios.routes);

const main_router = Router({ mergeParams: true }).use("/api", api_router);

module.exports = main_router;

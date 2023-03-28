const Router = require("express").Router;
const ctrl = require("./handlers");
const {appointments, bills, documents} = require('./components')

const idRouter = Router({ mergeParams: true })
  .put("/", ctrl.edit)
  .delete("/", ctrl.remove)
  .use("/appointments", appointments.routes)
  .use("/bills", bills.routes)
  .use("/documents", documents.routes);

const projectsRouter = Router({ mergeParams: true })
  .get("/search", ctrl.search)
  .post("/", ctrl.create)
  .use("/:projectId", idRouter);

module.exports = projectsRouter;

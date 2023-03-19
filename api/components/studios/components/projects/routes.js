const Router = require("express").Router;
const projects = require("./handlers");

const idRouter = Router({ mergeParams: true })
  .put("/", projects.edit)
  .delete("/", projects.remove)
  .use("/appointments", require("./components/appointment/routes"))
  .use("/bills", require("./components/bills/routes"))
  .use("/documents", require("./components/documents/routes"));

const projectsRouter = Router({ mergeParams: true })
  .get("/search", projects.search)
  .post("/", projects.create)
  .use("/:projectId", idRouter);

module.exports = projectsRouter;

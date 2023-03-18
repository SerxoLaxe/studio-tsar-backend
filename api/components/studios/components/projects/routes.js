const Router = require("express").Router;
const projects = require("./controllers");

const idRouter = Router({ mergeParams: true })
  .put("/edit", projects.edit)
  .delete("/remove", projects.remove)
  .use("/appointments", require("./components/appointment/routes"))
  .use("/bills", require("./components/bills/routes"))
  .use("/documents", require("./components/documents/routes"));

const projectsRouter = Router({ mergeParams: true })
  .get("/search", projects.search)
  .post("/create", projects.create)
  .use("/:projectId", idRouter);

module.exports = projectsRouter;

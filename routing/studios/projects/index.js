const express = require("express");
const projects = require("../../../controllers/studios/projects");
const appointments = require("./appointments");
const bills = require("./bills");
const documents = require("./documents");
const projects_router = express.Router({ mergeParams: true });
const id_router = express.Router({ mergeParams: true });

id_router
  .put("/edit", projects.edit)
  .delete("/remove", projects.remove)
  .use("/appointments", appointments)
  .use('/bills', bills)
  .use('/documents', documents)

projects_router
  .get("/search", projects.search)
  .post("/create", projects.create)
  .use("/:projectId", id_router);

module.exports = projects_router;

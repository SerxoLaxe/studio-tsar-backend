const express = require("express");
const studios_router = express.Router({ mergeParams: true });
const studios = require("../controllers/studios");

studios_router
  .post("/create", studios.create)
  .put("/edit", studios.edit)
  .get("/search", studios.search)
  .delete("/remove", studios.remove)
  .use(
    "/project/:project_id?",
    express
      .Router({ mergeParams: true })
      .post("/create", studios.projects.create)
  );

module.exports = studios_router;

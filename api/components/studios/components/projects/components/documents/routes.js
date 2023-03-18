const express = require("express");
const documents = require("./controllers");

const idRouter = express
  .Router({ mergeParams: true })
  .put("/edit", documents.edit)
  .delete("/delete", documents.remove);

const documentsRouter = express
  .Router({ mergeParams: true })
  .post("/create", documents.add)
  .get('/search', documents.search)
  .use('/:documentId', idRouter)

  module.exports = documentsRouter
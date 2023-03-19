const express = require("express");
const documents = require("./handlers");

const idRouter = express
  .Router({ mergeParams: true })
  .put("/", documents.edit)
  .delete("/", documents.remove)
  .get('/', documents.getById);

const documentsRouter = express
  .Router({ mergeParams: true })
  .post("/", documents.add)
  .get('/search', documents.search)
  .use('/:documentId', idRouter)

  module.exports = documentsRouter
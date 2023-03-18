const express = require("express");
const documents = require("../../../controllers/studios/projects/documents");

const id_router = express
  .Router({ mergeParams: true })
  .put("/edit", documents.edit)
  .delete("/delete", documents.remove);

const documents_router = express
  .Router({ mergeParams: true })
  .post("/create", documents.add)
  .use('/:documentId', id_router)

  module.exports = documents_router

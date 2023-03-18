const express = require("express");
const bills = require("../../../controllers/studios/projects/bills");

const id_router = express
  .Router({ mergeParams: true })
  .put("/edit", bills.edit)
  .delete("/delete", bills.remove);

const bills_router = express
  .Router({ mergeParams: true })
  .post("/create", bills.add)
  .get('/search', bills.search)
  .use('/:billId', id_router)

  module.exports = bills_router
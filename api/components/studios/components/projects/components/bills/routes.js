const express = require("express");
const bills = require("./controllers");

const idRouter = express
  .Router({ mergeParams: true })
  .put("/", bills.edit)
  .delete("/", bills.remove)
  .get('/', bills.getById);

const billsRouter = express
  .Router({ mergeParams: true })
  .post("/", bills.add)
  .get('/search', bills.search)
  .use('/:billId', idRouter)

  module.exports = billsRouter
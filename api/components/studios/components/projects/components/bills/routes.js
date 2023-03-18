const express = require("express");
const bills = require("./controllers");

const idRouter = express
  .Router({ mergeParams: true })
  .put("/edit", bills.edit)
  .delete("/delete", bills.remove);

const billsRouter = express
  .Router({ mergeParams: true })
  .post("/create", bills.add)
  .get('/search', bills.search)
  .use('/:billId', idRouter)

  module.exports = billsRouter
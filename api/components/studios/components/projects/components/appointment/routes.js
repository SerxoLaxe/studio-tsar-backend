const express = require("express");
const appointments = require("./controllers");

const idRouter = express
  .Router({ mergeParams: true })
  .put("/edit", appointments.edit)
  .delete("/delete", appointments.remove);

const appointmentsRouter = express
  .Router({ mergeParams: true })
  .post("/add", appointments.add)
  .get('/search', appointments.search)
  .use('/:appointmentId', idRouter)

  module.exports = appointmentsRouter
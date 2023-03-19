const express = require("express");
const appointments = require("./controllers");

const idRouter = express
  .Router({ mergeParams: true })
  .put("/", appointments.edit)
  .delete("/", appointments.remove);

const appointmentsRouter = express
  .Router({ mergeParams: true })
  .post("/", appointments.add)
  .get('/search', appointments.search)
  .use('/:appointmentId', idRouter)

  module.exports = appointmentsRouter
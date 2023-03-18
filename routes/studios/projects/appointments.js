const express = require("express");
const appointments = require("../../../controllers/studios/projects/appointment");

const id_router = express
  .Router({ mergeParams: true })
  .put("/edit", appointments.edit)
  .delete("/delete", appointments.remove);

const appointments_router = express
  .Router({ mergeParams: true })
  .post("/add", appointments.add)
  .get('/search', appointments.search)
  .use('/:appointmentId', id_router)

  module.exports = appointments_router
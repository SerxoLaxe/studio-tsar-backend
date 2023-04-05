const Router = require("express").Router;
const clients = require("./handlers");

const idRouter = Router({ mergeParams: true })
  .put("/", clients.edit)
  .delete("/", clients.remove);

  const clientsRouter = Router({mergeParams:true})
  .post('/', clients.add)
  .get('/search', clients.search)
  .use('/:clientId', idRouter)
  
  module.exports = clientsRouter
const Router = require("express").Router;
const clients = require("./controllers");

const idRouter = Router({ mergeParams: true })
  .put("/", clients.edit)
  .delete("/", clients.remove);

  const clientsRouter = Router({mergeParams:true})
  .post('/', clients.add)
  .get('/search', clients.search)
  .use('/:clientId', idRouter)
  
  module.exports = clientsRouter
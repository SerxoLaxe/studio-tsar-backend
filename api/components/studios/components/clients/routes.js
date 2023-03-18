const Router = require("express").Router;
const clients = require("./controllers");

const idRouter = Router({ mergeParams: true })
  .put("/edit", clients.edit)
  .delete("/remove", clients.remove);

  const clientsRouter = Router({mergeParams:true})
  .post('/add', clients.add)
  .get('/search', clients.search)
  .use('/:clientId', idRouter)
  
  module.exports = clientsRouter
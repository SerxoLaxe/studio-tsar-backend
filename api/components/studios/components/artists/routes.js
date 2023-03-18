const Router = require("express").Router;
const artists = require("./controllers");

const idRouter = Router({ mergeParams: true })
  .put("/edit", artists.edit)
  .delete("/remove", artists.remove);

  const artistsRouter = Router({mergeParams:true})
  .post('/add', artists.add)
  .get('/search', artists.search)
  .use('/:artistId', idRouter)
  
  module.exports = artistsRouter
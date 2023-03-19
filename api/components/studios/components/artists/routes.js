const Router = require("express").Router;
const artists = require("./controllers");

const idRouter = Router({ mergeParams: true })
  .put("/", artists.edit)
  .delete("/", artists.remove)

  const artistsRouter = Router({mergeParams:true})
  .post('/', artists.add)
  .get('/search', artists.search)
  .use('/:artistId', idRouter)
  
  module.exports = artistsRouter
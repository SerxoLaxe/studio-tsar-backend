const { Router } = require("express");
const googleRoutes = require("./google").routes;
const localRoutes = require("./local").routes;

const authRouter = Router()
  .use("/google", googleRoutes)
  .use("/local", localRoutes);

module.exports = authRouter;

const { Router } = require("express");
const googleRoutes = require("./google").routes;

const authRouter = Router({ mergeParams: true }).use("/google", googleRoutes);

module.exports = authRouter;

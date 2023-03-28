const { Router } = require("express");
const googleRoutes = require("./google").routes;

const authRouter = Router().use("/google", googleRoutes);

module.exports = authRouter;

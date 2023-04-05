const { Router } = require("express");
const passport = require("passport");
const googleRouter = Router()
  .post(
    "/",
    passport.authenticate("user_local", {
      session: false,
      passReqToCallback: true,
    }),
    (req, res) => {
      res.redirect(`/api/users/${req.user.userId}`);
    }
  )
  .get("/test", (req, res) => res.send({ msg: "hi" }));

module.exports = googleRouter;

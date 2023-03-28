const { Router } = require("express");
const passport = require("../../../../../services/passportConfig").passport;

const googleRouter = Router()
  .get("/", passport.authenticate("user_google", { scope: ["email", "profile"] }))
  .get(
    "/callback",
    passport.authenticate("user_google", {
      session: false,
    }),
    (req, res) => {
      res.redirect(`/api/users/${req.user.id}`);
    }
  );

module.exports = googleRouter;

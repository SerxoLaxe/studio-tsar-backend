const { Router } = require("express");
const passport = require("../../../../../services/passportConfig").passport;

const googleRouter = Router({ mergeParams: true })
  .get("/", passport.authenticate("google", { scope: ["email", "profile"] }))
  .get(
    "/callback",
    passport.authenticate("google", {
      session: false,
    }),
    (req, res) => {
      res.redirect(`/api/users/${req.user.id}`);
    }
  );

module.exports = googleRouter;

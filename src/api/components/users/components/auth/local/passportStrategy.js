const LocalStrategy = require("passport-local").Strategy;
const { users } = require("#models");
const passport = require("passport");

passport.use(
  "user_local",
  new LocalStrategy(async (email, password, done) => {
    try {
      const existingUser = await users.findOne({
        where: { email: email },
      });
      // if user exists return the user
      if (existingUser !== null) {
        console.log("User already exists");
        return done(null, existingUser);
      }
      // if user does not exist create a new user
      console.log("Creating new user...");
      const newUser = await users.create({
        privileges: "user",
        email: email,
        account_state: "active",
      });
      return done(null, newUser);
    } catch (error) {
      return done(error, false);
    }
  })
);

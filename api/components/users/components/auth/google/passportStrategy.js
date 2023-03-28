const GoogleStrategy = require("passport-google-oauth2").Strategy;
const usersModel = require("../../../../../../models").users;

const userGoogleStrategy = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `http://${process.env.HOST}:${process.env.PORT}/api/users/auth/google/callback`,
    passReqToCallback: true,
  },
  async (req, accessToken, refreshToken, profile, done) => {
    try {
      const existingUser = await usersModel.findOne({
        where: { google_id: profile.id },
      });
      // if user exists return the user
      if (existingUser !== null) {
        console.log('User already exists')
        return done(null, existingUser);
      }
      // if user does not exist create a new user
      console.log("Creating new user...");
      const newUser = await usersModel.create({
        privileges: "user",
        email: profile.emails[0].value,
        account_state: 'active',
        google_id: profile.id,
      });
      return done(null, newUser);
    } catch (error) {
      return done(error, false);
    }
  }
);

module.exports = userGoogleStrategy;

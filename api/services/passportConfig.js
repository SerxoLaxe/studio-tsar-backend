const userGoogleStrategy = require("../components/users/components/auth/google/passportStrategy");
const passport = require('passport')

function passportConfig() {
  passport.use( 'user_google', userGoogleStrategy);
}

module.exports = {passportConfig, passport};

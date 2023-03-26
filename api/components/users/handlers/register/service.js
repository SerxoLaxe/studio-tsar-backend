const db = require("../../../../../models");
function registerUser(email) {
  const user = db.users.create({ privileges: "user", email: email });
  console.log(user.id);
}

module.exports = registerUser;

const db = require("../../../../../models");

async function checkIfEmailAlreadyRegistered(email) {
  const user = await db.users.findOne({ where: { email: email } });
  if (user !== null) {
    const error = new Error("Email already registered.");
    error.httpStatus = 409;
    throw error;
  }
}

async function addUserToTable(email) {
  const user = await db.users.create({ privileges: "user", email: email });
  console.log(user.id);
}

async function registerUser(email) {
  await checkIfEmailAlreadyRegistered(email);
  await addUserToTable(email);
}

module.exports = registerUser;

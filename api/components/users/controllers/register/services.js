const usersModel = require("../../../../../models").users;
const { APIerror } = require("../../../../services/customErrors");
const crypto = require('crypto')

async function getUsersWithEmail(email) {
  const users = await usersModel.findAll({ where: { email: email } });
  return users;
}

function areThereAcccountsActive(users) {
  for (const user of users) {
    if (user.account_state !== "deleted") {
      return true;
    }
  }
  return false;
}

async function isEmailAvailable(email) {
  const users = await getUsersWithEmail(email);
  //If there's no user registered with that email, then the email is available
  if (users === null) return true;
  //If the acccount (or any of the accounts) that have this email has an active account_state then the email is not available for registration
  if (areThereAcccountsActive(users)) {
    return false;
  } else return true;
}

function getRandomString(){
  const code = crypto.randomBytes(10).toString('hex')
  return code
}

async function addUserToTable(email) {
  const user = await usersModel.create({ privileges: "user", email: email , verification_code: getRandomString()});
}

async function registerUser(email) {
  const result = await isEmailAvailable(email);
  if (result === true) {
    await addUserToTable(email);
  } else {
    const error = new APIerror("Email already registered");
    error.statusCode = 409;
    throw error;
  }
}

module.exports = { registerUser };

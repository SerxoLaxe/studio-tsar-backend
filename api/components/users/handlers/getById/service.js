const users = require("../../../../../models").users;
const APIerror = require("../../../../services");

async function getUserById(id) {
  const user = await users.findOne({
    where: {
      id: id,
    },
  });
  if (user !== null) {
    return user;
  } else {
    const error = new APIerror(`User with id ${id} doesn't exist.`);
    error.httpStatus = 404;
    throw error;
  }
}

module.exports = getUserById;

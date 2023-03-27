const users = require("../../../../../models").users;
const APIerror = require("../../../../services");

async function getUserById(id) {
  const user = await users.findOne({
    where: {
      id: id,
    },
  })
  return user;
}

module.exports = getUserById;

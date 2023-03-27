const users = require("../../../models").users;

async function getUserById(id) {
  const user = await users.findOne({
    where: {
      id: id,
    },
  });
  return user;
}

module.exports = { getUserById };

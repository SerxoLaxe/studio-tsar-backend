const users = require("../../../../../models").users;
const { Op } = require('sequelize')
async function removeUser(id) {
  const user = await users.update(
    { account_state: "deleted" },
    { where: { id: id} }
  );
}
module.exports = { removeUser };

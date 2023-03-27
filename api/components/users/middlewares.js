const users = require("../../../models").users;
const APIerror = require('../../services')

async function userExists(req, res, next) {
  try {
    const user = await users.findOne({
      where: {
        id: req.params.userId,
      },
    });
    if (user !== null) {
      next();
    } else {
      const error = new APIerror(`User with id ${req.params.userId} doesn't exist.`);
      error.httpStatus = 404;
      throw error;
    }
  } catch (error) {
    next(error)
  }
}

module.exports = { userExists };

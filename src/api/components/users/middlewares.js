const users = require("#models").users;
const {APIerror }= require("#api").services.customErrors;

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
      const error = new APIerror(
        `User with id ${req.params.userId} doesn't exist.`
      );
      error.httpStatus = 404;
      throw error;
    }
  } catch (error) {
    next(error);
  }
}

async function isUserDeleted(req, res, next) {
  try {
    const user = await users.findOne({
      where: {
        id: req.params.userId,
      },
    });
    if (user.account_state == "deleted") {
      const error = new APIerror(`User account is deleted.`);
      error.httpStatus = 404;
      throw error;
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
}

async function isUserInactive(req, res, next) {
  try {
    const user = await users.findOne({
      where: {
        id: req.params.userId,
      },
    });
    if (user.account_state == "inactive") {
      const error = new APIerror(`User account is inactive.`);
      error.httpStatus = 404;
      throw error;
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
}

async function isUserVerified(req, res, next) {
  try {
    const user = await users.findOne({
      where: {
        id: req.params.userId,
      },
    });
    if (user.verification_code !== null) {
      const error = new APIerror(`User account is not verified.`);
      error.httpStatus = 404;
      throw error;
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
}

module.exports = { userExists, isUserDeleted, isUserInactive, isUserVerified };

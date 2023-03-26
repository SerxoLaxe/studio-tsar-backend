const registerUser = require('./service')
function create(req, res, next) {
  try {
    registerUser(req.body.email);
    res.statusCode = 200;
    res.send({
      status: "Ok",
      data: "New user account created successfully.",
    });
  } catch (error) {
    next(error);
  }
}

module.exports = create;

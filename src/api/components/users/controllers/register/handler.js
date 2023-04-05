const services = require("./services");
async function register(req, res, next) {
  try {
    await services.registerUser(req.body.email);
    res.statusCode = 201;
    res.send({
      status: "Ok",
      data: "New user account registered successfully.",
    });
  } catch (error) {
    next(error);
  }
}

module.exports = register;

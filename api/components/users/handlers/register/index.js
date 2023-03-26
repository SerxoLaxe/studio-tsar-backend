const registerUser = require("./service");
const validation = require("./validation");

async function controller(req, res, next) {
  try {
    await registerUser(req.body.email);
    res.statusCode = 200;
    res.send({
      status: "Ok",
      data: "New user account registered successfully.",
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { controller, validation };

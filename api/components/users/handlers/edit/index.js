const service = require("./service");
const validation = require("./validation");

async function handler(req, res, next) {
  try {
    res.statusCode = 200;
    res.send({
      status: "Ok",
      data: "User account edited successfully.",
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { handler, validation };

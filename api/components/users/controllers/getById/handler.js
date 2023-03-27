const services = require("../../services");

async function getById(req, res, next) {
  try {
    const user = await services.getUserById(req.params.userId);
    res.statusCode = 200;
    res.send({
      status: "Ok",
      data: user,
    });
  } catch (error) {
    next(error);
  }
}
module.exports = getById
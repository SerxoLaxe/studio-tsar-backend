const services = require("./services");
async function edit(req, res, next) {
  try {
    await services();
    res.statusCode = 200;
    res.send({
      status: "Ok",
      data: "User account edited successfully.",
    });
  } catch (error) {
    next(error);
  }
}

module.exports = edit;

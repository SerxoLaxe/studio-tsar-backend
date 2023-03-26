const service = require("./service");

async function handler(req, res, next) {
  try {
    const user = await service(req.params.userId);
    res.statusCode = 200;
    res.send({
      status: "Ok",
      data: user,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { handler };

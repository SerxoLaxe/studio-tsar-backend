const { Joi } = require("express-validation");
const idSchema = {
  params: Joi.object({ userId: Joi.number().integer().greater(0).required() }),
};

module.exports = { idSchema };

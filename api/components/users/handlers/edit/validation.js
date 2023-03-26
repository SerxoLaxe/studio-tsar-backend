const { Joi } = require("express-validation");

const schema = {
  body: Joi.object({
    first_name: Joi.string().max(45),
    second_name: Joi.string().max(45),
    description: Joi.string().max(300)
  }),
};
module.exports = schema
const {Joi} = require("express-validation");

const schema = {
  body: Joi.object({
    email: Joi.string().email().required(),
  }),
};

module.exports = schema;

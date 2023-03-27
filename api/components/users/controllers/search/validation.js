const {Joi} = require('express-validation')

const schema = {
    query: Joi.object({
        name: Joi.string().max(18).lowercase().required()
    })
}
module.exports = schema
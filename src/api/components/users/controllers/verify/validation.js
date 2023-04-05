const {Joi}  = require('express-validation')
const { options } = require('../../routes')

const schema = {
    params: Joi.object(
        {
            verificationCode: Joi.string().length(20).lowercase().required()
        }
    ).options({allowUnknown:true})
}

module.exports = schema
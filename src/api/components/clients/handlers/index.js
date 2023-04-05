const register = require('./register');
const edit = require('./edit');
const remove = require('./remove');
const validate = require('./validate');
const edit_preferences = require('./edit_preferences')
const getById = require('./getById')
const search = require('./search')

module.exports = {
    register,
    edit,
    remove,
    validate,
    edit_preferences, 
    getById,
    search
}

//Create an object constructor for a userrs
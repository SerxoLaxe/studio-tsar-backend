const create = require('./create');
const edit = require('./edit');
const remove = require('./remove');
const validate = require('./validate');
const edit_preferences = require('./edit_preferences')

module.exports = {
    create,
    edit,
    remove,
    validate,
    edit_preferences
}

//Create an object constructor for a user
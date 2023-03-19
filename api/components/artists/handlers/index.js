const create = require('./create');
const edit = require('./edit');
const remove = require('./remove');
const validate = require('./validate');
const edit_preferences = require('./edit_preferences')
const getById = require('./getById')
const search = require('./search')

module.exports = {
    create,
    edit,
    remove,
    validate,
    edit_preferences,
    getById,
    search
}
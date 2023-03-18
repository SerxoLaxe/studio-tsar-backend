const create = require('./create');
const edit = require('./edit');
const remove = require('./remove');
const search = require('./search')

const appointement = require('./appointment')
const bills = require('./bills')
const documents = require('./documents')


module.exports = {
    create,
    edit,
    remove,
    search,
    appointement,
    bills,
    documents
}
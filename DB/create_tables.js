const { tables } = require("./tablesDD");
const helpers = require('../helpers');

async function createTables(connection) {
    Object.keys(tables).forEach(
        (key) => {
            connection.query(
                `CREATE TABLE IF NOT EXISTS ${tables[key]}`
            )
        }
    );
    helpers.log(`Tablas creadas`);
}
module.exports={createTables};
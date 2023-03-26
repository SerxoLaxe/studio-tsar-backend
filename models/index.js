const { Sequelize } = require("sequelize");
const initModels = require("./init-models");
const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});
const db = initModels(sequelize)
db.sequelize = sequelize
db.Sequelize = Sequelize
module.exports = db;

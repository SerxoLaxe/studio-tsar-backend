/* Conjunto de funciones que crean la base de datos y la llenan con datos generados con el módulo Faker. */
const faker = require("faker");
const lodash = require("lodash"); //Módulo usado para generar números random.
const path = require("path"); //Módulo para creación de rutas de directorios y archivos.
const helpers = require("../helpers"); //Módulo que incluye los helpers globales.
const tables = require("./tablesDD").tables; // Módulo con los objetos que definen las tablas de la base de datos.
const connectionMysql = require("./connectionMysql"); //Modulo para obtener conexión a MYSQL
const fillDB = require('./fill_DB_with_fake_data').fillDB;
const createTables = require('./create_tables').createTables;
const { fakerConfig } = require("../config");
const { indexOf } = require("lodash");

/** Configura completamente la base de datos */
async function config() {
  const { RESET_DB } = process.env;
  let connection;
  try {
    connection = await connectionMysql();
    if (RESET_DB === "true") {
     //await createTables(connection);
      /*  //Si la variable de entorno RESET_DB es true reseteamos la base de datos.
       await eliminarTablas(conexion);
       await crearTablas(conexion);
       await crearAdministrador(conexion);
       await llenarTablaUsuarios(fakerConfig.usuarios.cantidad, conexion);
       await llenarTablaExperiencias(
         fakerConfig.experiencias.cantidad,
         conexion
       ); */
    } else if (RESET_DB === "false") {
      //De lo contrario sólo creamos las tablas si no existen.
      /* await crearTablas(conexion); */
    } else {
      throw new Error("Valor de variable de entorno RESET_DB no válido");
    }
  } catch (error) {
    helpers.logError(error);
  } finally {
    if (connection) {
      connection.release();
    }
  }
}
fillDB()

module.exports = { config };

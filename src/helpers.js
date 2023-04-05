const chalk = require("chalk");
/**
 * Formatea y estiliza mensajes de log.
 *
 * @param {string} message
 */
function log(message) {
  console.log(chalk.green.bold("==> ") + message);
}

/**
 * Formatea y estiliza mensajes de error. Si la variable de entorno VERBOSE es
 * true, muestra el stacktrace, de lo contrario sólo muestra el mensaje de error.
 *
 * @param {Object} error
 */
function logError(error) {
  console.error(chalk.red.bold(error));
  if (process.env.VERBOSE === "true") {
    console.error(chalk.red(error.stack));
  }
}

module.exports = {
  log,
  logError,
};

// Módulo que carga las variables del archivo .env en las variables de entorno
require("dotenv").config();

// Destructuring de las variables de entorno necesarias;
const { HOST, PORT, UPLOAD_DIRECTORY } = process.env;

// Módulo para el formato de direcciones de archivos y directorios.
const path = require("path");

// Middleware log de eventos de express.
const morgan = require("morgan");

// Middleware para la subida de archivos al servidor.
const fileUpload = require("express-fileupload");

// Módulo para editar formato y estilo de logs.
const chalk = require("chalk");

// Helpers incluye generador de codigos de validacion, formateo de fechas, customización de errores...
const helpers = require("./helpers");

// Módulo para la creación de servidor http.
const express = require("express");

// Definición de aplicación Express.
const app = express();

// Reset y configuración de la base de datos con datos creados por módulo Faker.
require("./DB/initDB").config();

// Se incluye este modulo, para que no exista conflictos en la base de datos cuando se realicen  peticiones en el servidor local
const cors = require("cors");

/////////////////////////////////////*MIDDLEWARES*///////////////////////////////////////

// GLOBALES

// MIddleware log de eventos de express.
app.use(morgan("dev"));

//Evita conflictos en nuestra base de datos local.
app.use(cors());

// Middleware parsing responses a json.
app.use(express.json());

// Middleware recursos estáticos.
app.use("/static", express.static(path.join(__dirname, UPLOAD_DIRECTORY)));

// Middleware subida de archivos a servidor.
app.use(fileUpload());

///////////////////////////////////* ENDPOINTS *////////////////////////////////////////

const users = require('./controllers/users');
app.post('/users/create', users.create);
app.delete('/users/remove', users.remove)
app.put('/users/edit', users.edit);
app.put('/users/validate', users.validate);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Middleware error */
app.use((err, req, res, next) => {
  res.status(err.httpStatus || 500).send({
    status: "error",
    message: err.message,
  });
  helpers.logError(err);
});

/* Middleware página no encontrada */
app.use((req, res, next) => {
  res.statusCode = 404;
  res.send({
    status: 404,
    message: "Page not founf",
  });
});

/* Iniciar escucha del servidor. */
app.listen(PORT, HOST, () => {
  console.log(chalk.yellow.bold(`Servidor escuchando en ${HOST}:${PORT}`));
});
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

const artists = require('./controllers/users/artists');
app.post('/artists/create', artists.create);
app.delete('/artists/remove', artists.remove)
app.put('/artists/edit', artists.edit);
app.put('/artists/validate', artists.validate);

const clients = require('./controllers/users/clients');
app.post('/clients/create', clients.create);
app.delete('/clients/remove', clients.remove);
app.put('/clients/edit', clients.edit);
app.put('/clients/validate', clients.validate);

const proyects = require('./controllers/proyects');
app.post('/proyects/create', proyects.create);
app.delete('/proyects/remove', proyects.remove);
app.put('/proyects/edit', proyects.edit);
app.put('/proyects/validate', proyects.validate);

const studios = require('./controllers/studios');
app.post('/studios/create', studios.create);
app.delete('/sudios/remove', studios.remove);
app.put('/studios/edit', studios.edit);
app.put('/studios/validate', studios.validate);

app.get('/help', (req, res, next) => {
  res.statusCode = 200;
  res.send({
    status: 'Ok',
    message: 'How to use this API',
    data:{
      userEndpoints:{
        createUser: '/artists/create',
        createClient: '/clients/create'
      }
    }
  })
})

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
    message: "Page not found",
  });
});

/* Iniciar escucha del servidor. */
app.listen(PORT, HOST, () => {
  console.log(chalk.yellow.bold(`Servidor escuchando en ${HOST}:${PORT}`));
});
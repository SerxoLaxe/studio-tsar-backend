// Import dotenv module. Dedicated to load environment variables contained in './.env' file
require("dotenv").config();

// Destructuring environment variables;
const { HOST, PORT, UPLOAD_DIRECTORY } = process.env;

// format and manage file paths with module Path.
const path = require("path");

// Middleware for express event logging.
const morgan = require("morgan");

// Middleware for file uploading.
const fileUpload = require("express-fileupload");

// format, color and style for log messages with Chalk module.
const chalk = require("chalk");

// Helper functions
const helpers = require("./helpers");

// import express.
const express = require("express");

// Define Express app.
const app = express();

// Configure the database at application start.
//require("./DB/initDB").config();
const db = require('./models/index.js')
db.sequelize.drop()
db.sequelize.sync({force: true})

// Import cors module
const cors = require("cors");

/////////////////////////////////////*MIDDLEWARES*///////////////////////////////////////

// Middleware for logging events.
app.use(morgan("dev"));

//Cors middleware.
app.use(cors());

// Middleware to parse json responses.
app.use(express.json());

// Middleware for static resources.
app.use("/static", express.static(path.join(__dirname, UPLOAD_DIRECTORY)));

// Middleware for file uploading.
app.use(fileUpload());

///////////////////////////////////* ROUTES *////////////////////////////////////////
const router = require("./api/routes");
app.use(router);

app.get("/help", (req, res, next) => {
  res.statusCode = 200;
  res.send({
    status: "Ok",
    message: "How to use this API",
    data: {
      userEndpoints: {
        createUser: "/artists/create",
        createClient: "/clients/create",
      },
    },
  });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Middleware error */
app.use((err, req, res, next) => {
  res.status(err.httpStatus || 500).send({
    status: "error",
    message: err.message,
  });
  helpers.logError(err);
});

/* Middleware page not found*/
app.use((req, res, next) => {
  res.statusCode = 404;
  res.send({
    status: 404,
    message: "Page not found",
  });
});
/* DEVELOPMENT SCRIPTS */
const scripts = require('./scripts/expressScripts')

scripts.saveExpressRoutesToFile(app, './logs/express_routes_dump.json');

/* start server. */
app.listen(PORT, HOST, () => {
  console.log(chalk.yellow.bold(`Server listening on ${HOST}:${PORT}`));
});

const fs = require("fs");
const { options } = require("../routes");

function getExpressRoutes(expressApp) {
  const parsed = require("express-route-parser").parseExpressApp;
  return parsed(expressApp);
}

function saveExpressRoutesToFile(expressApp, filePath) {
    const expressRoutes = getExpressRoutes(expressApp)
  const parsedArray = JSON.stringify(expressRoutes, null, 2);
  fs.writeFileSync(filePath, parsedArray);
}

module.exports = {
  getExpressRoutes,
  saveExpressRoutesToFile
};

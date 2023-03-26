var DataTypes = require("sequelize").DataTypes;
var _bills = require("./bills");
var _clients = require("./clients");
var _documents = require("./documents");
var _events = require("./events");
var _images = require("./images");
var _project_sessions = require("./project_sessions");
var _projects = require("./projects");
var _studios = require("./studios");
var _users = require("./users");
var _users_has_clients = require("./users_has_clients");
var _users_has_studios = require("./users_has_studios");

function initModels(sequelize) {
  var bills = _bills(sequelize, DataTypes);
  var clients = _clients(sequelize, DataTypes);
  var documents = _documents(sequelize, DataTypes);
  var events = _events(sequelize, DataTypes);
  var images = _images(sequelize, DataTypes);
  var project_sessions = _project_sessions(sequelize, DataTypes);
  var projects = _projects(sequelize, DataTypes);
  var studios = _studios(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var users_has_clients = _users_has_clients(sequelize, DataTypes);
  var users_has_studios = _users_has_studios(sequelize, DataTypes);

  projects.belongsTo(clients, { as: "client", foreignKey: "client_id"});
  clients.hasMany(projects, { as: "projects", foreignKey: "client_id"});
  users_has_clients.belongsTo(clients, { as: "client", foreignKey: "clients_id"});
  clients.hasMany(users_has_clients, { as: "users_has_clients", foreignKey: "clients_id"});
  project_sessions.belongsTo(events, { as: "event", foreignKey: "events_id"});
  events.hasMany(project_sessions, { as: "project_sessions", foreignKey: "events_id"});
  bills.belongsTo(projects, { as: "project", foreignKey: "project_id"});
  projects.hasMany(bills, { as: "bills", foreignKey: "project_id"});
  documents.belongsTo(projects, { as: "project", foreignKey: "projects_id"});
  projects.hasMany(documents, { as: "documents", foreignKey: "projects_id"});
  images.belongsTo(projects, { as: "project", foreignKey: "projects_id"});
  projects.hasMany(images, { as: "images", foreignKey: "projects_id"});
  project_sessions.belongsTo(projects, { as: "project", foreignKey: "projects_id"});
  projects.hasMany(project_sessions, { as: "project_sessions", foreignKey: "projects_id"});
  events.belongsTo(studios, { as: "studio", foreignKey: "studio_id"});
  studios.hasMany(events, { as: "events", foreignKey: "studio_id"});
  projects.belongsTo(studios, { as: "studio", foreignKey: "studio_id"});
  studios.hasMany(projects, { as: "projects", foreignKey: "studio_id"});
  users_has_studios.belongsTo(studios, { as: "studio", foreignKey: "studios_id"});
  studios.hasMany(users_has_studios, { as: "users_has_studios", foreignKey: "studios_id"});
  bills.belongsTo(users, { as: "created_by_user", foreignKey: "created_by_user_id"});
  users.hasMany(bills, { as: "bills", foreignKey: "created_by_user_id"});
  events.belongsTo(users, { as: "inserted_by_user", foreignKey: "inserted_by_user_id"});
  users.hasMany(events, { as: "events", foreignKey: "inserted_by_user_id"});
  images.belongsTo(users, { as: "created_by_user", foreignKey: "created_by_user_id"});
  users.hasMany(images, { as: "images", foreignKey: "created_by_user_id"});
  projects.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(projects, { as: "projects", foreignKey: "user_id"});
  users_has_clients.belongsTo(users, { as: "user", foreignKey: "users_id"});
  users.hasMany(users_has_clients, { as: "users_has_clients", foreignKey: "users_id"});
  users_has_studios.belongsTo(users, { as: "user", foreignKey: "users_id"});
  users.hasMany(users_has_studios, { as: "users_has_studios", foreignKey: "users_id"});

  return {
    bills,
    clients,
    documents,
    events,
    images,
    project_sessions,
    projects,
    studios,
    users,
    users_has_clients,
    users_has_studios,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

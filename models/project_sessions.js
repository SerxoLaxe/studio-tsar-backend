const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('project_sessions', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    projects_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'projects',
        key: 'id'
      }
    },
    events_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'events',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'project_sessions',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "fk_project_sessions_projects1_idx",
        using: "BTREE",
        fields: [
          { name: "projects_id" },
        ]
      },
      {
        name: "fk_project_sessions_events1_idx",
        using: "BTREE",
        fields: [
          { name: "events_id" },
        ]
      },
    ]
  });
};

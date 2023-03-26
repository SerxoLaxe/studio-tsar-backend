const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('documents', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    type: {
      type: DataTypes.ENUM('informed_consent','parental_leave','national_id'),
      allowNull: false
    },
    uuid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    projects_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'projects',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'documents',
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
        name: "fk_documents_projects1_idx",
        using: "BTREE",
        fields: [
          { name: "projects_id" },
        ]
      },
    ]
  });
};

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users_has_studios', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    users_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    studios_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'studios',
        key: 'id'
      }
    },
    relation: {
      type: DataTypes.ENUM('owner','resident','guest'),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'users_has_studios',
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
        name: "fk_users_has_studios_studios1_idx",
        using: "BTREE",
        fields: [
          { name: "studios_id" },
        ]
      },
      {
        name: "fk_users_has_studios_users_idx",
        using: "BTREE",
        fields: [
          { name: "users_id" },
        ]
      },
    ]
  });
};

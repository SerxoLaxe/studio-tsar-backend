const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "users",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      first_name: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      second_name: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      privileges: {
        type: DataTypes.ENUM("admin", "user"),
        allowNull: false,
      },
      account_state: {
        type: DataTypes.ENUM("active", "unactive", "deleted"),
        allowNull: false,
        defaultValue: "unactive",
      },
      email: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      password: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      verification_code: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "users",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
        {
          name: "idusers_UNIQUE",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        }
      ],
    }
  );
};

"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init(
    {
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: DataTypes.TEXT,
      name: DataTypes.STRING,
      photo: DataTypes.TEXT,
      role: DataTypes.ENUM("user", "admin"),
    },
    {
      sequelize,
      modelName: "users",
      tableName: "users",
      paranoid: true,
    }
  )
  return users
}

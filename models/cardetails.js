"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class carDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      carDetails.hasOne(models.car, {
        foreignKey: "plate",
      })
    }
  }
  carDetails.init(
    {
      plate: DataTypes.STRING,
      options: DataTypes.STRING,
      specs: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "carDetails",
      paranoid: true,
    }
  )
  return carDetails
}

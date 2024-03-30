"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      car.belongsTo(models.carDetails, { foreignKey: "plate", targetKey: "plate" })
    }
  }
  car.init(
    {
      plate: DataTypes.STRING,
      manufacture: DataTypes.STRING,
      model: DataTypes.STRING,
      image: DataTypes.TEXT,
      rentPerDay: DataTypes.INTEGER,
      capacity: DataTypes.INTEGER,
      description: DataTypes.STRING,
      transmission: DataTypes.STRING,
      available: DataTypes.BOOLEAN,
      type: DataTypes.STRING,
      year: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "car",
      tableName: "car",
      paranoid: true,
    }
  )
  return car
}

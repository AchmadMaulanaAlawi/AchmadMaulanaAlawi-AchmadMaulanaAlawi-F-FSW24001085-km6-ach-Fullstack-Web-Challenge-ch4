"use strict"
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("car", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      plate: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING,
      },
      manufacture: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      model: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      image: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      rentPerDay: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      capacity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      description: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      transmission: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      available: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      year: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("car")
  },
}

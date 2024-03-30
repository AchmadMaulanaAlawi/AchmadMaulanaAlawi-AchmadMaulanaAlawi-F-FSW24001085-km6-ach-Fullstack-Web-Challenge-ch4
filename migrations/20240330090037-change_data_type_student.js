"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.changeColumn("car", "image", {
      type: Sequelize.TEXT,
      allowNull: true,
    })
  },

  async down(queryInterface, Sequelize) {
    queryInterface.changeColumn("car", "image", {
      type: Sequelize.STRING,
      allowNull: true,
    })
  },
}

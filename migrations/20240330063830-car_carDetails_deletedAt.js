"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // add deletedAt column in car table
    await queryInterface.addColumn("car", "deletedAt", {
      allowNull: true,
      type: Sequelize.DATE,
    })
    // add deletedAt column in carDetails table
    await queryInterface.addColumn("carDetails", "deletedAt", {
      allowNull: true,
      type: Sequelize.DATE,
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("car", "deletedAt")
    await queryInterface.removeColumn("carDetails", "deletedAt")
  },
}

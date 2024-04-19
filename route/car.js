// const express = require("express")
// const router = express.Router()

// const carController = require("../controller/car")

// router.route("/").get(carController.getCars).post(carController.createCar)

// router
//   .route("/:id")
//   .get(carController.getCar)
//   .put(carController.updateCar)
//   .delete(carController.deleteCar)

// module.exports = router

const express = require("express")
const router = express.Router()
const carController = require("../controller/car")
const { authMiddleware } = require("../middleware/auth")

router
  .route("/")
  .get(authMiddleware(["user", "admin"]), carController.getCars)
  .post(authMiddleware(["admin"]), carController.createCar)

router
  .route("/:id")
  .get(authMiddleware(["user", "admin"]), carController.getCar)
  .put(authMiddleware(["admin"]), carController.updateCar)
  .delete(authMiddleware(["admin"]), carController.deleteCar)

module.exports = router

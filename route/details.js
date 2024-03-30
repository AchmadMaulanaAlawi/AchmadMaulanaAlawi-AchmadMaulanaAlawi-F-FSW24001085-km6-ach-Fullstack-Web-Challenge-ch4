const express = require("express")
const router = express.Router()
const detailsController = require("../controller/details")

router
  .route("/")
  .get(detailsController.getDetails)
  .post(detailsController.createDetails)

router
  .route("/:id")
  .get(detailsController.getDetail)
  .put(detailsController.updateDetails)
  .delete(detailsController.deleteDetails)

module.exports = router

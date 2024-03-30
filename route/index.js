const express = require("express")
const router = express.Router()
const car = require("./car")
const details = require("./details")

router.use("/car", car)
router.use("/details", details)

module.exports = router

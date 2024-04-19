const express = require("express")
const router = express.Router()
const car = require("./car")
const details = require("./details")
const auth = require("./auth")

router.use("/car", car)
router.use("/details", details)

router.use("/auth", auth)

module.exports = router

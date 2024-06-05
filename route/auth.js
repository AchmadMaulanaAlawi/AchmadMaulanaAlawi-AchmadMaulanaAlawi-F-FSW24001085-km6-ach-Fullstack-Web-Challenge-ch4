const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middleware/auth");
const { register, login, profile, googleLogin } = require("../controller/auth");

router.post("/register", register);
router.post("/login", login);
router.get("/profile", authMiddleware(["user", "admin"]), profile);
router.post("/google-login", googleLogin);

module.exports = router;

const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");

router.route("/login").post(loginController);

module.exports = router;

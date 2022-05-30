const express = require("express");
const router = express.Router();

// controller
const { register } = require("../controllers/UserController");

// middlewares
const validate = require("../middlewares/handleValidation");

// Routes
router.post("/register", register);

module.exports = router;

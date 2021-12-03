const express = require("express");
const router = express.Router();
const { auth: ctrl } = require("../../controllers/index");

router.post("/users/signup", ctrl.register);

module.exports = router;

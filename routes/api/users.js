const express = require("express");
const router = express.Router();

const { auth } = require("../../middlewares");
const { users: ctrl } = require("../../controllers");

router.get("/current", auth, ctrl.getCurrent);

module.exports = router;
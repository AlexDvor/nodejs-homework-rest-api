const express = require("express");
const router = express.Router();
const { validation } = require("../../middlewares/index");
const { auth: ctrl } = require("../../controllers/index");
const { registerJoiSchema, loginJoiSchema } = require("../../schemas");

router.post("/signup", validation(registerJoiSchema), ctrl.register);

module.exports = router;

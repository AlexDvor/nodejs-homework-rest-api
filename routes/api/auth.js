const express = require("express");
const router = express.Router();
const { validation, auth } = require("../../middlewares/index");
const { auth: ctrlAuth } = require("../../controllers/index");
const { registerJoiSchema, loginJoiSchema } = require("../../schemas");

router.post("/signup", validation(registerJoiSchema), ctrlAuth.register);
router.post("/login", validation(loginJoiSchema), ctrlAuth.login);
router.post("/logout", auth, ctrlAuth.logout);

module.exports = router;

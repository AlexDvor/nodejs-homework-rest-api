const express = require("express");
const router = express.Router();
const { validation, auth } = require("../../middlewares/index");
const { auth: ctrl } = require("../../controllers/index");
const { users: ctrlUser } = require("../../controllers");
const {
  registerJoiSchema,
  loginJoiSchema,
  subJoiSchema,
} = require("../../schemas");

router.post("/signup", validation(registerJoiSchema), ctrl.register);
router.post("/login", validation(loginJoiSchema), ctrl.login);
router.post("/logout", auth, ctrl.logout);
router.patch(
  "/:userId/subscription",
  validation(subJoiSchema),
  ctrlUser.updateSubscription
);

module.exports = router;

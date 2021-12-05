const express = require("express");
const router = express.Router();
const { validation, auth } = require("../../middlewares");
const { users: ctrl } = require("../../controllers");
const { subJoiSchema } = require("../../schemas");

router.get("/", auth, ctrl.getCurrent);
router.patch(
  "/:userId/subscription",
  validation(subJoiSchema),
  ctrl.updateSubscription
);

module.exports = router;

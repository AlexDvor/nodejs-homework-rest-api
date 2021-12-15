const express = require("express");
const router = express.Router();
const { validation, auth, upload } = require("../../middlewares");
const { users: ctrl } = require("../../controllers");
const { subJoiSchema } = require("../../schemas");

router.get("/current", auth, ctrl.getCurrent);
router.patch("/avatars", auth, upload.single("avatar"), ctrl.updateAvatar);
router.patch(
  "/:userId/subscription",
  validation(subJoiSchema),
  ctrl.updateSubscription
);

module.exports = router;

const express = require("express");
const router = express.Router();
const { contacts: ctrl } = require("../../controllers/index");
const { contactsSchema } = require("../../schemas/index");
const { validation } = require("../../middlewares/index");
const { statusJoiSchema } = require("../../models/contact");

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getById);

router.post("/", validation(contactsSchema), ctrl.add);

router.delete("/:contactId", ctrl.removeById);

router.put("/:contactId", validation(contactsSchema), ctrl.updateById);

router.patch(
  "/:contactId/favorite",
  validation(statusJoiSchema),
  ctrl.updateStatusContact
);

module.exports = router;

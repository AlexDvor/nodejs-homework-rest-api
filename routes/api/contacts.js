const express = require("express");
const router = express.Router();
const { contacts: ctrl } = require("../../controllers/index");
const { validation } = require("../../middlewares/index");
const { contactsJoiSchema, statusJoiSchema } = require("../../schemas");

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getById);

router.post("/", validation(contactsJoiSchema), ctrl.add);

router.delete("/:contactId", ctrl.removeById);

router.put("/:contactId", validation(contactsJoiSchema), ctrl.updateById);

router.patch(
  "/:contactId/favorite",
  validation(statusJoiSchema),
  ctrl.updateStatusContact
);

module.exports = router;

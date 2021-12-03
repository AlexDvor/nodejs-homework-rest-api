const { contactsJoiSchema, statusJoiSchema } = require("./contacts");
const { registerJoiSchema, loginJoiSchema } = require("./users");

module.exports = {
  contactsJoiSchema,
  statusJoiSchema,
  registerJoiSchema,
  loginJoiSchema,
};

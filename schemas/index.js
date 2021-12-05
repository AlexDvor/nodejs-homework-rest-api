const { contactsJoiSchema, statusJoiSchema } = require("./contacts");
const { registerJoiSchema, loginJoiSchema, subJoiSchema } = require("./users");

module.exports = {
  contactsJoiSchema,
  statusJoiSchema,
  registerJoiSchema,
  loginJoiSchema,
  subJoiSchema,
};

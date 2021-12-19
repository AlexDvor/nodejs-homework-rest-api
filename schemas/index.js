const { contactsJoiSchema, statusJoiSchema } = require("./contacts");
const {
  registerJoiSchema,
  loginJoiSchema,
  subJoiSchema,
  emailJoiSchema,
} = require("./users");

module.exports = {
  contactsJoiSchema,
  statusJoiSchema,
  registerJoiSchema,
  loginJoiSchema,
  subJoiSchema,
  emailJoiSchema,
};

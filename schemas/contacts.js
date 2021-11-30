const Joi = require("joi");

const contactsJoiSchema = Joi.object({
  name: Joi.string().min(2).max(20).required(),
  email: Joi.string().min(3).max(30).required(),
  phone: Joi.string().min(3).max(30).required(),
});

const statusJoiSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = { contactsJoiSchema, statusJoiSchema };

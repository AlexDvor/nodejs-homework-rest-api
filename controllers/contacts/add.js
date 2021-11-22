const contactsOperations = require("../../model/index");
const Joi = require("joi");

const contactsSchema = Joi.object({
  name: Joi.string().min(2).max(20).required(),
  email: Joi.string().min(3).max(30).required(),
  phone: Joi.string().min(3).max(30).required(),
});

const add = async (req, res, next) => {
  try {
    const { error } = contactsSchema.validate(req.body);

    if (error) {
      const error = new Error("missing required name field");
      error.status = 400;
      throw error;
    }

    const result = await contactsOperations.addContact(req.body);
    res.status(201).json({ data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = add;

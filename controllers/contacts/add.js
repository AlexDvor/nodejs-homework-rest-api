const contactsOperations = require("../../model/index");

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
